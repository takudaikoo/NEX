"use client";

import React from 'react';
import Link from 'next/link';
import { ChevronLeft, MessageSquare, Play } from 'lucide-react';

export default function DemoPage() {
    return (
        <div className="min-h-screen bg-tech-navy text-white relative overflow-hidden">
            {/* Background Effects */}
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-tech-navy-light/20 via-tech-navy to-black -z-10"></div>

            {/* Header / Nav */}
            <header className="absolute top-0 left-0 w-full p-6 z-20 flex justify-between items-center bg-gradient-to-b from-black/50 to-transparent">
                <Link href="/flow" className="flex items-center gap-2 text-white/60 hover:text-white transition-colors">
                    <ChevronLeft size={20} />
                    <span>Back to Top</span>
                </Link>
            </header>

            <main className="container mx-auto px-6 pt-32 pb-20 flex flex-col items-center justify-center min-h-screen">

                {/* Title */}
                <div className="text-center mb-12 animate-fade-in-up">
                    <div className="inline-block px-3 py-1 bg-tech-cyan/10 text-tech-cyan rounded-full text-xs font-bold tracking-wider uppercase mb-4">
                        Actual Demo
                    </div>
                    <h1 className="text-3xl md:text-5xl font-bold font-noto-sans mb-4">
                        百聞は一見に如かず。
                    </h1>
                    <p className="text-white/60">
                        実際の自動化フローがどのように動くのか、15秒で体感してください。
                    </p>
                </div>

                {/* Video Placeholder */}
                <div className="w-full max-w-4xl aspect-video bg-black/40 border border-white/10 rounded-2xl relative group overflow-hidden shadow-2xl animate-fade-in-up delay-100 mb-16">
                    {/* Placeholder for Video - Ideally use a real video tag here later */}
                    <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-white/5 to-transparent group-hover:bg-white/10 transition-colors cursor-pointer">
                        <div className="w-20 h-20 rounded-full bg-tech-cyan/20 border border-tech-cyan flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                            <Play className="fill-tech-cyan text-tech-cyan ml-1" size={32} />
                        </div>
                        <p className="text-sm font-mono text-white/60">Click to Play Demo (Mock)</p>
                    </div>

                    {/* Grid Overlay */}
                    <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none"></div>
                </div>

                {/* CTA Section */}
                <div className="text-center animate-fade-in-up delay-200">
                    <h2 className="text-2xl font-bold mb-8">
                        あなたの業務でも、<br className="md:hidden" />
                        これと同じことが可能です。
                    </h2>
                    <Link
                        href="/flow/consultation"
                        className="inline-flex items-center justify-center px-12 py-6 bg-tech-cyan text-tech-navy rounded-full font-bold text-xl hover:bg-white hover:scale-105 hover:shadow-[0_0_50px_rgba(0,243,255,0.6)] transition-all duration-300 gap-3 shadow-[0_0_20px_rgba(0,243,255,0.3)]"
                    >
                        無料相談・デモ依頼をする
                        <MessageSquare size={20} />
                    </Link>
                    <p className="mt-6 text-sm text-white/40">
                        ※無理な営業は一切いたしません。お気軽にご相談ください。
                    </p>
                </div>

            </main>
        </div>
    );
}
