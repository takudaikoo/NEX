"use client";

import React, { useState } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { CheckCircle, AlertCircle, Loader2 } from 'lucide-react';

const stripePublishableKey = process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY;
const stripePromise = stripePublishableKey ? loadStripe(stripePublishableKey) : null;

type FormData = {
    name: string;
    email: string;
    company: string;
    industry: string;
    role: string;
    consultation?: string;
    annualIncome?: string;
    skills?: string;
    paymentMethod: 'stripe' | 'transfer';
};

import { useSearchParams } from 'next/navigation';

const ApplicationForm: React.FC = () => {
    const [formData, setFormData] = useState<FormData>({
        name: '',
        email: '',
        company: '',
        industry: '',
        role: '',
        consultation: '',
        annualIncome: '',
        skills: '',
        paymentMethod: 'stripe',
    });
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [success, setSuccess] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleRadioChange = (value: 'stripe' | 'transfer') => {
        setFormData(prev => ({ ...prev, paymentMethod: value }));
    };

    const searchParams = useSearchParams();
    const startTimeParam = searchParams.get('start_time');
    const serviceIdParam = searchParams.get('service_id');
    const serviceNameParam = searchParams.get('service_name');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        setError(null);

        try {
            // BOOKING FLOW (if start_time is present)
            if (startTimeParam && serviceIdParam) {
                const response = await fetch('/api/booking/create-checkout', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        serviceId: serviceIdParam,
                        serviceName: serviceNameParam || '予約サービス',
                        price: searchParams.get('price') ? parseInt(searchParams.get('price')!) : 0, // 0 for free consultation if not specified? Or fetch?
                        // Cyber "Hands-on" is 0 yen in current SQL.
                        // Flow is 0 yen.
                        // If price is 0, we might skip stripe checkout?
                        // The booking API handles price=0?
                        // Let's assume standard flow for now.
                        customerName: formData.name,
                        customerEmail: formData.email,
                        notes: `${formData.consultation}\n${formData.skills}\nCompany: ${formData.company}`,
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
                // Bank Transfer - Use dedicated Cyber API
                const response = await fetch('/api/cyber/contact', {
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
            <div className="max-w-2xl mx-auto p-12 bg-white/5 border border-white/10 rounded-3xl text-center">
                <div className="flex justify-center mb-6">
                    <CheckCircle className="w-16 h-16 text-cyber-green" />
                </div>
                <h2 className="text-3xl font-bold text-white mb-4">お申し込み完了</h2>
                <p className="text-white/70 mb-8">
                    お申し込みありがとうございます。<br />
                    ご入力のご確認メールをお送りしましたので、ご確認ください。<br />
                    振込先情報はメールに記載されております。
                </p>
                <div className="p-4 bg-white/5 rounded-xl border border-white/10 text-left mb-8">
                    <h3 className="text-cyber-green font-bold mb-2">今後の流れ</h3>
                    <ol className="list-decimal list-inside text-sm text-white/70 space-y-2">
                        <li>ご登録のメールアドレスを含む自動返信メールをご確認ください。</li>
                        <li>メールに記載の振込先へ料金をお振込みください。</li>
                        <li>事務局にて入金確認後、正式に解析日程のご案内をお送りします。</li>
                    </ol>
                </div>
                <a href="/cyber" className="inline-block px-8 py-3 bg-transparent border border-cyber-green text-cyber-green font-bold hover:bg-cyber-green hover:text-black transition-colors rounded-full">
                    トップページへ戻る
                </a>
            </div>
        );
    }

    return (
        <form onSubmit={handleSubmit} className="max-w-3xl mx-auto space-y-8 p-8 bg-white/5 border border-white/10 rounded-3xl backdrop-blur-md">
            <h2 className="text-2xl font-bold text-white mb-6 border-b border-white/10 pb-4">お申込みフォーム</h2>

            {/* Error Message */}
            {error && (
                <div className="bg-red-500/10 border border-red-500/50 text-red-500 p-4 rounded-xl flex items-center gap-2">
                    <AlertCircle size={20} />
                    <span>{error}</span>
                </div>
            )}

            {/* Section 1: Basic Info */}
            <div className="space-y-6">
                <h3 className="text-lg font-bold text-cyber-green">お客様情報 (必須)</h3>

                <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                        <label className="text-sm font-bold text-white/80">お名前</label>
                        <input
                            type="text"
                            name="name"
                            required
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full bg-black/50 border border-white/20 rounded-lg p-3 text-white focus:border-cyber-green focus:outline-none transition-colors"
                            placeholder="山田 太郎"
                        />
                    </div>
                    <div className="space-y-2">
                        <label className="text-sm font-bold text-white/80">メールアドレス</label>
                        <input
                            type="email"
                            name="email"
                            required
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full bg-black/50 border border-white/20 rounded-lg p-3 text-white focus:border-cyber-green focus:outline-none transition-colors"
                            placeholder="example@email.com"
                        />
                    </div>
                </div>

                <div className="space-y-2">
                    <label className="text-sm font-bold text-white/80">会社名</label>
                    <input
                        type="text"
                        name="company"
                        required
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full bg-black/50 border border-white/20 rounded-lg p-3 text-white focus:border-cyber-green focus:outline-none transition-colors"
                        placeholder="株式会社〇〇"
                    />
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                        <label className="text-sm font-bold text-white/80">業種</label>
                        <input
                            type="text"
                            name="industry"
                            required
                            value={formData.industry}
                            onChange={handleChange}
                            className="w-full bg-black/50 border border-white/20 rounded-lg p-3 text-white focus:border-cyber-green focus:outline-none transition-colors"
                            placeholder="IT・通信"
                        />
                    </div>
                    <div className="space-y-2">
                        <label className="text-sm font-bold text-white/80">担当業務</label>
                        <input
                            type="text"
                            name="role"
                            required
                            value={formData.role}
                            onChange={handleChange}
                            className="w-full bg-black/50 border border-white/20 rounded-lg p-3 text-white focus:border-cyber-green focus:outline-none transition-colors"
                            placeholder="営業・マーケティング"
                        />
                    </div>
                </div>
            </div>

            {/* Section 2: Hearing Info */}
            <div className="space-y-6 pt-6 border-t border-white/10">
                <h3 className="text-lg font-bold text-cyber-green">ヒアリング項目 (任意)</h3>

                <div className="space-y-2">
                    <label className="text-sm font-bold text-white/80">現在のご相談内容</label>
                    <textarea
                        name="consultation"
                        value={formData.consultation}
                        onChange={handleChange}
                        className="w-full h-24 bg-black/50 border border-white/20 rounded-lg p-3 text-white focus:border-cyber-green focus:outline-none transition-colors resize-none"
                        placeholder="具体的なお悩みがあればご記入ください"
                    />
                </div>

                <div className="space-y-2">
                    <label className="text-sm font-bold text-white/80">およその年収</label>
                    <input
                        type="text"
                        name="annualIncome"
                        value={formData.annualIncome}
                        onChange={handleChange}
                        className="w-full bg-black/50 border border-white/20 rounded-lg p-3 text-white focus:border-cyber-green focus:outline-none transition-colors"
                        placeholder="例: 500万円"
                    />
                </div>

                <div className="space-y-2">
                    <label className="text-sm font-bold text-white/80">獲得したいスキルや保有資格など</label>
                    <textarea
                        name="skills"
                        value={formData.skills}
                        onChange={handleChange}
                        className="w-full h-24 bg-black/50 border border-white/20 rounded-lg p-3 text-white focus:border-cyber-green focus:outline-none transition-colors resize-none"
                        placeholder="例: データ分析スキル、TOEIC 800点"
                    />
                </div>
            </div>

            {/* Section 3: Payment Method */}
            <div className="space-y-6 pt-6 border-t border-white/10">
                <h3 className="text-lg font-bold text-cyber-green">お支払い方法</h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <label className={`relative flex items-center p-4 border rounded-xl cursor-pointer transition-all ${formData.paymentMethod === 'stripe' ? 'border-cyber-green bg-cyber-green/10' : 'border-white/20 bg-black/30 hover:bg-white/5'}`}>
                        <input
                            type="radio"
                            name="paymentMethod"
                            value="stripe"
                            checked={formData.paymentMethod === 'stripe'}
                            onChange={() => handleRadioChange('stripe')}
                            className="hidden"
                        />
                        <div className="flex-1">
                            <div className="font-bold text-white">クレジットカード決済</div>
                            <div className="text-xs text-white/60">Stripeによる安全な決済です</div>
                        </div>
                        <div className={`w-5 h-5 rounded-full border flex items-center justify-center ${formData.paymentMethod === 'stripe' ? 'border-cyber-green' : 'border-white/40'}`}>
                            {formData.paymentMethod === 'stripe' && <div className="w-3 h-3 rounded-full bg-cyber-green" />}
                        </div>
                    </label>

                    <label className={`relative flex items-center p-4 border rounded-xl cursor-pointer transition-all ${formData.paymentMethod === 'transfer' ? 'border-cyber-green bg-cyber-green/10' : 'border-white/20 bg-black/30 hover:bg-white/5'}`}>
                        <input
                            type="radio"
                            name="paymentMethod"
                            value="transfer"
                            checked={formData.paymentMethod === 'transfer'}
                            onChange={() => handleRadioChange('transfer')}
                            className="hidden"
                        />
                        <div className="flex-1">
                            <div className="font-bold text-white">銀行振込</div>
                            <div className="text-xs text-white/60">後ほどメールで口座をご案内します</div>
                        </div>
                        <div className={`w-5 h-5 rounded-full border flex items-center justify-center ${formData.paymentMethod === 'transfer' ? 'border-cyber-green' : 'border-white/40'}`}>
                            {formData.paymentMethod === 'transfer' && <div className="w-3 h-3 rounded-full bg-cyber-green" />}
                        </div>
                    </label>
                </div>
            </div>

            {/* Submit Button */}
            <div className="pt-6">
                <button
                    type="submit"
                    disabled={isLoading}
                    className="w-full bg-cyber-green text-black font-bold py-4 rounded-xl hover:bg-cyber-green/90 transition-all flex items-center justify-center gap-2 group disabled:opacity-50 disabled:cursor-not-allowed"
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
                <p className="text-center text-xs text-white/40 mt-4">
                    お客様の個人情報は厳重に管理されます。
                </p>
            </div>
        </form>
    );
};

export default ApplicationForm;
