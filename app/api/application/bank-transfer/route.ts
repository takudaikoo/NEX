import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const resendApiKey = process.env.RESEND_API_KEY;
const resend = new Resend(resendApiKey || 're_123'); // Safe fallback for build

export async function POST(req: NextRequest) {
    try {
        const body = await req.json();
        const { name, email, company, industry, role, consultation, annualIncome, skills } = body;

        // Email to User
        await resend.emails.send({
            from: 'Online Motion Audit <onboarding@resend.dev>', // Ideally change to your verified domain
            to: [email],
            subject: '【銀行振込のお願い】オンライン動作解析のお申し込みありがとうございます',
            html: `
                <h1>お申し込みありがとうございます</h1>
                <p>${name} 様</p>
                <p>オンライン動作解析「Online Motion Audit」にお申し込みいただき、誠にありがとうございます。<br>
                以下の銀行口座へ代金のお振込みをお願いいたします。</p>
                
                <div style="background-color: #f4f4f4; padding: 20px; border-radius: 8px; margin: 20px 0;">
                    <h3 style="margin-top: 0;">お振込先情報</h3>
                    <p>
                        <strong>銀行名:</strong> 三井住友銀行<br>
                        <strong>支店名:</strong> 福井支店<br>
                        <strong>口座種別:</strong> 普通<br>
                        <strong>口座番号:</strong> 0691873<br>
                        <strong>口座名義:</strong> カ）エックスエーディーエス
                    </p>
                    <p><strong>金額: 8,000円 (税込)</strong></p>
                </div>
                
                <p>
                    <strong>事業者情報:</strong><br>
                    株式会社XADS<br>
                    代表者 小尾 拓大<br>
                    所在地 東京都荒川区荒川
                </p>
                
                <h3>お申し込み内容</h3>
                <ul>
                    <li>会社名: ${company}</li>
                    <li>業種: ${industry}</li>
                    <li>担当業務: ${role}</li>
                </ul>
                
                <p>ご入金確認後、担当者より日程調整のご連絡を差し上げます。</p>
                <hr>
                <p>※本メールは自動送信されています。</p>
            `,
        });

        // Email to Admin (Optional, good for notification)
        // await resend.emails.send({ ... });

        return NextResponse.json({ success: true });
    } catch (err: any) {
        console.error('Resend Error:', err);
        return NextResponse.json({ error: err.message }, { status: 500 });
    }
}
