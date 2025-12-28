"use client";

import React from 'react';
import { ChevronDown, ArrowRight } from 'lucide-react';

export default function BrandHero() {
    const scrollToServices = () => {
        const servicesSection = document.getElementById('brand-services');
        servicesSection?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <section className="relative w-full h-screen flex flex-col justify-center items-center text-center px-6 z-10 pt-20">
            <h1 className="text-4xl md:text-7xl font-bold font-noto-sans leading-tight mb-8 tracking-wide animate-fade-in-up">
                人・技術・身体をつなぎ、<br />
                実装によって成果を生む。
            </h1>

            <p className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto mb-12 leading-relaxed animate-fade-in-up delay-100">
                NXS（NEXUS）は、AI・テクノロジー・身体知を横断し、<br />
                「使える」「変わる」「結果が出る」状態まで落とし込む実装カンパニーです。
            </p>

            <div className="flex flex-col md:flex-row gap-6 animate-fade-in-up delay-200">
                <button
                    onClick={scrollToServices}
                    className="group relative px-8 py-4 bg-white text-black font-bold rounded-full overflow-hidden transition-all hover:scale-105"
                >
                    <span className="relative z-10 flex items-center gap-2">
                        事業を見る
                        <ChevronDown className="group-hover:translate-y-1 transition-transform" />
                    </span>
                </button>

                <a
                    href="mailto:info@nex-s.jp"
                    className="group relative px-8 py-4 bg-transparent border border-white/30 text-white font-bold rounded-full overflow-hidden transition-all hover:bg-white/10"
                >
                    <span className="flex items-center gap-2">
                        NXSについて問い合わせる
                        <ArrowRight className="group-hover:translate-x-1 transition-transform" />
                    </span>
                </a>
            </div>

            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/30 animate-bounce">
                <ChevronDown size={32} />
            </div>
        </section>
    );
}
