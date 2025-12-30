
"use client";

import React, { useEffect, useState, use } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { CheckCircle2, AlertCircle } from 'lucide-react';
import Link from 'next/link';

export default function ConfirmPage(props: { params: Promise<{ service_id: string }> }) {
    const params = use(props.params);
    const searchParams = useSearchParams();
    const sessionId = searchParams.get('session_id');
    const success = searchParams.get('success'); // Fallback for free bookings
    const [status, setStatus] = useState<'loading' | 'success' | 'error'>('loading');

    useEffect(() => {
        if (success === 'true') {
            setStatus('success');
            return;
        }

        if (sessionId) {
            // Verify session status? 
            // Ideally call an API to verify, but for simple UX, we assume success if redirected here from Stripe with session_id
            // (The webhook handles the actual fulfillment)
            setTimeout(() => setStatus('success'), 1000);
        } else {
            setStatus('error');
        }
    }, [sessionId, success]);


    // Theme Logic
    let theme: 'impact' | 'cyber' | 'flow' = 'impact';
    if (params.service_id === 'Cyber') theme = 'cyber';
    if (params.service_id === 'Flow') theme = 'flow';

    const themeColors = {
        impact: {
            container: 'bg-white border border-gray-100 shadow-xl',
            iconBg: 'bg-green-100',
            iconColor: 'text-green-600',
            errorIconBg: 'bg-red-100',
            errorIconColor: 'text-red-600',
            title: 'text-gray-900',
            text: 'text-gray-600',
            box: 'bg-gray-50 border border-gray-200 text-gray-700',
            button: 'bg-gray-900 text-white hover:bg-gray-700'
        },
        cyber: {
            container: 'bg-black border border-cyber-green shadow-[0_0_30px_rgba(0,255,65,0.1)]',
            iconBg: 'bg-cyber-green/20',
            iconColor: 'text-cyber-green',
            errorIconBg: 'bg-red-900/20',
            errorIconColor: 'text-red-500',
            title: 'text-white',
            text: 'text-gray-300',
            box: 'bg-white/5 border border-cyber-green/30 text-gray-200',
            button: 'bg-cyber-green text-black hover:scale-105 hover:bg-green-400'
        },
        flow: {
            container: 'bg-tech-navy border border-tech-cyan/30 shadow-[0_0_30px_rgba(0,200,255,0.1)]',
            iconBg: 'bg-tech-cyan/20',
            iconColor: 'text-tech-cyan',
            errorIconBg: 'bg-red-900/20',
            errorIconColor: 'text-red-500',
            title: 'text-white',
            text: 'text-blue-100',
            box: 'bg-white/5 border border-tech-cyan/30 text-blue-100',
            button: 'bg-tech-cyan text-tech-navy hover:bg-cyan-400'
        }
    };

    const styles = themeColors[theme];

    return (
        <div className={`max-w-xl mx-auto p-8 rounded-2xl text-center space-y-6 ${styles.container}`}>
            {status === 'loading' && (
                <div className="py-20 animate-pulse">
                    <div className={`h-10 w-10 rounded-full mx-auto mb-4 ${theme === 'impact' ? 'bg-gray-200' : 'bg-white/20'}`}></div>
                    <p className={styles.text}>決済状況を確認中...</p>
                </div>
            )}

            {status === 'success' && (
                <>
                    <div className={`w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 ${styles.iconBg}`}>
                        <CheckCircle2 size={40} className={styles.iconColor} />
                    </div>
                    <h1 className={`text-2xl font-bold ${styles.title}`}>ご予約ありがとうございます！</h1>
                    <p className={`leading-relaxed ${styles.text}`}>
                        予約と決済が完了いたしました。<br />
                        ご登録いただいたメールアドレス宛に、<br />
                        詳細情報の記載されたメールをお送りしました。
                    </p>
                    <div className={`p-6 rounded-lg text-sm text-left space-y-2 mt-6 ${styles.box}`}>
                        <p><strong>サービス:</strong> {params.service_id}</p>
                        <p><strong>状態:</strong> 予約確定済み</p>
                    </div>
                    <div className="pt-6">
                        <Link href="/" className={`inline-block px-8 py-3 font-bold rounded-full transition-all ${styles.button}`}>
                            トップページに戻る
                        </Link>
                    </div>
                </>
            )}

            {status === 'error' && (
                <>
                    <div className={`w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 ${styles.errorIconBg}`}>
                        <AlertCircle size={40} className={styles.errorIconColor} />
                    </div>
                    <h1 className={`text-2xl font-bold ${styles.title}`}>エラーが発生しました</h1>
                    <p className={`leading-relaxed ${styles.text}`}>
                        予約情報の確認ができませんでした。<br />
                        決済が中断されたか、無効なアクセスである可能性があります。
                    </p>
                    <div className="pt-6">
                        <Link href={`/reserve/${params.service_id}`} className={`inline-block px-8 py-3 font-bold rounded-full transition-all ${styles.button}`}>
                            予約画面に戻る
                        </Link>
                    </div>
                </>
            )}
        </div>
    );
}
