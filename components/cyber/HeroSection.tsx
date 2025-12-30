"use client";

import React from 'react';
import Link from 'next/link';
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

                    <h2 className="text-lg md:text-xl text-white/80 font-light leading-relaxed border-l-4 border-cyber-green pl-6">
                        漠然とした将来不安を、確かな技術という「自信」に変える。<br />
                        <span className="font-bold text-white">超実践型・開発スキル伴走プログラム。</span>
                    </h2>

                    <div className="pt-4">
                        <Link href="/cyber/reserve" className="group relative inline-flex items-center justify-center px-8 py-5 bg-cyber-green text-black font-bold text-xl rounded-full shadow-[0_10px_40px_rgba(0,255,65,0.4)] overflow-hidden transition-all hover:scale-105 hover:shadow-[0_20px_60px_rgba(0,255,65,0.6)]">
                            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                            <span className="relative z-10 flex items-center gap-3">
                                まずは30分、技術で「未来」を変える体験へ
                                <ArrowRight size={24} />
                            </span>
                        </Link>
                        <p className="mt-4 text-sm text-white/40 ml-4">無理な勧誘なし / 初心者歓迎</p>
                    </div>
                </div>

                {/* Right: Visual (Controller Concept) */}
                <div className="relative h-[600px] hidden md:block">
                    {/* Placeholder for "Controller" image */}
                    <div className="absolute inset-0 z-10 flex items-center justify-center">
                        <div className="w-full h-full relative">
                            {/* Matrix Rain Effect (Simplified CSS) */}
                            <div className="absolute inset-0 bg-black/40 rounded-3xl border border-cyber-green/20 backdrop-blur-sm overflow-hidden flex flex-col shadow-[0_0_50px_rgba(0,255,65,0.1)]">
                                {/* Fake Terminal Header */}
                                <div className="h-8 bg-black/80 border-b border-cyber-green/20 flex items-center px-4 gap-2">
                                    <div className="w-3 h-3 rounded-full bg-red-500 opacity-50"></div>
                                    <div className="w-3 h-3 rounded-full bg-yellow-500 opacity-50"></div>
                                    <div className="w-3 h-3 rounded-full bg-green-500 opacity-50"></div>
                                    <div className="ml-4 text-xs font-mono text-cyber-green/60">nxs-cyber-core v1.0.4</div>
                                </div>
                                {/* Terminal Body */}
                                <div className="flex-1 p-6 font-mono text-xs md:text-sm text-cyber-green/80 relative">
                                    <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,65,0.05)_1px,transparent_1px)] bg-[size:100%_24px]"></div>
                                    <div className="space-y-2 opacity-80">
                                        <p>&gt; <span className="text-white">init_sequence()</span></p>
                                        <p className="pl-4 text-cyber-green/60">loading modules... [OK]</p>
                                        <p className="pl-4 text-cyber-green/60">connecting to neural link... [OK]</p>
                                        <p>&gt; <span className="text-white">analyze_workflow(current_user)</span></p>
                                        <p className="pl-4 text-yellow-400">&gt;&gt; WARNING: inefficiencies detected</p>
                                        <p className="pl-4 text-yellow-400">&gt;&gt; automation_opportunity: 84%</p>
                                        <p>&gt; <span className="text-white">deploy_solution --force</span></p>
                                        <p className="pl-4 animate-pulse">executing script...</p>
                                        <div className="mt-4 border border-cyber-green/40 p-2 inline-block bg-cyber-green/10 rounded">
                                            Result: <span className="font-bold text-white">Productivity 10x</span>
                                        </div>
                                    </div>

                                    {/* Success Badge */}
                                    <div className="absolute bottom-10 right-10 bg-cyber-green text-black px-6 py-4 rounded font-bold shadow-[0_0_20px_rgba(0,255,65,0.4)] animate-bounce">
                                        JOB COMPLETE ✅
                                    </div>
                                </div>
                            </div>

                            {/* Floating "Controller" Elements */}
                            <div className="absolute top-[20%] -right-10 w-48 bg-black/80 border border-cyber-gold/50 rounded p-4 shadow-xl backdrop-blur-md animate-pulse">
                                <div className="text-cyber-gold text-xs font-bold mb-2">⚠ SKILL GAP DETECTED</div>
                                <div className="h-1 bg-gray-800 rounded full overflow-hidden">
                                    <div className="h-full bg-cyber-gold w-3/4"></div>
                                </div>
                                <div className="text-right text-[10px] text-gray-400 mt-1">FILLING... 75%</div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default HeroSection;
