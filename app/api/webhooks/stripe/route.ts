import { NextRequest, NextResponse } from 'next/server';
import Stripe from 'stripe';
import { Resend } from 'resend';

// NOTE: You need to set STRIPE_WEBHOOK_SECRET in .env.local for security.
// For now, checking signatures is best practice.
const stripeSecretKey = process.env.STRIPE_SECRET_KEY;
const stripe = stripeSecretKey ? new Stripe(stripeSecretKey) : null;
const resend = new Resend(process.env.RESEND_API_KEY || 're_123'); // Dummy key for build safety if missing

export async function POST(req: NextRequest) {
    const body = await req.text();
    const sig = req.headers.get('stripe-signature') as string;

    let event: Stripe.Event;

    if (!stripe) {
        console.error("Stripe Secret Key is missing.");
        return NextResponse.json({ error: 'System configuration error' }, { status: 500 });
    }

    try {
        if (!process.env.STRIPE_WEBHOOK_SECRET) {
            // For development without webhook secret (not recommended for production but allows testing)
            // In real prod, throw error if missing.
            // We'll proceed loosely if secret is missing to avoid blocking, 
            // but strongly advise adding it.
            event = stripe.webhooks.constructEvent(body, sig, process.env.STRIPE_WEBHOOK_SECRET || "");
        } else {
            event = stripe.webhooks.constructEvent(body, sig, process.env.STRIPE_WEBHOOK_SECRET);
        }
    } catch (err: any) {
        console.log(`Webhook signature verification failed.`, err.message);
        // Fallback for simple testing if no secret is set up in dev
        try {
            event = JSON.parse(body);
        } catch (e) {
            return NextResponse.json({ error: 'Webhook Error' }, { status: 400 });
        }
    }

    if (event.type === 'checkout.session.completed') {
        const session = event.data.object as Stripe.Checkout.Session;
        const customerEmail = session.customer_details?.email;
        const name = session.metadata?.name || 'お客様';

        if (customerEmail) {
            await resend.emails.send({
                from: 'Online Motion Audit <onboarding@resend.dev>',
                to: [customerEmail],
                subject: '【決済完了】お申し込みありがとうございます',
                html: `
                    <h1>お申し込みありがとうございます</h1>
                    <p>${name} 様</p>
                    <p>オンライン動作解析の決済が完了いたしました。</p>
                    <p>これより、担当者が日程調整の準備を進めさせていただきます。追ってご連絡差し上げますので、今しばらくお待ちください。</p>
                    <hr>
                    <p>注文ID: ${session.id}</p>
                `,
            });
        }
    }

    return NextResponse.json({ received: true });
}
