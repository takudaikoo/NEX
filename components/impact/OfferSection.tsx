"use client";

import React from 'react';
import { Ticket, Clock, CheckCircle } from 'lucide-react';

const OfferSection: React.FC = () => {
    return (
        <section className="py-24 px-6 bg-[#050505] relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-tech-cyan/5 rounded-full blur-[100px]"></div>

            <div className="container mx-auto max-w-4xl relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold font-noto-sans text-white mb-4">
                        継続不要。1回完結の「動作ドック」。
                    </h2>
                    <p className="text-white/60">売り込みも、継続勧誘もありません。</p>
                </div>

                {/* Ticket Card */}
                <div className="relative bg-white/5 border border-white/10 rounded-3xl overflow-hidden backdrop-blur-md max-w-3xl mx-auto">
                    {/* Decorative Cutouts */}
                    <div className="absolute top-1/2 -left-3 w-6 h-6 bg-[#050505] rounded-full"></div>
                    <div className="absolute top-1/2 -right-3 w-6 h-6 bg-[#050505] rounded-full"></div>
                    <div className="absolute top-1/2 left-4 right-4 h-px bg-white/10 border-t border-dashed border-white/20"></div>

                    <div className="grid md:grid-cols-[2fr_1fr] h-full">
                        {/* Left Side: Details */}
                        <div className="p-8 md:p-12 flex flex-col justify-center space-y-6">
                            <div className="flex items-center gap-3 text-tech-cyan/80 font-mono text-sm tracking-widest uppercase">
                                <Ticket size={16} />
                                One Time Ticket
                            </div>
                            <div>
                                <h3 className="text-3xl font-bold text-white mb-2">ONLINE MOTION AUDIT</h3>
                                <p className="text-white/60">オンライン動作解析 60分</p>
                            </div>
                            <div className="flex flex-wrap gap-4">
                                <span className="inline-flex items-center gap-2 px-3 py-1 rounded bg-white/5 border border-white/10 text-xs text-white/70">
                                    <Clock size={12} /> 60 min
                                </span>
                                <span className="inline-flex items-center gap-2 px-3 py-1 rounded bg-white/5 border border-white/10 text-xs text-white/70">
                                    <CheckCircle size={12} /> スマホ動画でOK
                                </span>
                            </div>
                        </div>

                        {/* Right Side: Price */}
                        <div className="bg-tech-cyan/10 p-8 md:p-12 flex flex-col justify-center items-center text-center border-l border-white/10">
                            <div className="text-gray-400 line-through text-sm mb-2">通常 12,000円</div>
                            <div className="text-4xl font-bold text-tech-cyan font-mono mb-2">¥8,000</div>
                            <div className="text-xs text-tech-cyan/60 uppercase tracking-widest">(TAX IN)</div>
                        </div>
                    </div>
                </div>

                <div className="mt-12 text-center">
                    <button className="group relative px-8 py-4 bg-transparent border border-tech-cyan text-tech-cyan font-bold text-sm tracking-widest uppercase overflow-hidden transition-all hover:bg-tech-cyan hover:text-black">
                        <span className="relative z-10 flex items-center justify-center gap-3">
                            いますぐ解析を予約する
                        </span>
                        <div className="absolute inset-0 bg-tech-cyan/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    </button>
                    <p className="mt-4 text-xs text-white/40">面倒な機材は不要。いつもの練習動画を送るだけ。</p>
                </div>
            </div>
        </section>
    );
};

export default OfferSection;
