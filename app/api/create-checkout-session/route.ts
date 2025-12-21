import { NextRequest, NextResponse } from 'next/server';
import Stripe from 'stripe';

// Initialize Stripe safely
const stripeSecretKey = process.env.STRIPE_SECRET_KEY;
const stripe = stripeSecretKey ? new Stripe(stripeSecretKey) : null;

export async function POST(req: NextRequest) {
    try {
        const body = await req.json();
        const { name, email, sport, requesterType, requestType, consultation, goals } = body;

        if (!stripe) {
            console.error("Stripe Secret Key is missing.");
            return NextResponse.json({ error: 'System configuration error' }, { status: 500 });
        }

        if (!process.env.STRIPE_PRICE_ID) {
            throw new Error('STRIPE_PRICE_ID is not defined');
        }

        // Create Checkout Session
        const session = await stripe.checkout.sessions.create({
            payment_method_types: ['card'],
            line_items: [
                {
                    price: process.env.STRIPE_PRICE_ID,
                    quantity: 1,
                },
            ],
            mode: 'payment',
            success_url: `${process.env.NEXT_PUBLIC_BASE_URL}/impact/application/success`, // Updated to impact success URL
            cancel_url: `${process.env.NEXT_PUBLIC_BASE_URL}/impact/application`, // Updated to impact cancel URL
            customer_email: email,
            metadata: {
                name,
                sport,
                requesterType,
                requestType,
                consultation: consultation ? consultation.substring(0, 100) + '...' : '',
                full_details: JSON.stringify({
                    consultation, goals
                }).substring(0, 500)
            },
        });

        return NextResponse.json({ sessionId: session.id });
    } catch (err: any) {
        console.error('Stripe Error:', err);
        return NextResponse.json({ error: err.message }, { status: 500 });
    }
}
