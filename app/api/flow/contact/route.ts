import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const resendApiKey = process.env.RESEND_API_KEY;
// Initialize via safe check
const resend = resendApiKey ? new Resend(resendApiKey) : null;

export async function POST(req: NextRequest) {
    try {
        const body = await req.json();
        const { name, company, email, consultation } = body;

        // Skip sending if no API key (Development/Mock mode)
        if (!resend) {
            console.log('Mock Email Send:', { name, email, consultation });
            // Simulate delay
            await new Promise(resolve => setTimeout(resolve, 1000));
            return NextResponse.json({ success: true, mock: true });
        }

        // 1. Email to User (Thank you)
        await resend.emails.send({
            from: 'NEX Flow <onboarding@resend.dev>', // Change to verified domain later
            to: [email],
            subject: '【NEX Flow】無料相談のお申し込みありがとうございます',
            html: `
                <div style="font-family: sans-serif; color: #333;">
                    <h2>お申し込みありがとうございます</h2>
                    <p>${name} 様</p>
                    <p>
                        株式会社NXS / NEX事業部でございます。<br>
                        この度は、業務自動化に関する無料相談にお申し込みいただき、誠にありがとうございます。
                    </p>
                    
                    <p>
                        以下の内容で受け付けいたしました。<br>
                        内容を確認の上、担当者（小尾）より24時間以内に日程調整のご連絡を差し上げます。
                    </p>

                    <div style="background-color: #f4f4f4; padding: 20px; border-radius: 8px; margin: 20px 0;">
                        <h3 style="margin-top: 0;">お申し込み内容</h3>
                        <p><strong>会社名:</strong> ${company}</p>
                        <p><strong>ご相談内容:</strong><br>${consultation || '（なし）'}</p>
                    </div>

                    <p>
                        <strong>今後の流れ:</strong><br>
                        1. 担当者より日程候補をメールにてお送りします。<br>
                        2. ご都合の良い日程をお選びください。<br>
                        3. 当日はZoom/Google Meet等にて、現状の課題をヒアリングさせていただきます。
                    </p>
                    
                    <hr style="margin: 30px 0; border: 0; border-top: 1px solid #eee;">
                    
                    <p style="font-size: 12px; color: #888;">
                        <strong>株式会社NXS</strong><br>
                        NEX Innovation Team<br>
                        東京都荒川区荒川<br>
                        <a href="https://bbox-nex.vercel.app">https://bbox-nex.vercel.app</a>
                    </p>
                </div>
            `,
        });

        // 2. Email to Admin (Notification)
        // Ideally send to 'takudai.koo@gmail.com' or admin email env
        const adminEmail = process.env.ADMIN_EMAIL || 'takudai.koo@gmail.com';
        await resend.emails.send({
            from: 'NEX System <onboarding@resend.dev>',
            to: [adminEmail],
            subject: `【新規リード】Flow無料相談: ${company} (${name}様)`,
            html: `
                <h2>新規の無料相談申し込みがありました</h2>
                <ul>
                    <li><strong>名前:</strong> ${name}</li>
                    <li><strong>会社名:</strong> ${company}</li>
                    <li><strong>Email:</strong> ${email}</li>
                    <li><strong>相談内容:</strong> ${consultation}</li>
                </ul>
            `,
        });

        return NextResponse.json({ success: true });
    } catch (err: any) {
        console.error('Flow Contact Error:', err);
        return NextResponse.json({ error: err.message }, { status: 500 });
    }
}
