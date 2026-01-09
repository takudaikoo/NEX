
import { NextRequest, NextResponse } from 'next/server';
import Stripe from 'stripe';
import { supabaseAdmin } from '@/lib/supabase-admin';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
    apiVersion: '2023-10-16', // Use latest stable
});

export async function POST(req: NextRequest) {
    try {
        const body = await req.json();
        const { serviceId, serviceName, price, customerName, customerEmail, notes, startTime } = body;

        // 1. Create a "Pending" booking in DB? 
        // Best practice: Create session first, then webhook fulfills it.
        // OR: Create record "pending_payment" and update on webhook.

        // Let's create a metadata object for Stripe to pass back to webhook
        const metadata = {
            serviceId,
            customerName, // CAREFUL: Non-ASCII chars might cause issues in some older Stripe APIs but usually fine now.
            customerEmail,
            notes: notes ? notes.substring(0, 100) : '',
            startTime,
            type: 'booking_payment' // Tag to distinguish from other payments
        };

        // 0. Free Booking Logic
        if (price === 0) {
            // Fetch service duration to calculate end time
            const { data: service } = await supabaseAdmin
                .from('booking_services')
                .select('duration_minutes')
                .eq('id', serviceId)
                .single();

            const duration = service?.duration_minutes || 60;
            const start = new Date(startTime);
            const end = new Date(start.getTime() + duration * 60000);

            const { error } = await supabaseAdmin
                .from('bookings')
                .insert({
                    service_id: serviceId,
                    customer_name: customerName,
                    customer_email: customerEmail,
                    start_time: startTime,
                    end_time: end.toISOString(),
                    status: 'confirmed', // Auto-confirm for free
                    notes: notes,
                });

            if (error) throw error;
            return NextResponse.json({ success: true, url: null });
        }

        // 2. Create Stripe Session
        const session = await stripe.checkout.sessions.create({
            payment_method_types: ['card'],
            line_items: [
                {
                    price_data: {
                        currency: 'jpy',
                        product_data: {
                            name: `予約: ${serviceName}`,
                            description: `${new Date(startTime).toLocaleString('ja-JP')} ~`,
                        },
                        unit_amount: price,
                    },
                    quantity: 1,
                },
            ],
            mode: 'payment',
            success_url: `${process.env.NEXT_PUBLIC_BASE_URL}/reserve/${serviceId}/confirm?session_id={CHECKOUT_SESSION_ID}`,
            cancel_url: `${process.env.NEXT_PUBLIC_BASE_URL}/reserve/${serviceId}`,
            customer_email: customerEmail,
            metadata: metadata, // Pass booking data through Stripe
        });

        return NextResponse.json({ url: session.url });
    } catch (err: any) {
        console.error('Booking Create API Error:', err);
        return NextResponse.json({ error: err.message }, { status: 500 });
    }
}
