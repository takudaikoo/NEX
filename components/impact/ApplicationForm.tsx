"use client";

import React, { useState } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { CheckCircle, AlertCircle, Loader2 } from 'lucide-react';

const stripePublishableKey = process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY;
const stripePromise = stripePublishableKey ? loadStripe(stripePublishableKey) : null;

type FormData = {
    name: string;
    email: string;
    sport: string;
    requesterType: string;
    requestType: string;
    consultation?: string;
    goals?: string;
    paymentMethod: 'stripe' | 'transfer';
};

import { useSearchParams } from 'next/navigation';

// ... (existing imports)

const ApplicationForm: React.FC = () => {
    const searchParams = useSearchParams();
    const startTimeParam = searchParams.get('start_time');
    const serviceIdParam = searchParams.get('service_id');
    const serviceNameParam = searchParams.get('service_name');

    const [formData, setFormData] = useState<FormData>({
        // ... (existing defaults)
        name: '',
        email: '',
        sport: '',
        requesterType: 'player',
        requestType: 'personal',
        consultation: '',
        goals: '',
        paymentMethod: 'stripe',
    });
    // ... (existing state)
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [success, setSuccess] = useState(false);

    // ... (handleChange, handleRadioChange)
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleRadioChange = (value: 'stripe' | 'transfer') => {
        setFormData(prev => ({ ...prev, paymentMethod: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        setError(null);

        try {
            // BOOKING FLOW (if start_time is present)
            if (startTimeParam && serviceIdParam) {
                // Use Booking API
                const response = await fetch('/api/booking/create-checkout', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        serviceId: serviceIdParam,
                        serviceName: serviceNameParam || '予約サービス',
                        price: searchParams.get('price') ? parseInt(searchParams.get('price')!) : 5000,
                        customerName: formData.name,
                        customerEmail: formData.email,
                        notes: `${formData.consultation}\n${formData.goals}\nSport: ${formData.sport}`,
                        startTime: startTimeParam
                    }),
                });

                if (!response.ok) throw new Error('Booking failed');
                const data = await response.json();

                if (data.url) {
                    window.location.href = data.url;
                } else {
                    setSuccess(true);
                }
                return;
            }

            // ORIGINAL FLOW
            if (formData.paymentMethod === 'stripe') {
                const response = await fetch('/api/create-checkout-session', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(formData),
                });

                if (!response.ok) throw new Error('Network response was not ok');

                const { sessionId } = await response.json();
                if (!stripePromise) {
                    throw new Error('Stripe is not configured');
                }
                const stripe = await stripePromise;

                if (!stripe) throw new Error('Stripe failed to load');

                const { error } = await (stripe as any).redirectToCheckout({ sessionId });
                if (error) throw error;
            } else {
                // Bank Transfer
                const response = await fetch('/api/application/bank-transfer', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(formData),
                });

                if (!response.ok) throw new Error('送信に失敗しました');

                setSuccess(true);
            }
        } catch (err: any) {
            setError(err.message || 'エラーが発生しました。もう一度お試しください。');
        } finally {
            setIsLoading(false);
        }
    };

    if (success) {
        return (
            <div className="max-w-2xl mx-auto p-12 bg-gray-50 border border-gray-200 rounded-3xl text-center shadow-lg">
                <div className="flex justify-center mb-6">
                    <CheckCircle className="w-16 h-16 text-impact-red" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">お申し込み完了</h2>
                <p className="text-gray-600 mb-8">
                    お申し込みありがとうございます。<br />
                    ご入力のご確認メールをお送りしましたので、ご確認ください。<br />
                    振込先情報はメールに記載されております。
                </p>
                <div className="p-4 bg-white rounded-xl border border-gray-200 text-left mb-8">
                    <h3 className="text-impact-red font-bold mb-2">今後の流れ</h3>
                    <ol className="list-decimal list-inside text-sm text-gray-600 space-y-2">
                        <li>ご登録のメールアドレスを含む自動返信メールをご確認ください。</li>
                        <li>メールに記載の振込先へ料金をお振込みください。</li>
                        <li>事務局にて入金確認後、正式に解析日程のご案内をお送りします。</li>
                    </ol>
                </div>
                <a href="/impact" className="inline-block px-8 py-3 bg-transparent border border-impact-red text-impact-red font-bold hover:bg-impact-red hover:text-white transition-colors rounded-full">
                    トップページへ戻る
                </a>
            </div>
        );
    }

    return (
        <form onSubmit={handleSubmit} className="max-w-3xl mx-auto space-y-8 p-8 bg-white/80 border border-gray-200 rounded-3xl backdrop-blur-md shadow-xl">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 border-b border-gray-200 pb-4">お申込みフォーム</h2>

            {/* Error Message */}
            {error && (
                <div className="bg-red-500/10 border border-red-500/50 text-red-500 p-4 rounded-xl flex items-center gap-2">
                    <AlertCircle size={20} />
                    <span>{error}</span>
                </div>
            )}

            {/* Section 1: Basic Info */}
            <div className="space-y-6">
                <h3 className="text-lg font-bold text-impact-red">お客様情報 (必須)</h3>

                <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                        <label className="text-sm font-bold text-gray-700">お名前</label>
                        <input
                            type="text"
                            name="name"
                            required
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full bg-gray-50 border border-gray-300 rounded-lg p-3 text-gray-900 focus:border-impact-red focus:outline-none transition-colors"
                            placeholder="山田 太郎"
                        />
                    </div>
                    <div className="space-y-2">
                        <label className="text-sm font-bold text-gray-700">メールアドレス</label>
                        <input
                            type="email"
                            name="email"
                            required
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full bg-gray-50 border border-gray-300 rounded-lg p-3 text-gray-900 focus:border-impact-red focus:outline-none transition-colors"
                            placeholder="example@email.com"
                        />
                    </div>
                </div>

                <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-700">競技名</label>
                    <input
                        type="text"
                        name="sport"
                        required
                        value={formData.sport}
                        onChange={handleChange}
                        className="w-full bg-gray-50 border border-gray-300 rounded-lg p-3 text-gray-900 focus:border-impact-red focus:outline-none transition-colors"
                        placeholder="例: 野球、陸上競技（短距離）、ゴルフ"
                    />
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                        <label className="text-sm font-bold text-gray-700">依頼主</label>
                        <select
                            name="requesterType"
                            required
                            value={formData.requesterType}
                            onChange={handleChange}
                            className="w-full bg-gray-50 border border-gray-300 rounded-lg p-3 text-gray-900 focus:border-impact-red focus:outline-none transition-colors"
                        >
                            <option value="player">プレーヤー</option>
                            <option value="coach">コーチ</option>
                        </select>
                    </div>
                    <div className="space-y-2">
                        <label className="text-sm font-bold text-gray-700">依頼種別</label>
                        <select
                            name="requestType"
                            required
                            value={formData.requestType}
                            onChange={handleChange}
                            className="w-full bg-gray-50 border border-gray-300 rounded-lg p-3 text-gray-900 focus:border-impact-red focus:outline-none transition-colors"
                        >
                            <option value="personal">個人依頼</option>
                            <option value="team">チーム依頼</option>
                        </select>
                    </div>
                </div>
            </div>

            {/* Section 2: Hearing Info */}
            <div className="space-y-6 pt-6 border-t border-gray-200">
                <h3 className="text-lg font-bold text-impact-red">ヒアリング項目 (任意)</h3>

                <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-700">相談内容</label>
                    <textarea
                        name="consultation"
                        value={formData.consultation}
                        onChange={handleChange}
                        className="w-full h-24 bg-gray-50 border border-gray-300 rounded-lg p-3 text-gray-900 focus:border-impact-red focus:outline-none transition-colors resize-none"
                        placeholder="具体的なお悩みがあればご記入ください"
                    />
                </div>

                <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-700">故障歴・目標など自由記載</label>
                    <textarea
                        name="goals"
                        value={formData.goals}
                        onChange={handleChange}
                        className="w-full h-24 bg-gray-50 border border-gray-300 rounded-lg p-3 text-gray-900 focus:border-impact-red focus:outline-none transition-colors resize-none"
                        placeholder="例: 過去にハムストリングの肉離れあり。来シーズンの大会で〇〇秒を切りたい。"
                    />
                </div>
            </div>

            {/* Section 3: Payment Method */}
            <div className="space-y-6 pt-6 border-t border-gray-200">
                <h3 className="text-lg font-bold text-impact-red">お支払い方法</h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <label className={`relative flex items-center p-4 border rounded-xl cursor-pointer transition-all ${formData.paymentMethod === 'stripe' ? 'border-impact-red bg-impact-red/5' : 'border-gray-200 bg-gray-50 hover:bg-gray-100'}`}>
                        <input
                            type="radio"
                            name="paymentMethod"
                            value="stripe"
                            checked={formData.paymentMethod === 'stripe'}
                            onChange={() => handleRadioChange('stripe')}
                            className="hidden"
                        />
                        <div className="flex-1">
                            <div className="font-bold text-gray-900">クレジットカード決済</div>
                            <div className="text-xs text-gray-500">Stripeによる安全な決済です</div>
                        </div>
                        <div className={`w-5 h-5 rounded-full border flex items-center justify-center ${formData.paymentMethod === 'stripe' ? 'border-impact-red' : 'border-gray-400'}`}>
                            {formData.paymentMethod === 'stripe' && <div className="w-3 h-3 rounded-full bg-impact-red" />}
                        </div>
                    </label>

                    <label className={`relative flex items-center p-4 border rounded-xl cursor-pointer transition-all ${formData.paymentMethod === 'transfer' ? 'border-impact-red bg-impact-red/5' : 'border-gray-200 bg-gray-50 hover:bg-gray-100'}`}>
                        <input
                            type="radio"
                            name="paymentMethod"
                            value="transfer"
                            checked={formData.paymentMethod === 'transfer'}
                            onChange={() => handleRadioChange('transfer')}
                            className="hidden"
                        />
                        <div className="flex-1">
                            <div className="font-bold text-gray-900">銀行振込</div>
                            <div className="text-xs text-gray-500">後ほどメールで口座をご案内します</div>
                        </div>
                        <div className={`w-5 h-5 rounded-full border flex items-center justify-center ${formData.paymentMethod === 'transfer' ? 'border-impact-red' : 'border-gray-400'}`}>
                            {formData.paymentMethod === 'transfer' && <div className="w-3 h-3 rounded-full bg-impact-red" />}
                        </div>
                    </label>
                </div>
            </div>

            {/* Submit Button */}
            <div className="pt-6">
                <button
                    type="submit"
                    disabled={isLoading}
                    className="w-full bg-impact-red text-white font-bold py-4 rounded-xl hover:bg-red-600 transition-all flex items-center justify-center gap-2 group disabled:opacity-50 disabled:cursor-not-allowed shadow-[0_4px_14px_0_rgba(255,0,0,0.39)]"
                >
                    {isLoading ? (
                        <>
                            <Loader2 className="animate-spin" size={20} />
                            処理中...
                        </>
                    ) : (
                        <>
                            {formData.paymentMethod === 'stripe' ? 'カードで支払って申し込む' : '内容を確認して申し込む'}
                            <span className="group-hover:translate-x-1 transition-transform">→</span>
                        </>
                    )}
                </button>
                <p className="text-center text-xs text-gray-400 mt-4">
                    お客様の個人情報は厳重に管理されます。
                </p>
            </div>
        </form>
    );
};

export default ApplicationForm;
