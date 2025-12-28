"use client";

import React from 'react';
import Link from 'next/link';
import { ArrowRight, CheckCircle2, PlayCircle } from 'lucide-react';

const HeroSection: React.FC = () => {
    return (
        <section className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden pt-20 pb-12 bg-tech-navy">
            <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

                {/* Left: Copy & Metrics */}
                <div className="order-2 lg:order-1 space-y-8 text-center lg:text-left">
                    {/* H1 */}
                    <div className="space-y-4">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-noto-sans leading-tight text-white mb-6">
                            最短1週間で<br />
                            業務に使える<br />
                            <span className="text-tech-cyan">プロトタイプ</span>を実装
                        </h1>
                        {/* H2 */}
                        <p className="text-lg md:text-xl text-white/70 leading-relaxed font-light">
                            中小企業・スタートアップ向け。<br />
                            既存AI・ノーコードを組み合わせ、<br className="lg:hidden" />
                            低コストで業務改善を実現します。
                        </p>
                    </div>

                    {/* Metrics */}
                    <div className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-sm">
                        <ul className="space-y-4">
                            <li className="flex items-center justify-between text-white">
                                <span className="opacity-70">開発期間</span>
                                <div className="text-xl font-bold">
                                    <span className="opacity-40 line-through text-sm mr-2">3ヶ月</span>
                                    <span className="text-tech-cyan text-2xl">→ 1週間</span>
                                </div>
                            </li>
                            <li className="flex items-center justify-between text-white border-t border-white/10 pt-4">
                                <span className="opacity-70">コスト</span>
                                <div className="text-xl font-bold">
                                    <span className="opacity-40 line-through text-sm mr-2">数百万円</span>
                                    <span className="text-tech-cyan text-2xl">→ 5万円〜</span>
                                </div>
                            </li>
                            <li className="flex items-center justify-between text-white border-t border-white/10 pt-4">
                                <span className="opacity-70">内製化率</span>
                                <div className="text-xl font-bold">
                                    <span className="text-tech-green text-2xl">80%以上</span>
                                </div>
                            </li>
                        </ul>
                    </div>

                    {/* CTA (Mobile: Visible here, Desktop: Visible here) - Order handled by flex-col on mobile */}
                    <div className="pt-4">
                        <Link href="/flow/demo" className="w-full lg:w-auto px-8 py-4 bg-tech-cyan text-tech-navy rounded-full font-bold text-lg hover:bg-white hover:shadow-[0_0_30px_rgba(0,243,255,0.4)] transition-all duration-300 flex items-center justify-center gap-2 group shadow-lg shadow-tech-cyan/20">
                            無料相談を予約する
                            <ArrowRight className="group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </div>
                </div>

                {/* Right: Demo PV */}
                <div className="order-1 lg:order-2">
                    <div className="relative w-full aspect-video bg-black rounded-xl border-2 border-white/10 overflow-hidden shadow-2xl group">
                        {/* Placeholder for Video - In production, use <video> tag */}
                        <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-black flex items-center justify-center">
                            <div className="text-center">
                                <PlayCircle size={64} className="text-white/20 mx-auto mb-4" />
                                <p className="text-white/30 font-mono text-sm">DEMO VIDEO PLACEHOLDER</p>
                                <p className="text-tech-cyan/50 text-xs mt-2">Loop / Muted / Autoplay</p>
                            </div>
                        </div>

                        {/* Overlay Text */}
                        <div className="absolute bottom-4 right-4 bg-black/60 backdrop-blur-md px-3 py-1 rounded text-xs text-white/70 border border-white/10">
                            ※ 実案件で開発した業務プロトタイプの一例
                        </div>
                    </div>
                    {/* Visible on Mobile mainly but kept close to video */}
                    <p className="text-center text-white/30 text-xs mt-3">
                        入力 → 処理 → 出力が一目で分かる構成
                    </p>
                </div>

            </div>
        </section>
    );
};

export default HeroSection;
