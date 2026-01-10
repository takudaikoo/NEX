
import { getBusyIntervals } from './google-calendar';

export async function getAvailableSlots(
    calendarId: string,
    date: Date,
    durationMinutes: number
): Promise<Date[]> {
    // 1. Determine JST Day Range (00:00 - 23:59 JST)
    // The incoming 'date' is a specific point in time (often UTC midnight or JST midnight in UTC).
    // We want the "Calendar Date" in JST that this timestamp falls into.

    // Shift the date by +9 hours to get the JST date part from the UTC-based ISO string
    // e.g. Dec 31 00:00 JST -> Dec 30 15:00 UTC. 
    // Adding 9 hours -> Dec 31 00:00. ISO String then shows Dec 31.
    const jstDate = new Date(date.getTime() + 9 * 60 * 60 * 1000);
    const datePart = jstDate.toISOString().split('T')[0];

    // Construct start/end in strict ISO format with +09:00 offset to enforce JST
    const timeMinStr = `${datePart}T00:00:00+09:00`;
    const timeMaxStr = `${datePart}T23:59:59+09:00`;

    const dayStart = new Date(timeMinStr);
    const dayEnd = new Date(timeMaxStr);

    // Fetch busy intervals from Google Calendar
    const busySlots = await getBusyIntervals(calendarId, dayStart, dayEnd);

    const availableSlots: Date[] = [];
    // Business Hours: 10:00 - 22:00 JST
    // Set start time to 10:00 on the target day
    const businessStart = new Date(dayStart);
    businessStart.setHours(10, 0, 0, 0);

    const businessEnd = new Date(dayStart);
    businessEnd.setHours(22, 0, 0, 0);

    // Initialize currentSlot to the later of (businessStart, dayStart)
    // Though dayStart is 00:00, so businessStart (10:00) is always later.
    let currentSlot = new Date(businessStart);

    // Business Logic: 2 Hour Buffer relative to "Now"
    const now = new Date();
    const minTime = new Date(now.getTime() + 2 * 60 * 60 * 1000);

    // Loop through the day until Business End
    while (currentSlot.getTime() + durationMinutes * 60000 <= businessEnd.getTime()) {
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
