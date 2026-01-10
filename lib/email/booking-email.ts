
import { Resend } from 'resend';

// Initialize globally or per call. 
// Note: process.env might not be available at top level in strict edge runtimes, but fine in Node.
const resendApiKey = process.env.RESEND_API_KEY;
const resend = resendApiKey ? new Resend(resendApiKey) : null;

interface BookingEmailProps {
    customerName: string;
    customerEmail: string;
    serviceName: string;
    startTime: string | Date; // Date or ISO string
    notes?: string;
    price?: number;
    paymentMethod: 'Credit Card' | 'Bank Transfer' | 'Free';
}

export async function sendBookingConfirmation({
    customerName,
    customerEmail,
    serviceName,
    startTime,
    notes,
    price,
    paymentMethod
}: BookingEmailProps) {

    if (!resend) {
        console.warn('RESEND_API_KEY is missing. Skipping email send.');
        return { success: false, error: 'Missing API Key' };
    }

    const dateStr = new Date(startTime).toLocaleString('ja-JP', {
        timeZone: 'Asia/Tokyo',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        weekday: 'short'
    });

    const adminEmail = process.env.ADMIN_EMAIL || 'takudai.koo@gmail.com';

    try {
        // 1. To Customer
        await resend.emails.send({
            from: 'NEX Booking <onboarding@resend.dev>', // Verify domain later
            to: [customerEmail],
            subject: `【NEX】予約完了のお知らせ (${serviceName})`,
            html: `
                <div style="font-family: sans-serif; color: #333; max-width: 600px; margin: 0 auto;">
                    <h2>ご予約ありがとうございます</h2>
                    <p>${customerName} 様</p>
                    <p>
                        株式会社NXS（NEX事業部）でございます。<br>
                        以下の内容でご予約を承りました。
                    </p>

                    <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0; border: 1px solid #e9ecef;">
                        <h3 style="margin-top: 0; color: #495057;">予約内容</h3>
                        <table style="width: 100%; border-collapse: collapse;">
                            <tr>
                                <td style="padding: 8px 0; border-bottom: 1px solid #eee; width: 30%; color: #888;">サービス</td>
                                <td style="padding: 8px 0; border-bottom: 1px solid #eee;"><strong>${serviceName}</strong></td>
                            </tr>
                            <tr>
                                <td style="padding: 8px 0; border-bottom: 1px solid #eee; color: #888;">日時</td>
                                <td style="padding: 8px 0; border-bottom: 1px solid #eee;"><strong>${dateStr} (日本時間)</strong></td>
                            </tr>
                            <tr>
                                <td style="padding: 8px 0; border-bottom: 1px solid #eee; color: #888;">価格</td>
                                <td style="padding: 8px 0; border-bottom: 1px solid #eee;">${price ? `¥${price.toLocaleString()}` : '無料 (¥0)'}</td>
                            </tr>
                            <tr>
                                <td style="padding: 8px 0; border-bottom: 1px solid #eee; color: #888;">支払方法</td>
                                <td style="padding: 8px 0; border-bottom: 1px solid #eee;">${paymentMethod}</td>
                            </tr>
                        </table>
                    </div>

                    <p>
                        <strong>当日のご利用について:</strong><br>
                        ご予約の時間になりましたら、別途お送りする案内（オンラインの場合）または指定の場所へお越しください。<br>
                        ご不明な点がございましたら、このメールへの返信にてお問い合わせください。
                    </p>

                    <p style="font-size: 14px; color: #666; margin-top: 30px;">
                        ※Googleカレンダーへの招待状も別途送信される場合があります。
                    </p>

                    <hr style="margin: 30px 0; border: 0; border-top: 1px solid #eee;">
                    
                    <div style="font-size: 12px; color: #888; text-align: center;">
                        <p><strong>株式会社NXS / NEX Impact Analysis</strong></p>
                        <p>東京都荒川区荒川</p>
                        <p><a href="https://bbox-nex.vercel.app" style="color: #888;">公式サイトへ</a></p>
                    </div>
                </div>
            `
        });

        // 2. To Admin
        await resend.emails.send({
            from: 'NEX System <onboarding@resend.dev>',
            to: [adminEmail],
            subject: `【新規予約】${customerName}様 - ${serviceName}`,
            html: `
                <h2>新規予約が入りました</h2>
                <ul>
                    <li><strong>顧客名:</strong> ${customerName}</li>
                    <li><strong>Email:</strong> ${customerEmail}</li>
                    <li><strong>サービス:</strong> ${serviceName}</li>
                    <li><strong>日時:</strong> ${dateStr}</li>
                    <li><strong>価格:</strong> ${price ? `¥${price}` : '¥0'}</li>
                    <li><strong>支払:</strong> ${paymentMethod}</li>
                    <li><strong>メモ:</strong> ${notes || 'なし'}</li>
                </ul>
            `
        });

        console.log(`[Email] Sent confirmation to ${customerEmail} and notification to ${adminEmail}`);
        return { success: true };

    } catch (error: any) {
        console.error('[Email] Failed to send booking emails:', error);
        // We don't want to crash the whole flow if email fails, so we return false but log it.
        return { success: false, error: error.message };
    }
}
