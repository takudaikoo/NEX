"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { ArrowLeft, Send } from 'lucide-react';
import BrandFooter from '@/components/brand/BrandFooter';

export default function ContactPage() {
    const router = useRouter();
    const [formData, setFormData] = useState({
        name: '',
        company: '',
        email: '',
        phone: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setErrorMessage('');

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.error || '送信に失敗しました');
            }

            // Success: Redirect to thanks page
            router.push('/contact/thanks');
        } catch (error: any) {
            console.error('Submission error:', error);
            setErrorMessage(error.message || '予期せぬエラーが発生しました。時間をおいて再度お試しください。');
            setIsSubmitting(false);
        }
    };

    return (
        <div className="min-h-screen bg-black text-white font-noto-sans selection:bg-tech-cyan selection:text-black flex flex-col">

            {/* Header */}
            <header className="py-8 px-6 border-b border-white/10 sticky top-0 bg-black/80 backdrop-blur-md z-50">
                <div className="container mx-auto flex justify-between items-center">
                    <Link href="/" className="text-2xl font-bold tracking-widest hover:text-tech-cyan transition-colors">
                        NXS
                    </Link>
                    <Link href="/" className="text-xs text-white/60 hover:text-white flex items-center gap-2">
                        <ArrowLeft size={14} /> Back to Top
                    </Link>
                </div>
            </header>

            {/* Main Content */}
            <main className="flex-grow container mx-auto px-6 py-20 max-w-3xl">
                <div className="text-center mb-16 space-y-4">
                    <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Contact</h1>
                    <p className="text-white/60">
                        事業に関するお問い合わせ、協業のご相談はこちらから承ります。
                    </p>
                </div>

                <div className="bg-[#111] border border-white/10 rounded-2xl p-8 md:p-12 shadow-2xl">
                    <form onSubmit={handleSubmit} className="space-y-8">

                        {/* Company Name */}
                        <div className="space-y-2">
                            <label htmlFor="company" className="block text-sm font-bold tracking-wider text-white/80">
                                会社名 <span className="text-red-500 text-xs ml-1">*必須</span>
                            </label>
                            <input
                                type="text"
                                id="company"
                                name="company"
                                value={formData.company}
                                onChange={handleChange}
                                required
                                placeholder="株式会社NXS"
                                className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white placeholder-white/20 focus:outline-none focus:border-white/40 focus:bg-white/10 transition-colors"
                            />
                        </div>

                        {/* Name */}
                        <div className="space-y-2">
                            <label htmlFor="name" className="block text-sm font-bold tracking-wider text-white/80">
                                お名前 <span className="text-red-500 text-xs ml-1">*必須</span>
                            </label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                                placeholder="山田 太郎"
                                className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white placeholder-white/20 focus:outline-none focus:border-white/40 focus:bg-white/10 transition-colors"
                            />
                        </div>

                        {/* Email */}
                        <div className="space-y-2">
                            <label htmlFor="email" className="block text-sm font-bold tracking-wider text-white/80">
                                メールアドレス <span className="text-red-500 text-xs ml-1">*必須</span>
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                placeholder="contact@example.com"
                                className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white placeholder-white/20 focus:outline-none focus:border-white/40 focus:bg-white/10 transition-colors"
                            />
                        </div>

                        {/* Phone */}
                        <div className="space-y-2">
                            <label htmlFor="phone" className="block text-sm font-bold tracking-wider text-white/80">
                                電話番号 <span className="text-red-500 text-xs ml-1">*必須</span>
                            </label>
                            <input
                                type="tel"
                                id="phone"
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                required
                                placeholder="03-1234-5678"
                                className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white placeholder-white/20 focus:outline-none focus:border-white/40 focus:bg-white/10 transition-colors"
                            />
                        </div>

                        {/* Message */}
                        <div className="space-y-2">
                            <label htmlFor="message" className="block text-sm font-bold tracking-wider text-white/80">
                                お問い合わせ内容 <span className="text-red-500 text-xs ml-1">*必須</span>
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                required
                                placeholder="お問い合わせ内容をご記入ください。"
                                rows={6}
                                className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white placeholder-white/20 focus:outline-none focus:border-white/40 focus:bg-white/10 transition-colors resize-y"
                            />
                        </div>

                        {/* Error Message */}
                        {errorMessage && (
                            <div className="p-4 bg-red-500/10 border border-red-500/20 text-red-400 rounded text-sm">
                                {errorMessage}
                            </div>
                        )}

                        {/* Submit Button */}
                        <div className="pt-4">
                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full bg-white text-black font-bold text-lg py-4 rounded hover:bg-gray-200 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                            >
                                {isSubmitting ? (
                                    <>
                                        <div className="w-5 h-5 border-2 border-black border-t-transparent rounded-full animate-spin"></div>
                                        送信中...
                                    </>
                                ) : (
                                    <>
                                        送信する <Send size={18} />
                                    </>
                                )}
                            </button>
                            <p className="mt-4 text-center text-xs text-white/40">
                                送信することで、<Link href="/legal/privacy" className="underline hover:text-white">プライバシーポリシー</Link>に同意したものとみなされます。
                            </p>
                        </div>

                    </form>
                </div>
            </main>

            <BrandFooter />
        </div>
    );
}
