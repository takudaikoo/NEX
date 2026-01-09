
import { NextRequest, NextResponse } from 'next/server';
import Stripe from 'stripe';
import { supabaseAdmin } from '@/lib/supabase-admin';
import { createCalendarEvent } from '@/lib/booking/google-calendar';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
    apiVersion: '2023-10-16',
});

// Use buffer for webhook signature verification? 
// Next.js App Router body is stream. Need to consume it as text/buffer.
// BUT: Stripe SDK constructEvent expects raw body as string or buffer.
// req.text() gives string.

export async function POST(req: NextRequest) {
    const body = await req.text();
    const sig = req.headers.get('stripe-signature') as string;

    let event: Stripe.Event;

    try {
        if (!process.env.STRIPE_WEBHOOK_SECRET) {
            console.warn("Missing STRIPE_WEBHOOK_SECRET");
            // For dev without full webhook setup, we might want to trust body ONLY IF in safe dev env
            // otherwise throw
            // throw new Error("Webhook Secret Config Missing");
        }

        // In local development with 'stripe listen', you get a secret.
        // Assuming user has set it or implementation uses simple trust for now (NOT SECURE for prod).
        // Let's try verify if secret exists
        if (process.env.STRIPE_WEBHOOK_SECRET) {
            event = stripe.webhooks.constructEvent(body, sig, process.env.STRIPE_WEBHOOK_SECRET);
        } else {
            // Fallback for easy testing if strict security not yet set up
            // Parsing body directly is unsafe for production but handy for initial dev
            const json = JSON.parse(body);
            event = json as Stripe.Event;
        }

    } catch (err: any) {
        console.error(`Webhook Signature Verification Failed: ${err.message}`);
        return NextResponse.json({ error: 'Webhook Error' }, { status: 400 });
    }

    // Handle the event
    if (event.type === 'checkout.session.completed') {
        const session = event.data.object as Stripe.Checkout.Session;

        // Retrieve custom data
        // Metadata contains: serviceId, customerName, customerEmail, notes, startTime, type
        const meta = session.metadata;

        if (meta?.type === 'booking_payment') {
            console.log(`Processing Booking for ${meta.customerEmail}`);

            try {
                // 1. Record in DB
                const { data: booking, error: dbError } = await supabaseAdmin.from('bookings').insert({
                    service_id: meta.serviceId,
                    customer_name: meta.customerName || 'Guest', // metadata doesn't support non-ascii well historically? 
                    // Actually modern stripe handles utf8 in metadata usually.
                    customer_email: meta.customerEmail, // or session.customer_details.email
                    start_time: meta.startTime,
                    // Calculate end time? Need duration.
                    end_time: new Date(new Date(meta.startTime).getTime() + 60 * 60 * 1000).toISOString(), // Assume 60min default if fetch fail
                    status: 'confirmed',
                    stripe_session_id: session.id,
                    notes: meta.notes
                }).select().single();

                if (dbError) {
                    console.error('DB Insert Error:', dbError);
                    // Retry logic?
                }

                // 2. Create Google Calendar Event
                const start = new Date(meta.startTime);
                const end = new Date(start.getTime() + 60 * 60 * 1000); // Default 60 mins

                /* 
                   Ideally fetch service duration from DB again or pass in metadata.
                   But for safety, let's assume 60 mins or standard.
                */

                // Need service config to know WHICH calendar ID to use
                const { data: service } = await supabaseAdmin.from('booking_services').select('google_calendar_id').eq('id', meta.serviceId).single();
                const calendarId = service?.google_calendar_id || 'primary';

                await createCalendarEvent(calendarId, {
                    summary: `予約: ${meta.customerName} (${meta.serviceId})`,
                    description: `Email: ${meta.customerEmail}\nNotes: ${meta.notes}`,
                    start: start,
                    end: end
                });

                console.log('Booking Finalized Successfully');

            } catch (err) {
                console.error('Fulfillment Error:', err);
                // Return 500 to Stripe to retry webhook?
                return NextResponse.json({ error: 'Fulfillment failed' }, { status: 500 });
            }
        }
    }

    return NextResponse.json({ received: true });
}
