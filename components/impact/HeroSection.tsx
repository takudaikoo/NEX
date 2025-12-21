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
                <h1 className="text-5xl md:text-7xl font-bold font-noto-sans text-gray-900 mb-6 leading-tight tracking-tight">
                    感覚の限界を、<br className="md:hidden" />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-900 via-impact-red to-gray-900 bg-[200%_auto] animate-shine">
                        「物理」
                    </span>
                    で突破する。
                </h1>

                {/* Sub Headline */}
                <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto mb-12 font-light leading-relaxed">
                    あなたの伸び悩みは、努力不足ではなく「動作のバグ」だ。<br />
                    60分で走りを演算し、一生モノの「修正処方箋」を出す。
                </p>

                {/* CTA Button */}
                <div className="flex flex-col items-center gap-4">
                    <Link href="/impact/application" className="group relative px-8 py-4 bg-impact-red text-white font-bold text-lg tracking-widest uppercase overflow-hidden transition-all hover:bg-white hover:text-black hover:scale-105 inline-block">
                        <div className="absolute inset-0 bg-white/40 translate-y-full group-hover:translate-y-0 transition-transform duration-300 transform skew-y-12"></div>
                        <span className="relative z-10 flex items-center gap-3">
                            今月の解析枠を確認する
                            <ArrowRight size={20} />
                        </span>
                    </Link>
                    <p className="text-sm text-gray-400 font-mono">（オンライン / 都度払い）</p>
                </div>

                {/* Visual Placeholder (Runner Silhouette) */}
                {/* In a real scenario, we'd place a transparent PNG here. 
                    For now, use CSS to suggest it or rely on background atmosphere. 
                    Or use a placeholder div that mimics a "Scanner" overlay. */}
                <div className="mt-16 relative w-64 h-64 mx-auto opacity-50 hidden md:block">
                    <div className="absolute inset-0 border border-impact-red/20 rounded-full animate-spin-slow border-t-impact-red"></div>
                    <div className="absolute inset-4 border border-impact-red/10 rounded-full animate-spin-slow animation-delay-150 border-r-impact-red"></div>
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-impact-red/10">
                        [ RUNNER_SILHOUETTE ]
                    </div>
                </div>

            </div>
        </section>
    );
};

export default HeroSection;
