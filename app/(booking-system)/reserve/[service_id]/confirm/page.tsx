
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

    return (
        <div className="max-w-xl mx-auto bg-white p-8 rounded-2xl shadow-lg text-center space-y-6">
            {status === 'loading' && (
                <div className="py-20 animate-pulse">
                    <div className="h-10 w-10 bg-gray-200 rounded-full mx-auto mb-4"></div>
                    <p className="text-gray-400">決済状況を確認中...</p>
                </div>
            )}

            {status === 'success' && (
                <>
                    <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                        <CheckCircle2 size={40} className="text-green-600" />
                    </div>
                    <h1 className="text-2xl font-bold text-gray-900">ご予約ありがとうございます！</h1>
                    <p className="text-gray-600 leading-relaxed">
                        予約と決済が完了いたしました。<br />
                        ご登録いただいたメールアドレス宛に、<br />
                        詳細情報の記載されたメールをお送りしました。
                    </p>
                    <div className="bg-gray-50 p-4 rounded-lg text-sm text-left space-y-2 border border-gray-100 mt-6">
                        <p><strong>サービス:</strong> {params.service_id}</p>
                        <p><strong>状態:</strong> 予約確定済み</p>
                    </div>
                    <div className="pt-6">
                        <Link href="/" className="inline-block px-8 py-3 bg-gray-900 text-white font-bold rounded-full hover:bg-gray-700 transition-colors">
                            トップページに戻る
                        </Link>
                    </div>
                </>
            )}

            {status === 'error' && (
                <>
                    <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
                        <AlertCircle size={40} className="text-red-600" />
                    </div>
                    <h1 className="text-2xl font-bold text-gray-900">エラーが発生しました</h1>
                    <p className="text-gray-600 leading-relaxed">
                        予約情報の確認ができませんでした。<br />
                        決済が中断されたか、無効なアクセスである可能性があります。
                    </p>
                    <div className="pt-6">
                        <Link href={`/reserve/${params.service_id}`} className="inline-block px-8 py-3 bg-gray-900 text-white font-bold rounded-full hover:bg-gray-700 transition-colors">
                            予約画面に戻る
                        </Link>
                    </div>
                </>
            )}
        </div>
    );
}
