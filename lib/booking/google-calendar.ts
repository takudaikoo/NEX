
import { google } from 'googleapis';

// Initialize the Google Calendar API client
// We use a Service Account for server-to-server communication
// In Vercel/Next.js dynamic usage, keys should be in .env

const SCOPES = ['https://www.googleapis.com/auth/calendar', 'https://www.googleapis.com/auth/calendar.events'];

const getAuthClient = async () => {
    // If using a service account (recommended for server-side)
    // Keys should be properly formatted in .env (replace \n with real newlines)
    const privateKey = process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n');
    const clientEmail = process.env.GOOGLE_CLIENT_EMAIL;

    if (!privateKey || !clientEmail) {
        console.warn("Missing Google Service Account credentials (GOOGLE_PRIVATE_KEY or GOOGLE_CLIENT_EMAIL). Calendar features may fail.");
        // Fallback or throw error depending on strictness
        // For now returning null to allow graceful compilation, but will throw at runtime
        return null;
    }

    const auth = new google.auth.JWT({
        email: clientEmail,
        key: privateKey,
        scopes: SCOPES
    });

    return auth;
};

// Interface for time slots
interface TimeSlot {
    start: Date;
    end: Date;
}

export async function getBusyIntervals(calendarId: string, timeMin: Date, timeMax: Date): Promise<TimeSlot[]> {
    console.log(`[GoogleCalendar] freebusy query for ${calendarId} from ${timeMin.toISOString()} to ${timeMax.toISOString()}`);
    const auth = await getAuthClient();
    if (!auth) {
        console.error("[GoogleCalendar] Auth client failed to initialize.");
        return [];
    }

    const calendar = google.calendar({ version: 'v3', auth });

    try {
        const response = await calendar.freebusy.query({
            requestBody: {
                timeMin: timeMin.toISOString(),
                timeMax: timeMax.toISOString(),
                items: [{ id: calendarId }],
            },
        });

        const busy = response.data.calendars?.[calendarId]?.busy;
        if (!busy) {
            console.log(`[GoogleCalendar] No busy data found for ${calendarId}. Response keys: ${Object.keys(response.data.calendars || {})}`);
            // Often 'errors' array is present in the calendar object if permission denied
            const calObj = response.data.calendars?.[calendarId];
            if (calObj && (calObj as any).errors) {
                console.error(`[GoogleCalendar] API Errors for ${calendarId}:`, (calObj as any).errors);
            }
            return [];
        }

        console.log(`[GoogleCalendar] Found ${busy.length} busy intervals.`);
        return busy.map((interval) => ({
            start: new Date(interval.start!),
            end: new Date(interval.end!),
        }));
    } catch (error) {
        console.error('[GoogleCalendar] Error fetching freebusy:', error);
        return [];
    }
}

export async function createCalendarEvent(
    calendarId: string,
    eventDetails: {
        summary: string;
        description: string;
        start: Date;
        end: Date;
    }
) {
    const auth = await getAuthClient();
    if (!auth) throw new Error("Google Auth Config Missing");

    const calendar = google.calendar({ version: 'v3', auth });

    try {
        const event = await calendar.events.insert({
            calendarId,
            requestBody: {
                summary: eventDetails.summary,
                description: eventDetails.description,
                start: { dateTime: eventDetails.start.toISOString() },
                end: { dateTime: eventDetails.end.toISOString() },
            },
        });
        return event.data;
    } catch (error) {
        console.error('Error creating calendar event:', error);
        throw error;
    }
}
