"use client";

import React from 'react';
import Link from 'next/link';
import { Monitor, Zap, Droplets, ArrowRight } from 'lucide-react';

interface Props {
    setHoverState: (state: 'cyber' | 'impact' | 'flow' | null) => void;
}

export default function BrandServices({ setHoverState }: Props) {
    return (
        <section id="brand-services" className="relative w-full py-24 pb-48 z-10 px-4 md:px-8">
            <h2 className="text-xl md:text-2xl font-bold font-sans text-center text-white mb-16 tracking-widest uppercase opacity-70">
                OUR DOMAINS
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl mx-auto h-auto md:h-[600px]">

                {/* Flow */}
                <Link
                    href="/flow"
                    className="group relative border border-white/10 rounded-3xl bg-black/40 backdrop-blur-md overflow-hidden flex flex-col justify-end p-8 md:p-12 transition-all duration-500 hover:border-flow-blue hover:shadow-[0_0_50px_rgba(0,162,255,0.2)]"
                    onMouseEnter={() => setHoverState('flow')}
                    onMouseLeave={() => setHoverState(null)}
                >
                    <div className="absolute inset-0 bg-gradient-to-t from-flow-deep/80 to-transparent opacity-60 group-hover:opacity-100 transition-opacity" />

                    <div className="relative z-10 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                        <div className="w-16 h-16 rounded-2xl bg-flow-blue/20 flex items-center justify-center text-flow-blue mb-6">
                            <Droplets size={32} />
                        </div>
                        <div className="flex items-center gap-3 mb-2 font-mono text-flow-blue text-sm tracking-wider">
                            <span>01</span>
                            <span className="w-8 h-[1px] bg-flow-blue"></span>
                            <span>AI × BUSINESS</span>
                        </div>
                        <h3 className="text-4xl font-bold text-white mb-4">Flow</h3>
                        <p className="text-white/60 mb-8 min-h-[3rem]">
                            アイデアや課題を、<br />最短距離で“使える形”にする。
                        </p>
                        <div className="inline-flex items-center gap-2 text-white font-bold group-hover:text-flow-blue transition-colors">
                            Flowを見る <ArrowRight size={18} />
                        </div>
                    </div>
                </Link>

                {/* Cyber */}
                <Link
                    href="/cyber"
                    className="group relative border border-white/10 rounded-3xl bg-black/40 backdrop-blur-md overflow-hidden flex flex-col justify-end p-8 md:p-12 transition-all duration-500 hover:border-cyber-green hover:shadow-[0_0_50px_rgba(0,255,65,0.2)]"
                    onMouseEnter={() => setHoverState('cyber')}
                    onMouseLeave={() => setHoverState(null)}
                >
                    <div className="absolute inset-0 bg-gradient-to-t from-cyber-dark/80 to-transparent opacity-60 group-hover:opacity-100 transition-opacity" />

                    <div className="relative z-10 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                        <div className="w-16 h-16 rounded-2xl bg-cyber-green/20 flex items-center justify-center text-cyber-green mb-6">
                            <Monitor size={32} />
                        </div>
                        <div className="flex items-center gap-3 mb-2 font-mono text-cyber-green text-sm tracking-wider">
                            <span>02</span>
                            <span className="w-8 h-[1px] bg-cyber-green"></span>
                            <span>AI × EDUCATION</span>
                        </div>
                        <h3 className="text-4xl font-bold text-white mb-4">Cyber</h3>
                        <p className="text-white/60 mb-8 min-h-[3rem]">
                            AIを学ぶのではなく、<br />使いこなせる状態をつくる。
                        </p>
                        <div className="inline-flex items-center gap-2 text-white font-bold group-hover:text-cyber-green transition-colors">
                            Cyberを見る <ArrowRight size={18} />
                        </div>
                    </div>
                </Link>

                {/* Impact */}
                <Link
                    href="/impact"
                    className="group relative border border-white/10 rounded-3xl bg-black/40 backdrop-blur-md overflow-hidden flex flex-col justify-end p-8 md:p-12 transition-all duration-500 hover:border-impact-red hover:shadow-[0_0_50px_rgba(255,46,46,0.2)]"
                    onMouseEnter={() => setHoverState('impact')}
                    onMouseLeave={() => setHoverState(null)}
                >
                    <div className="absolute inset-0 bg-gradient-to-t from-impact-black/80 to-transparent opacity-60 group-hover:opacity-100 transition-opacity" />

                    <div className="relative z-10 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                        <div className="w-16 h-16 rounded-2xl bg-impact-red/20 flex items-center justify-center text-impact-red mb-6">
                            <Zap size={32} />
                        </div>
                        <div className="flex items-center gap-3 mb-2 font-mono text-impact-red text-sm tracking-wider">
                            <span>03</span>
                            <span className="w-8 h-[1px] bg-impact-red"></span>
                            <span>BODY × PERFORMANCE</span>
                        </div>
                        <h3 className="text-4xl font-bold text-white mb-4">Impact</h3>
                        <p className="text-white/60 mb-8 min-h-[3rem]">
                            感覚ではなく、<br />構造で身体を理解する。
                        </p>
                        <div className="inline-flex items-center gap-2 text-white font-bold group-hover:text-impact-red transition-colors">
                            Impactを見る <ArrowRight size={18} />
                        </div>
                    </div>
                </Link>

            </div>
        </section>
    );
}
