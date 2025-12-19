"use client";

import React from 'react';
import { ArrowRight, Trophy } from 'lucide-react';

const HeroSection: React.FC = () => {
    return (
        <section className="relative z-10 min-h-screen flex items-center justify-center px-6 pt-20">
            <div className="container mx-auto max-w-7xl grid md:grid-cols-2 gap-12 items-center">

                {/* Left: Copy & CTA */}
                <div className="space-y-8 relative z-20">
                    {/* Authority Badge */}
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 border border-white/20 rounded-full backdrop-blur-md">
                        <Trophy size={16} className="text-cyber-gold" />
                        <span className="text-white text-xs font-bold tracking-widest">
                            現場解決率 9X% / Co-Pilot型研修 No.1
                        </span>
                    </div>

                    <h1 className="font-bold leading-tight tracking-tight text-white">
                        <span className="block text-2xl md:text-3xl font-normal text-white/50 mb-2">
                            「AIに仕事を奪われる側」から、
                        </span>
                        <span className="block text-5xl md:text-7xl lg:text-8xl text-transparent bg-clip-text bg-gradient-to-r from-white via-cyber-gold to-white bg-[200%_auto] animate-shine stroke-white drop-shadow-[0_0_30px_rgba(255,215,0,0.3)]">
                            「AIを<br />あごで使う側」へ。
                        </span>
                    </h1>

                    <h2 className="text-lg md:text-xl text-white/80 font-light leading-relaxed border-l-4 border-cyber-vermilion pl-6">
                        漠然とした将来不安を、確かな技術という「自信」に変える。<br />
                        <span className="font-bold text-white">超実践型・開発スキル伴走プログラム。</span>
                    </h2>

                    <div className="pt-4">
                        <button className="group relative px-8 py-5 bg-cyber-vermilion text-white font-bold text-xl rounded-full shadow-[0_10px_40px_rgba(227,66,52,0.4)] overflow-hidden transition-all hover:scale-105 hover:shadow-[0_20px_60px_rgba(227,66,52,0.6)]">
                            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                            <span className="relative z-10 flex items-center gap-3">
                                まずは30分、技術で「未来」を変える体験へ
                                <ArrowRight size={24} />
                            </span>
                        </button>
                        <p className="mt-4 text-sm text-white/40 ml-4">無理な勧誘なし / 初心者歓迎</p>
                    </div>
                </div>

                {/* Right: Visual (Controller Concept) */}
                <div className="relative h-[600px] hidden md:block">
                    {/* Placeholder for "Controller" image */}
                    {/* Person smiling at data screens with Co-Pilot ghost behind */}
                    <div className="absolute inset-0 z-10 flex items-center justify-center">
                        <div className="w-full h-full relative">
                            {/* Abstract representation of Hologram Controls */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-r from-tech-cyan/20 to-flow-purple/20 rounded-full blur-[100px] animate-pulse-fast"></div>

                            {/* The Person (Silhouette for placeholder) */}
                            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-3/4 bg-gradient-to-t from-black to-gray-800 rounded-t-3xl opacity-80 backdrop-blur-sm border-t border-white/20">
                                <div className="absolute top-10 left-10 right-10 bottom-0 border border-tech-cyan/30 rounded-t-xl bg-black/50 overflow-hidden">
                                    {/* Code Hologram */}
                                    <div className="p-4 font-mono text-xs text-tech-cyan/60 opacity-50">
                                        &gt; init_controller_mode()<br />
                                        &gt; ai_status: ONLINE<br />
                                        &gt; optimizing_workflow... 100%<br />
                                        &gt; confidence_level: MAX
                                    </div>
                                </div>
                            </div>

                            {/* Hand Gesture Ring */}
                            <div className="absolute top-[40%] left-[60%] w-32 h-32 border-2 border-dashed border-cyber-gold rounded-full animate-spin-slow opacity-80"></div>
                            <div className="absolute top-[40%] left-[60%] w-32 h-32 flex items-center justify-center text-cyber-gold font-bold tracking-widest text-xs uppercase animate-pulse">
                                Control
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default HeroSection;
