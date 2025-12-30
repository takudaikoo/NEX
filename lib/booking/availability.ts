
import { getBusyIntervals } from './google-calendar';

export async function getAvailableSlots(
    calendarId: string,
    date: Date,
    durationMinutes: number
): Promise<Date[]> {
    // 1. Determine JST Day Range (00:00 - 23:59 JST)
    // We treat the input 'date' as identifying the target calendar day.
    // We assume input date objects/strings map correctly to the YYYY-MM-DD we want in JST.

    // To ensure we get the YYYY-MM-DD part safely (assuming the input date represents the correct day),
    // we just use the ISO date part.
    // NOTE: validation of 'date' being correct day depends on caller.
    const datePart = date.toISOString().split('T')[0];

    // Construct start/end in strict ISO format with +09:00 offset to enforce JST
    const timeMinStr = `${datePart}T00:00:00+09:00`;
    const timeMaxStr = `${datePart}T23:59:59+09:00`;

    const dayStart = new Date(timeMinStr);
    const dayEnd = new Date(timeMaxStr);

    // Fetch busy intervals from Google Calendar
    const busySlots = await getBusyIntervals(calendarId, dayStart, dayEnd);

    const availableSlots: Date[] = [];
    let currentSlot = new Date(dayStart);

    // Business Logic: 2 Hour Buffer relative to "Now"
    const now = new Date();
    const minTime = new Date(now.getTime() + 2 * 60 * 60 * 1000);

    // Loop through the day
    while (currentSlot.getTime() + durationMinutes * 60000 <= dayEnd.getTime()) {
        const slotEnd = new Date(currentSlot.getTime() + durationMinutes * 60000);

        // 1. Buffer Check
        if (currentSlot < minTime) {
            currentSlot = new Date(currentSlot.getTime() + 30 * 60000); // Check next 30 min slot
            continue;
        }

        // 2. Busy Check
        const isBusy = busySlots.some((busy) => {
            // Standard Overlap Logic
            return (
                (currentSlot >= busy.start && currentSlot < busy.end) ||
                (slotEnd > busy.start && slotEnd <= busy.end) ||
                (currentSlot <= busy.start && slotEnd >= busy.end)
            );
        });

        if (!isBusy) {
            availableSlots.push(new Date(currentSlot));
        }

        // 3. Increment
        // Use 30 mins granularity for start times (standard for most bookings)
        // regardless of duration. 
        // e.g. 60min service: 10:00-11:00, 10:30-11:30, 11:00-12:00
        currentSlot = new Date(currentSlot.getTime() + 30 * 60000);
    }

    return availableSlots;
}
