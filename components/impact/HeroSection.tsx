"use client";

import React from 'react';
import { ArrowRight, Activity } from 'lucide-react';
import Link from 'next/link';

const HeroSection: React.FC = () => {
    return (
        <section className="relative z-10 min-h-screen flex items-center justify-center px-6 pt-20">
            <div className="container mx-auto max-w-6xl text-center relative">

                {/* Authority Badge */}
                <div className="inline-flex items-center gap-2 px-4 py-2 border border-impact-red/30 bg-impact-red/5 rounded-none mb-8 backdrop-blur-md animate-pulse">
                    <Activity size={16} className="text-impact-red" />
                    <span className="text-impact-red font-mono text-sm tracking-widest uppercase">
                        物理学専攻 × 動作解析 5,000件超
                    </span>
                </div>

                {/* Main Headline */}
                <h1 className="text-3xl md:text-5xl font-bold font-noto-sans text-gray-900 mb-8 leading-tight tracking-tight">
                    努力しているのに、<br />
                    なぜか安定しない。<br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-impact-red to-gray-900">
                        その原因、動きの前にあります。
                    </span>
                </h1>

                {/* Sub Headline */}
                <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto mb-12 font-light leading-relaxed">
                    フォームを直しても、トレーニングを積んでも、<br />
                    なぜか再現性が出ない。<br /><br />
                    Impactは、<span className="font-bold text-gray-900">動作そのものではなく「動作が始まる前の身体条件」</span>を解析するサービスです。
                </p>

                {/* CTA Button */}
                <div className="flex flex-col items-center gap-4">
                    <Link href="/impact/application" className="group relative px-8 py-4 bg-impact-red text-white font-bold text-lg tracking-widest uppercase overflow-hidden transition-all hover:bg-white hover:text-black hover:scale-105 inline-block rounded-full shadow-lg">
                        <div className="absolute inset-0 bg-white/40 translate-y-full group-hover:translate-y-0 transition-transform duration-300 transform skew-y-12"></div>
                        <span className="relative z-10 flex items-center gap-3">
                            初回体験セッションを予約する
                            <ArrowRight size={20} />
                        </span>
                    </Link>
                    <p className="text-sm text-gray-400 font-mono">（オンライン / 都度払い）</p>
                </div>

                {/* Visual Placeholder (Runner Silhouette) */}
                {/* In a real scenario, we'd place a transparent PNG here. 
                    For now, use CSS to suggest it or rely on background atmosphere. 
                    Or use a placeholder div that mimics a "Scanner" overlay. */}
                {/* Visual Placeholder (Runner Silhouette) */}
                <div className="mt-16 relative w-64 h-64 mx-auto hidden md:block group">
                    {/* Ring */}
                    <div className="absolute inset-0 border border-impact-red/20 rounded-full animate-spin-slow border-t-impact-red"></div>
                    <div className="absolute inset-4 border border-impact-red/10 rounded-full animate-spin-slow animation-delay-150 border-r-impact-red"></div>

                    {/* Motion Skeleton (CSS Stick Figure) */}
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-40">
                        {/* Head */}
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-6 h-6 bg-gray-900 rounded-full"></div>
                        {/* Spine */}
                        <div className="absolute top-6 left-1/2 -translate-x-1/2 w-1 h-16 bg-gray-900 origin-top rotate-12"></div>
                        {/* Arm L */}
                        <div className="absolute top-8 left-1/2 w-1 h-12 bg-gray-900 origin-top -rotate-45"></div>
                        {/* Arm R */}
                        <div className="absolute top-8 left-1/2 w-1 h-12 bg-gray-900 origin-top rotate-[60deg]"></div>
                        {/* Leg L */}
                        <div className="absolute top-20 left-1/2 w-1 h-16 bg-gray-900 origin-top rotate-12"></div>
                        {/* Leg R (Running) */}
                        <div className="absolute top-20 left-1/2 w-1 h-16 bg-impact-red origin-top -rotate-45 relative">
                            {/* Highlight Joint */}
                            <div className="absolute bottom-0 -left-1 w-3 h-3 bg-impact-red rounded-full shadow-[0_0_10px_red] animate-ping"></div>
                        </div>
                    </div>

                    <div className="absolute bottom-10 right-10 flex flex-col items-end">
                        <div className="text-xs font-mono text-gray-400">JOINT ANGLE</div>
                        <div className="text-lg font-bold text-impact-red font-mono">142° <span className="text-xs text-gray-400">(-3°)</span></div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default HeroSection;
