"use client";

import React from 'react';
import { ArrowRight, ChevronRight } from 'lucide-react';

const HeroSection: React.FC = () => {
    return (
        <section className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden">
            <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

                {/* Text Content */}
                <div className="lg:col-span-8 space-y-8 text-center lg:text-left pt-20 lg:pt-0">
                    {/* Concept Tag */}
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md animate-fade-in-up">
                        <span className="w-2 h-2 rounded-full bg-tech-cyan animate-pulse"></span>
                        <span className="text-tech-cyan font-mono text-xs tracking-widest uppercase">Architect, not Mason</span>
                    </div>

                    {/* Main Headline */}
                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold font-noto-sans tracking-tight leading-tight text-white animate-fade-in-up delay-100">
                        <span className="block text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-white/50">
                            「ゼロから作らない」
                        </span>
                        <span className="block text-4xl md:text-6xl lg:text-7xl mt-2 font-light text-white/90">
                            という、最も賢い開発スタイル。
                        </span>
                    </h1>

                    {/* Sub Headline */}
                    <p className="text-lg md:text-xl text-white/70 font-light max-w-2xl mx-auto lg:mx-0 leading-relaxed animate-fade-in-up delay-200">
                        世界中のテクノロジーを<span className="text-white font-medium border-b border-tech-cyan/50">キュレーション</span>し、<br className="hidden md:block" />
                        あなたのビジネスを「来週」加速させる。
                    </p>

                    {/* CTA */}
                    <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-6 animate-fade-in-up delay-300">
                        <button className="px-8 py-4 bg-tech-cyan text-tech-navy rounded-full font-bold text-lg hover:bg-white hover:shadow-[0_0_30px_rgba(0,243,255,0.4)] transition-all duration-300 flex items-center justify-center gap-2 group">
                            実装デモを見る
                            <ArrowRight className="group-hover:translate-x-1 transition-transform" />
                        </button>
                    </div>
                </div>

                {/* Abstract Visual / Spacer for 3D Background Visibility */}
                <div className="lg:col-span-4 hidden lg:block">
                    {/* The 3D background will be visible here. 
                         We can add a subtle overlay or interactive zone if needed. */}
                </div>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-50">
                <div className="w-6 h-10 rounded-full border-2 border-white/30 flex justify-center pt-2">
                    <div className="w-1 h-2 bg-white/50 rounded-full"></div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
