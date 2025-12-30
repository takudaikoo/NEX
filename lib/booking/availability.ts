
import { getBusyIntervals } from './google-calendar';

export async function getAvailableSlots(
    calendarId: string,
    date: Date, // The specific date to check (user local or UTC? assuming simplified logic)
    durationMinutes: number
): Promise<Date[]> {
    // Define working hours (should probably be configurable per service)
    const START_HOUR = 10; // 10:00 AM
    const END_HOUR = 19;   // 19:00 PM

    // Create range for the entire day (UTC)
    // Note: Handling timezones correctly is crucial. 
    // Ideally, we work in JST (UTC+9). 

    // For simplicity, let's assume 'date' is set to midnight JST of the target day.
    // We'll construct start/end times relative to that.

    const dayStart = new Date(date);
    dayStart.setHours(START_HOUR, 0, 0, 0);

    const dayEnd = new Date(date);
    dayEnd.setHours(END_HOUR, 0, 0, 0);

    // Fetch busy intervals for this day
    const busySlots = await getBusyIntervals(calendarId, dayStart, dayEnd);

    const availableSlots: Date[] = [];
    let currentSlot = new Date(dayStart);

    // Business Logic: 2 Hour Buffer
    // We need to compare currentSlot against "Now + 2 hours"
    // CAUTION: This "Now" is server time. Ensure server time is synced or close enough to user/business time.
    // Ideally, we'd use a specific timezone (JST). For now, relying on system clock + offset if needed.
    const now = new Date();
    const minTime = new Date(now.getTime() + 2 * 60 * 60 * 1000); // Now + 2 hours

    while (currentSlot.getTime() + durationMinutes * 60000 <= dayEnd.getTime()) {
        // Validation 1: Must be in the future (plus buffer)
        if (currentSlot < minTime) {
            currentSlot = new Date(currentSlot.getTime() + 60 * 60000);
            continue;
        }

        const slotEnd = new Date(currentSlot.getTime() + durationMinutes * 60000);

        // Check if this slot overlaps with any busy interval
        const isBusy = busySlots.some((busy) => {
            return (
                (currentSlot >= busy.start && currentSlot < busy.end) || // Start is inside busy
                (slotEnd > busy.start && slotEnd <= busy.end) ||         // End is inside busy
                (currentSlot <= busy.start && slotEnd >= busy.end)       // Encloses busy
            );
        });

        if (!isBusy) {
            availableSlots.push(new Date(currentSlot));
        }

        // Increment by 60 mins
        currentSlot = new Date(currentSlot.getTime() + 60 * 60000);
    }

    return availableSlots;
}
