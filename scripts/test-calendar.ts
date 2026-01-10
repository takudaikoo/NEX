
import { google } from 'googleapis';
import fs from 'fs';
import path from 'path';

// Manual env parsing to avoid dependency
const envPath = path.resolve(process.cwd(), '.env.local');
const envContent = fs.readFileSync(envPath, 'utf-8');
const envVars: any = {};
envContent.split('\n').forEach(line => {
    const [key, ...values] = line.split('=');
    if (key && values.length > 0) {
        let val = values.join('=');
        // Remove quotes if present
        if (val.startsWith('"') && val.endsWith('"')) val = val.slice(1, -1);
        if (val.startsWith("'") && val.endsWith("'")) val = val.slice(1, -1);
        envVars[key.trim()] = val.trim();
    }
});

async function main() {
    console.log("--- Google Calendar Connection Test ---");

    const clientEmail = envVars.GOOGLE_CLIENT_EMAIL;
    const privateKey = envVars.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n');
    const calendarId = 'takudai.koo@gmail.com';

    console.log(`1. Credentials Check:`);
    console.log(`   Email: ${clientEmail ? clientEmail : 'MISSING'}`);
    console.log(`   Key: ${privateKey ? 'Found (Length: ' + privateKey.length + ')' : 'MISSING'}`);

    if (!clientEmail || !privateKey) {
        console.error("ERROR: Credentials missing in .env.local");
        return;
    }

    const auth = new google.auth.JWT({
        email: clientEmail,
        key: privateKey,
        scopes: ['https://www.googleapis.com/auth/calendar.readonly']
    });

    console.log(`\n2. Attempting Auth...`);
    try {
        await auth.authorize();
        console.log("   Auth Successful.");
    } catch (e: any) {
        console.error("   ERROR: Auth Failed.", e.message);
        return;
    }

    const calendar = google.calendar({ version: 'v3', auth });

    console.log(`\n3. Checking Calendar Access for: ${calendarId}`);
    try {
        // Try getting calendar metadata
        const cal = await calendar.calendars.get({ calendarId });
        console.log(`   Success! Found calendar: ${cal.data.summary}`);
    } catch (e: any) {
        console.error(`   ERROR: Could not access calendar. (${e.message})`);
        console.error(`   -> Most likely cause: The calendar '${calendarId}' is not shared with '${clientEmail}'.`);
        return;
    }

    console.log(`\n4. Listing Events (Next 7 Days)...`);
    const now = new Date();
    const nextWeek = new Date();
    nextWeek.setDate(now.getDate() + 7);

    try {
        const events = await calendar.events.list({
            calendarId,
            timeMin: now.toISOString(),
            timeMax: nextWeek.toISOString(),
            singleEvents: true,
            orderBy: 'startTime',
        });

        const items = events.data.items || [];
        console.log(`   Found ${items.length} events.`);
        if (items.length === 0) {
            console.warn("   WARNING: Access ok, but 0 events found. Are there really none? Or are they private?");
        }

        items.slice(0, 5).forEach((event, i) => {
            const start = event.start?.dateTime || event.start?.date;
            const end = event.end?.dateTime || event.end?.date;
            // Check transparency
            const transparency = event.transparency || 'opaque'; // opaque = busy, transparent = free
            console.log(`   [${i + 1}] ${start} - ${end} | ${event.summary} | Status: ${transparency === 'opaque' ? 'BUSY' : 'FREE'}`);
        });

    } catch (e: any) {
        console.error(`   ERROR listing events: ${e.message}`);
    }

    console.log("\n--- Test Finished ---");
}

main().catch(console.error);
