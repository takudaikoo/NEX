
import { NextRequest, NextResponse } from 'next/server';
import { getAvailableSlots } from '@/lib/booking/availability';
import { supabase } from '@/lib/supabase'; // Using the supabase client we created
// import { supabase } from '@/lib/supabase'; // We might want server-side client with service role if reading sensitive data, 
// but availability is generally public info calculated from busy times.

export async function GET(req: NextRequest) {
    const searchParams = req.nextUrl.searchParams;
    const serviceId = searchParams.get('serviceId');
    const dateStr = searchParams.get('date');

    if (!serviceId || !dateStr) {
        return NextResponse.json({ error: 'Missing serviceId or date' }, { status: 400 });
    }

    try {
        const date = new Date(dateStr);

        // 1. Get Service Config (Duration, Google Calendar ID)
        const { data: service, error } = await supabase
            .from('booking_services')
            .select('duration_minutes, google_calendar_id')
            .eq('id', serviceId)
            .single();

        if (error || !service) {
            console.warn("[Availability] Service not found or error:", error);
            // ... (keep existing fallback)
            const mockSlots = [];
            const startHour = 10;
            const endHour = 18;
            for (let i = startHour; i < endHour; i++) {
                const d = new Date(date);
                d.setHours(i, 0, 0, 0);
                mockSlots.push(d.toISOString());
            }
            return NextResponse.json({ slots: mockSlots });
        }

        const calendarId = service.google_calendar_id || 'primary';
        console.log(`[Availability] Checking for Service: ${serviceId}, CalendarID: ${calendarId}, Date: ${dateStr}`);

        // 2. Calculate Slots
        try {
            const slots = await getAvailableSlots(calendarId, date, service.duration_minutes);
            console.log(`[Availability] Found ${slots.length} slots.`);
            return NextResponse.json({ slots: slots.map(s => s.toISOString()) });
        } catch (calcError) {
            console.error("[Availability] Slot Calculation Error:", calcError);
            throw calcError;
        }

    } catch (err: any) {
        console.error('Availability API Error:', err);
        return NextResponse.json({ error: err.message }, { status: 500 });
    }
}
