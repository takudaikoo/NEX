"use client";

import React from 'react';
import Link from 'next/link';
import { ArrowLeft, CheckCircle } from 'lucide-react';
import BrandFooter from '@/components/brand/BrandFooter';

export default function ContactThanksPage() {
    return (
        <div className="min-h-screen bg-black text-white font-noto-sans selection:bg-tech-cyan selection:text-black flex flex-col">

            <header className="py-8 px-6 border-b border-white/10">
                <div className="container mx-auto flex justify-between items-center">
                    <Link href="/" className="text-2xl font-bold tracking-widest hover:text-tech-cyan transition-colors">
                        NXS
                    </Link>
                </div>
            </header>

            <main className="flex-grow flex items-center justify-center px-6 py-20">
                <div className="max-w-xl w-full text-center space-y-8">
                    <div className="inline-flex justify-center items-center w-20 h-20 bg-white/10 rounded-full mb-4 animate-pulse">
                        <CheckCircle size={40} className="text-white" />
                    </div>

                    <h1 className="text-3xl md:text-4xl font-bold tracking-tight">
                        送信が完了しました
                    </h1>

                    <div className="space-y-4 text-white/70 leading-relaxed">
                        <p>
                            お問い合わせいただき、誠にありがとうございます。<br />
                            ご入力いただいたメールアドレスへ、自動確認メールを送信いたしました。
                        </p>
                        <p>
                            内容を確認の上、担当者より<span className="text-white font-bold underline decoration-white/30 underline-offset-4">3営業日以内</span>にご回答させていただきます。<br />
                            今しばらくお待ちくださいませ。
                        </p>
                    </div>

                    <div className="pt-8">
                        <Link href="/" className="inline-flex items-center gap-2 px-8 py-4 bg-white text-black font-bold rounded hover:bg-gray-200 transition-colors">
                            <ArrowLeft size={20} /> トップページへ戻る
                        </Link>
                    </div>
                </div>
            </main>

            <BrandFooter />
        </div>
    );
}
