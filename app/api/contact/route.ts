import { NextResponse } from 'next/server';
import { Resend } from 'resend';

// Initialize Resend with the API key
const resend = new Resend(process.env.RESEND_API_KEY || 're_123456789');

// Admin email address
const ADMIN_EMAIL = process.env.ADMIN_EMAIL || 'takudai.koo@gmail.com';

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const { name, company, email, phone, message } = body;

        // Validation
        if (!name || !company || !email || !phone || !message) {
            return NextResponse.json(
                { error: '必須項目が未入力です (All fields are required)' },
                { status: 400 }
            );
        }

        console.log('Received corporate inquiry:', { name, company, email, phone, message: message.substring(0, 50) + '...' });

        // --- 1. Send Notification Email to Admin ---
        try {
            if (process.env.RESEND_API_KEY) {
                await resend.emails.send({
                    from: 'NXS Corporate <onboarding@resend.dev>',
                    to: ADMIN_EMAIL,
                    subject: `【NXS】コーポレートサイトお問い合わせ (${name}様)`,
                    html: `
                        <h2>新規お問い合わせがありました</h2>
                        <p><strong>名前:</strong> ${name}</p>
                        <p><strong>会社名:</strong> ${company}</p>
                        <p><strong>メール:</strong> ${email}</p>
                        <p><strong>電話番号:</strong> ${phone}</p>
                        <hr />
                        <p><strong>お問い合わせ内容:</strong></p>
                        <pre style="white-space: pre-wrap; font-family: sans-serif;">${message}</pre>
                    `,
                });
            } else {
                console.log('Skipping Admin Email (RESEND_API_KEY missing)');
            }
        } catch (emailError) {
            console.error('Failed to send admin email:', emailError);
            // Continue to user email even if admin email fails
        }

        // --- 2. Send Confirmation Email to User ---
        try {
            if (process.env.RESEND_API_KEY) {
                await resend.emails.send({
                    from: 'NXS Corporate <onboarding@resend.dev>',
                    to: email,
                    subject: '【株式会社NXS】お問い合わせありがとうございます',
                    html: `
                        <p>${name} 様</p>
                        <p>株式会社NXSへのお問い合わせ、誠にありがとうございます。</p>
                        <p>以下の内容で受け付けいたしました。<br>
                        担当者より、3営業日以内にご回答させていただきます。</p>
                        <hr />
                        <p><strong>お問い合わせ内容:</strong></p>
                        <pre style="white-space: pre-wrap; font-family: sans-serif;">${message}</pre>
                        <hr />
                        <p>発行：株式会社NXS</p>
                        <p>※本メールは自動送信です。</p>
                    `,
                });
            } else {
                console.log('Skipping User Confirmation Email (RESEND_API_KEY missing)');
            }
        } catch (emailError) {
            console.error('Failed to send user email:', emailError);
        }

        return NextResponse.json({ success: true });
    } catch (error) {
        console.error('API Error:', error);
        return NextResponse.json(
            { error: 'Internal Server Error' },
            { status: 500 }
        );
    }
}
