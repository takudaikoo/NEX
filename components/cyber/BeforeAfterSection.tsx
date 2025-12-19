"use client";

import React from 'react';
import { ArrowRight, Clock, Battery, BatteryCharging } from 'lucide-react';

const BeforeAfterSection: React.FC = () => {
    return (
        <section className="py-24 px-6 bg-cyber-midnight text-white border-t border-white/5">
            <div className="container mx-auto max-w-6xl">
                <div className="mb-16">
                    <span className="text-cyber-gold font-mono text-sm tracking-widest uppercase">Case Study</span>
                    <h2 className="text-3xl md:text-4xl font-bold font-noto-sans mt-2">
                        「技術」を手に入れた、<br />
                        ある企画職（31歳）の物語。
                    </h2>
                </div>

                <div className="grid md:grid-cols-[1fr_auto_1fr] gap-8 items-center">

                    {/* Before */}
                    <div className="bg-[#11162d] p-8 rounded-2xl border border-white/5 relative group">
                        <div className="absolute top-4 right-4 bg-gray-700 text-xs px-2 py-1 rounded text-white/50">Before</div>
                        <div className="flex flex-col items-center text-center mb-6 opacity-60 group-hover:opacity-100 transition-opacity">
                            {/* Visual: Tired Face / Dark Office */}
                            <div className="w-24 h-24 bg-gray-800 rounded-full mb-4 flex items-center justify-center text-4xl grayscale">
                                😓
                            </div>
                            <h3 className="text-xl font-bold">資料作成に追われる日々</h3>
                        </div>
                        <ul className="space-y-4 text-sm text-gray-400">
                            <li className="flex items-center gap-2">
                                <Clock size={16} /> 毎日22時退社、残業月60時間
                            </li>
                            <li className="flex items-center gap-2">
                                <Battery size={16} /> 休日は寝て終わるだけ
                            </li>
                            <li className="flex items-center gap-2">
                                <span className="text-lg">📉</span> 「このままじゃジリ貧」という焦り
                            </li>
                        </ul>
                    </div>

                    {/* Arrow */}
                    <div className="flex flex-col items-center justify-center text-cyber-gold gap-2">
                        <div className="w-px h-12 bg-gradient-to-b from-transparent to-cyber-gold/50"></div>
                        <ArrowRight size={32} className="animate-pulse" />
                        <div className="w-px h-12 bg-gradient-to-t from-transparent to-cyber-gold/50"></div>
                    </div>

                    {/* After */}
                    <div className="bg-[#1a1f3d] p-8 rounded-2xl border border-cyber-gold/30 shadow-[0_0_30px_rgba(255,215,0,0.1)] relative group">
                        <div className="absolute top-4 right-4 bg-cyber-gold text-cyber-midnight text-xs font-bold px-2 py-1 rounded">After</div>
                        <div className="flex flex-col items-center text-center mb-6">
                            {/* Visual: Bright Face / Cafe */}
                            <div className="w-24 h-24 bg-gradient-to-br from-cyber-gold to-orange-400 rounded-full mb-4 flex items-center justify-center text-4xl shadow-lg">
                                😎
                            </div>
                            <h3 className="text-xl font-bold text-white">AI活用で業務を自動化</h3>
                        </div>
                        <ul className="space-y-4 text-sm text-white">
                            <li className="flex items-center gap-2">
                                <Clock size={16} className="text-cyber-green" /> <b className="text-cyber-gold">作業時間が1/3</b>に短縮！
                            </li>
                            <li className="flex items-center gap-2">
                                <BatteryCharging size={16} className="text-cyber-green" /> 空いた時間で新規PJに参画
                            </li>
                            <li className="flex items-center gap-2">
                                <span className="text-lg">🚀</span> 自信を取り戻し、プライベートも充実
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Impact Statement */}
                <div className="mt-16 text-center">
                    <p className="text-xl text-white/80 font-light">
                        これは魔法ではありません。<br />
                        正しいツールと、正しい使い方を知れば、<br />
                        <span className="text-cyber-gold font-bold">誰にでも起こせる変化です。</span>
                    </p>
                </div>
            </div>
        </section>
    );
};

export default BeforeAfterSection;
