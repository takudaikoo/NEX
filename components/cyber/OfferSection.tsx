"use client";

import React from 'react';
import { Ticket, Clock, ArrowRight } from 'lucide-react';

const OfferSection: React.FC = () => {
    return (
        <section className="py-24 px-6 bg-[#080808] relative overflow-hidden">
            {/* Gradient Background */}
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-cyber-midnight/80 to-black z-0"></div>

            <div className="container mx-auto max-w-4xl relative z-10">
                <div className="text-center mb-16">
                    <span className="inline-block px-4 py-1 border border-cyber-vermilion text-cyber-vermilion rounded-full text-xs font-bold tracking-widest uppercase mb-4 animate-pulse">
                        Launch Special
                    </span>
                    <h2 className="text-3xl md:text-4xl font-bold font-noto-sans text-white mb-4">
                        通常のご相談 <span className="line-through text-white/40">15,000円</span><br />
                        <span className="text-cyber-vermilion">【LP限定】体験ハンズオン（30分）：4,980円</span>
                    </h2>
                    <p className="text-white/60 text-sm">先着5名様限定。ただの相談ではありません。「実際に手を動かす」実戦体験です。</p>
                </div>

                {/* Ticket Card */}
                <div className="relative bg-white/5 border border-white/10 rounded-xl overflow-hidden backdrop-blur-md max-w-3xl mx-auto shadow-2xl">
                    {/* Decorative Cutouts */}
                    <div className="absolute top-1/2 -left-3 w-6 h-6 bg-[#080808] rounded-full border border-white/20"></div>
                    <div className="absolute top-1/2 -right-3 w-6 h-6 bg-[#080808] rounded-full border border-white/20"></div>
                    <div className="absolute top-1/2 left-4 right-4 h-px bg-white/10 border-t border-dashed border-white/20"></div>

                    <div className="grid md:grid-cols-[2fr_1fr] h-full">
                        {/* Left Side: Details */}
                        <div className="p-8 md:p-12 flex flex-col justify-center space-y-6">
                            <div className="flex items-center gap-3 text-cyber-gold font-mono text-sm tracking-widest uppercase">
                                <Ticket size={16} />
                                Co-Pilot Ticket
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold text-white mb-2">Hands-on Experience</h3>
                                <p className="text-white/60 uppercase tracking-widest text-xs">AI Development / 30min Session</p>
                            </div>
                            <div className="flex items-center gap-2 text-white/80">
                                <Clock size={16} className="text-cyber-vermilion" />
                                <span className="font-mono font-bold">30:00</span>
                                <span className="text-xs text-white/40 ml-2">Intensive Coding</span>
                            </div>
                        </div>

                        {/* Right Side: Price */}
                        <div className="bg-cyber-vermilion/90 p-8 md:p-12 flex flex-col justify-center items-center text-center text-white">
                            <div className="text-white/80 line-through text-sm mb-1">¥15,000</div>
                            <div className="text-4xl font-bold font-mono mb-2">¥4,980</div>
                            <div className="text-xs uppercase tracking-widest opacity-80">(TAX IN)</div>
                        </div>
                    </div>
                </div>

                {/* CTA */}
                <div className="mt-12 text-center">
                    <button className="group relative w-full md:w-auto px-12 py-5 bg-cyber-vermilion text-white font-bold text-lg rounded-full shadow-[0_10px_30px_rgba(227,66,52,0.3)] overflow-hidden transition-all hover:scale-105 hover:shadow-[0_20px_50px_rgba(227,66,52,0.5)]">
                        <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                        <span className="relative z-10 flex items-center justify-center gap-3">
                            体験セッションに申し込む
                            <ArrowRight size={20} />
                        </span>
                    </button>
                    <div className="mt-4 flex items-center justify-center gap-2 text-xs text-white/40">
                        <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                        無理な勧誘は一切ありません。あなたの可能性を診断します。
                    </div>
                </div>
            </div>
        </section>
    );
};

export default OfferSection;
