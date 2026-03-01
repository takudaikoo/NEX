"use client";

import React from 'react';
import { ChevronDown } from 'lucide-react';

export default function BrandHero() {
    const scrollToServices = () => {
        const servicesSection = document.getElementById('brand-services');
        servicesSection?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <section className="relative w-full h-screen flex flex-col justify-center items-center text-center px-6 z-10">
            <div className="animate-fade-in-up">
                <p className="text-sm md:text-base font-mono text-white/50 tracking-[0.3em] uppercase mb-6">
                    AI &middot; Technology &middot; Body Intelligence
                </p>
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold font-noto-sans leading-tight mb-8 tracking-wide text-white">
                    人・技術・身体をつなぎ、<br />
                    実装する。
                </h1>
                <div className="w-20 h-[2px] bg-gradient-to-r from-tech-cyan to-tech-green mx-auto mb-8" />
                <p className="text-base md:text-lg text-white/60 max-w-2xl mx-auto leading-relaxed">
                    NXS（NEXUS）は、AI・テクノロジー・身体知を横断し、<br className="hidden md:block" />
                    「使える」「変わる」「結果が出る」状態まで落とし込む実装カンパニーです。
                </p>
            </div>

            <button
                onClick={scrollToServices}
                className="absolute bottom-12 left-1/2 -translate-x-1/2 text-white/30 hover:text-white/60 transition-colors cursor-pointer"
                aria-label="事業一覧へスクロール"
            >
                <ChevronDown size={32} className="animate-bounce" />
            </button>
        </section>
    );
}
