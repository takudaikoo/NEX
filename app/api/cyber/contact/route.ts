import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const resendApiKey = process.env.RESEND_API_KEY;
const resend = resendApiKey ? new Resend(resendApiKey) : null;

export async function POST(req: NextRequest) {
    try {
        const body = await req.json();
        const { name, email, company, paymentMethod, consultation, skills } = body;

        // Skip sending if no API key
        if (!resend) {
            console.log('Mock Email Send (Cyber):', body);
            await new Promise(resolve => setTimeout(resolve, 1000));
            return NextResponse.json({ success: true, mock: true });
        }

        const isTransfer = paymentMethod === 'transfer';
        const paymentInfo = isTransfer ? `
            <div style="background-color: #f0fff4; padding: 20px; border-radius: 8px; margin: 20px 0; border: 1px solid #4ade80;">
                <h3 style="margin-top: 0; color: #15803d;">お振込先情報</h3>
                <p>
                    <strong>銀行名:</strong> 三井住友銀行<br>
                    <strong>支店名:</strong> 福井支店<br>
                    <strong>口座種別:</strong> 普通<br>
                    <strong>口座番号:</strong> 0691873<br>
                    <strong>口座名義:</strong> カ）エヌエックスエス
                </p>
                <p><strong>金額: 5,000円 (税込)</strong></p>
                <p style="font-size: 12px;">※恐れ入りますが振込手数料はご負担をお願いいたします。</p>
            </div>
        ` : `
            <div style="background-color: #f4f4f4; padding: 20px; border-radius: 8px; margin: 20px 0;">
                <h3 style="margin-top: 0;">決済状況</h3>
                <p>クレジットカード決済（Stripe）にて完了済み</p>
            </div>
        `;

        // 1. Email to User
        await resend.emails.send({
            from: 'Cyber Analysis <onboarding@resend.dev>',
            to: [email],
            subject: '【Cyber Analysis】30分ハンズオンへのお申し込みありがとうございます',
            html: `
                <div style="font-family: sans-serif; color: #333;">
                    <h2>お申し込みありがとうございます</h2>
                    <p>${name} 様</p>
                    <p>
                        この度は、Cyber Analysis「30分ハンズオンサポート」にお申し込みいただき、<br>
                        誠にありがとうございます。
                    </p>

                    ${paymentInfo}
                    
                    <p>
                        <strong>今後の流れ:</strong><br>
                        ${isTransfer ? '1. 上記口座へのご入金をお願いいたします。<br>2. 入金確認後、' : ''}
                        担当者（小尾）より日程調整のご連絡をメールにて差し上げます。<br>
                    </p>

                    <div style="margin-top: 30px;">
                        <h3>ご登録内容</h3>
                        <ul>
                            <li>会社名: ${company}</li>
                            <li>相談内容: ${consultation || 'なし'}</li>
                            <li>保有スキル: ${skills || 'なし'}</li>
                        </ul>
                    </div>
                    
                    <hr style="margin: 30px 0; border: 0; border-top: 1px solid #eee;">
                    
                    <p style="font-size: 12px; color: #888;">
                        <strong>株式会社NXS</strong><br>
                        Cyber Analysis Team
                    </p>
                </div>
            `,
        });

        // 2. Email to Admin
        const adminEmail = process.env.ADMIN_EMAIL || 'takudai.koo@gmail.com';
        await resend.emails.send({
            from: 'NEX System <onboarding@resend.dev>',
            to: [adminEmail],
            subject: `【新規申込】Cyberハンズオン: ${company} (${name}様)`,
            html: `
                <h2>Cyberハンズオンの申し込みがありました</h2>
                <ul>
                    <li><strong>名前:</strong> ${name}</li>
                    <li><strong>Email:</strong> ${email}</li>
                    <li><strong>決済方法:</strong> ${isTransfer ? '銀行振込 (未払い)' : 'クレジットカード (決済済み)'}</li>
                </ul>
            `,
        });

        return NextResponse.json({ success: true });
    } catch (err: any) {
        console.error('Cyber Contact Error:', err);
        return NextResponse.json({ error: err.message }, { status: 500 });
    }
}
