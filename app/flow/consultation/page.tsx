"use client";

// Imports updated
import React, { useState } from 'react';
import Link from 'next/link';
import { ChevronLeft, Send, CheckCircle, Video, Loader2 } from 'lucide-react';
import { useSearchParams } from 'next/navigation';
import {
    SocialProofSection,
    StorySection,
    AuthoritySection,
    FlowSimulationSection,
    FAQSection,
    FlowLegalFooter,
    FooterCTA
} from '@/components/flow/FlowConsultationComponents';

export default function ConsultationPage() {
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const searchParams = useSearchParams();
    const startTimeParam = searchParams.get('start_time');
    const serviceIdParam = searchParams.get('service_id');
    const serviceNameParam = searchParams.get('service_name');

    // This would ideally connect to an API, using timeout for mock
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);

        // Collect form data safely
        const target = e.target as typeof e.target & {
            name: { value: string };
            company: { value: string };
            email: { value: string };
            consultation: { value: string };
        };

        const payload = {
            name: target.name.value,
            company: target.company.value,
            email: target.email.value,
            consultation: target.consultation.value,
        };

        try {
            // BOOKING FLOW (if start_time is present)
            if (startTimeParam && serviceIdParam) {
                const response = await fetch('/api/booking/create-checkout', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        serviceId: serviceIdParam,
                        serviceName: serviceNameParam || '予約サービス',
                        price: searchParams.get('price') ? parseInt(searchParams.get('price')!) : 0,
                        customerName: payload.name,
                        customerEmail: payload.email,
                        notes: `${payload.consultation}\nCompany: ${payload.company}`,
                        startTime: startTimeParam
                    }),
                });

                if (!response.ok) throw new Error('Booking failed');
                // For free bookings, data.url might be null/undefined, meaning success.
                // Assuming create-checkout returns { success: true } or similar for free.
                const data = await response.json();
                if (data.url) {
                    window.location.href = data.url;
                } else {
                    setIsSubmitted(true);
                }
                return;
            }

            const res = await fetch('/api/flow/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload),
            });

            if (!res.ok) throw new Error('Failed to send');

            setIsSubmitted(true);
        } catch (error) {
            console.error(error);
            alert('送信に失敗しました。時間をおいて再度お試しください。');
        } finally {
            setIsLoading(false);
        }
    };

    if (isSubmitted) {
        return (
            <div className="min-h-screen bg-tech-navy flex items-center justify-center p-6">
                <div className="max-w-lg w-full bg-white/5 border border-white/10 rounded-2xl p-12 text-center animate-fade-in-up">
                    <div className="w-20 h-20 bg-tech-green/10 rounded-full flex items-center justify-center mx-auto mb-6">
                        <CheckCircle className="text-tech-green w-10 h-10" />
                    </div>
                    <h2 className="text-2xl font-bold text-white mb-4">送信完了しました</h2>
                    <p className="text-white/60 mb-8">
                        お問い合わせありがとうございます。<br />
                        内容を確認の上、担当者より24時間以内にご連絡いたします。
                    </p>
                    <Link href="/flow" className="text-tech-cyan hover:text-white underline underline-offset-4 transition-colors">
                        トップページへ戻る
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-tech-navy text-white relative font-noto-sans selection:bg-tech-cyan selection:text-tech-navy">
            {/* Header / Nav */}
            <header className="absolute top-0 left-0 w-full p-6 z-20 flex justify-between items-center">
                <Link href="/flow" className="flex items-center gap-2 text-white/60 hover:text-white transition-colors">
                    <ChevronLeft size={20} />
                    <span>Back</span>
                </Link>
                <Link href="/flow/demo" className="flex items-center gap-2 text-tech-cyan hover:text-white transition-colors text-sm font-bold border border-tech-cyan/30 px-4 py-2 rounded-full hover:bg-tech-cyan/10">
                    <Video size={16} />
                    <span>実機デモ動画を見る</span>
                </Link>
            </header>

            {/* Hero Section */}
            <section className="container mx-auto px-6 py-24 flex flex-col md:flex-row gap-12 items-start justify-center max-w-6xl relative z-10">

                {/* Left Side: Context */}
                <div className="w-full md:w-5/12 pt-12">
                    <h1 className="text-3xl md:text-5xl font-bold font-noto-sans mb-8 leading-tight">
                        まずは<span className="text-tech-cyan">無料</span>で、<br />
                        可能性を診断します。
                    </h1>
                    <p className="text-lg text-white/70 mb-12 leading-relaxed">
                        「この業務は自動化できる？」「他社はどうやっている？」<br />
                        そんな素朴な疑問からで構いません。<br /><br />
                        売り込みはしません。<br />
                        あなたのビジネスの「伸びしろ」を一緒に探す30分です。
                    </p>

                    <div className="space-y-6">
                        <div className="flex items-start gap-4">
                            <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0 text-tech-cyan font-bold">1</div>
                            <div>
                                <h3 className="font-bold text-white mb-1">ヒアリング (30分)</h3>
                                <p className="text-sm text-white/50">現状の課題や業務フローをお伺いします。</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-4">
                            <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0 text-tech-cyan font-bold">2</div>
                            <div>
                                <h3 className="font-bold text-white mb-1">簡易診断・ご提案</h3>
                                <p className="text-sm text-white/50">「どこを自動化すべきか」「効果はどれくらいか」をその場で診断。</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-4">
                            <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0 text-tech-cyan font-bold">3</div>
                            <div>
                                <h3 className="font-bold text-white mb-1">デモ案内 (任意)</h3>
                                <p className="text-sm text-white/50">ご希望であれば、類似事例のデモ画面をお見せします。</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Side: Form */}
                <div className="w-full md:w-6/12 bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-sm">
                    <h2 className="text-xl font-bold mb-6 border-b border-white/10 pb-4">無料相談・デモ依頼フォーム</h2>

                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="space-y-2">
                            <label className="text-sm font-bold text-white/80">お名前 <span className="text-tech-vermilion">*</span></label>
                            <input name="name" type="text" required className="w-full bg-black/50 border border-white/20 rounded-lg p-3 focus:border-tech-cyan outline-none transition-colors" placeholder="山田 太郎" />
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-bold text-white/80">会社名 <span className="text-tech-vermilion">*</span></label>
                            <input name="company" type="text" required className="w-full bg-black/50 border border-white/20 rounded-lg p-3 focus:border-tech-cyan outline-none transition-colors" placeholder="御社名" />
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-bold text-white/80">メールアドレス <span className="text-tech-vermilion">*</span></label>
                            <input name="email" type="email" required className="w-full bg-black/50 border border-white/20 rounded-lg p-3 focus:border-tech-cyan outline-none transition-colors" placeholder="example@company.com" />
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-bold text-white/80">ご相談内容 (任意)</label>
                            <textarea name="consultation" className="w-full h-32 bg-black/50 border border-white/20 rounded-lg p-3 focus:border-tech-cyan outline-none transition-colors resize-none" placeholder="例：経理業務の自動化に興味がある、まずは事例を知りたい 等"></textarea>
                        </div>

                        <button
                            type="submit"
                            disabled={isLoading}
                            className="w-full bg-tech-cyan text-tech-navy font-bold py-4 rounded-xl hover:bg-white transition-all flex items-center justify-center gap-2 mt-4 disabled:opacity-70 disabled:cursor-not-allowed"
                        >
                            {isLoading ? (
                                <>
                                    <Loader2 className="animate-spin" />
                                    送信中...
                                </>
                            ) : (
                                <>
                                    無料で相談する
                                    <Send size={18} />
                                </>
                            )}
                        </button>
                        <p className="text-xs text-center text-white/40">
                            ご入力いただいた情報は、お問い合わせ対応のみに利用いたします。
                        </p>
                    </form>
                </div>
            </section>

            {/* Remaining Sections */}
            <AuthoritySection />
            <StorySection />
            <SocialProofSection />
            <FlowSimulationSection />
            <FAQSection />
            <FooterCTA />

            {/* Legal Footer */}
            <FlowLegalFooter />
        </div>
    );
}
