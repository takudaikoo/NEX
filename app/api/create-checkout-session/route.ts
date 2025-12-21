import { NextRequest, NextResponse } from 'next/server';
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

export async function POST(req: NextRequest) {
    try {
        const body = await req.json();
        const { name, email, company, industry, role, consultation, annualIncome, skills } = body;

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
            success_url: `${process.env.NEXT_PUBLIC_BASE_URL}/cyber/application/success`,
            cancel_url: `${process.env.NEXT_PUBLIC_BASE_URL}/cyber/application`,
            customer_email: email,
            metadata: {
                name,
                company,
                industry,
                role,
                consultation: consultation ? consultation.substring(0, 100) + '...' : '', // Truncate for metadata limits if needed
                // Note: Metadata values must be strings and max 500 chars total metadata size is limited. 
                // We might want to save full details to a DB in a real app, 
                // but for now we trust the email or minimal metadata.
                full_details: JSON.stringify({
                    consultation, annualIncome, skills
                }).substring(0, 500) // Ensure we don't hit limits
            },
        });

        return NextResponse.json({ sessionId: session.id });
    } catch (err: any) {
        console.error('Stripe Error:', err);
        return NextResponse.json({ error: err.message }, { status: 500 });
    }
}
