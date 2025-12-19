"use client";

import React from 'react';
import { X, Check, ShieldAlert, MonitorPlay, Users } from 'lucide-react';

const ComparisonSection: React.FC = () => {
    return (
        <section className="py-24 px-6 bg-[#0B1026] text-white">
            <div className="container mx-auto max-w-6xl">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold font-noto-sans mb-4">
                        なぜ、他では<span className="text-cyber-vermilion">「現場レベル」</span>に<br className="md:hidden" />到達できないのか？
                    </h2>
                    <p className="text-white/60">既存の学習方法には、決定的な欠陥があります。</p>
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                    {/* 1. Big School */}
                    <div className="bg-[#11162d] border border-white/5 rounded-2xl p-8 relative opacity-70 hover:opacity-100 transition-opacity">
                        <div className="flex justify-center mb-6 text-gray-400">
                            <Users size={48} />
                        </div>
                        <h3 className="text-xl font-bold text-center mb-2">大手プログラミングスクール</h3>
                        <p className="text-center text-xs text-gray-400 mb-8">相場：30〜80万円</p>

                        <ul className="space-y-4">
                            <li className="flex items-start gap-3 text-sm text-gray-400">
                                <X size={16} className="text-red-500 mt-0.5 shrink-0" />
                                <span>カリキュラムが一般的すぎて、自分の実務に応用できない。</span>
                            </li>
                            <li className="flex items-start gap-3 text-sm text-gray-400">
                                <X size={16} className="text-red-500 mt-0.5 shrink-0" />
                                <span>講師が実務経験の浅い卒業生アルバイトの場合が多い。</span>
                            </li>
                            <li className="flex items-start gap-3 text-sm text-gray-400">
                                <X size={16} className="text-red-500 mt-0.5 shrink-0" />
                                <span>卒業後の「自走力」が身につきにくい。</span>
                            </li>
                        </ul>
                    </div>

                    {/* 2. Self Study */}
                    <div className="bg-[#11162d] border border-white/5 rounded-2xl p-8 relative opacity-70 hover:opacity-100 transition-opacity">
                        <div className="flex justify-center mb-6 text-gray-400">
                            <MonitorPlay size={48} />
                        </div>
                        <h3 className="text-xl font-bold text-center mb-2">独学・動画教材</h3>
                        <p className="text-center text-xs text-gray-400 mb-8">相場：月額 数千円</p>

                        <ul className="space-y-4">
                            <li className="flex items-start gap-3 text-sm text-gray-400">
                                <X size={16} className="text-red-500 mt-0.5 shrink-0" />
                                <span>エラーが出た瞬間に思考停止。何時間も無駄にする。</span>
                            </li>
                            <li className="flex items-start gap-3 text-sm text-gray-400">
                                <X size={16} className="text-red-500 mt-0.5 shrink-0" />
                                <span>「何を学べばいいか」の選定自体が初心者には難しい。</span>
                            </li>
                            <li className="flex items-start gap-3 text-sm text-gray-400">
                                <X size={16} className="text-red-500 mt-0.5 shrink-0" />
                                <span>モチベーション維持が困難で、挫折率が圧倒的に高い。</span>
                            </li>
                        </ul>
                    </div>

                    {/* 3. The Controller (Our Service) */}
                    <div className="bg-[#1a1f3d] border-2 border-cyber-gold/50 rounded-2xl p-8 relative transform md:-translate-y-4 shadow-[0_0_30px_rgba(255,215,0,0.1)]">
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-cyber-gold text-cyber-midnight font-bold px-4 py-1 rounded-full text-xs tracking-widest uppercase box-shadow-lg">
                            Recommended
                        </div>
                        <div className="flex justify-center mb-6 text-cyber-gold">
                            <ShieldAlert size={48} />{/* Using ShieldAlert as 'Co-Pilot' icon placeholder */}
                        </div>
                        <h3 className="text-xl font-bold text-center mb-2 text-white">Co-Pilot ハンズオン</h3>
                        <p className="text-center text-xs text-cyber-gold mb-8">単発利用・都度払いOK</p>

                        <ul className="space-y-4">
                            <li className="flex items-start gap-3 text-sm font-bold text-white">
                                <Check size={16} className="text-cyber-green mt-0.5 shrink-0" />
                                <span><span className="text-cyber-gold">あなたの実データ</span>を使って開発。だから明日から使える。</span>
                            </li>
                            <li className="flex items-start gap-3 text-sm font-bold text-white">
                                <Check size={16} className="text-cyber-green mt-0.5 shrink-0" />
                                <span>現役エンジニアが「副操縦士」として、エラー特定を即座にサポート。</span>
                            </li>
                            <li className="flex items-start gap-3 text-sm font-bold text-white">
                                <Check size={16} className="text-cyber-green mt-0.5 shrink-0" />
                                <span>無駄なカリキュラムなし。「今必要なこと」だけを最短で習得。</span>
                            </li>
                        </ul>

                        <div className="mt-8 pt-6 border-t border-white/10 text-center">
                            <p className="text-xs text-white/50 mb-2">圧倒的な効率とコストパフォーマンス</p>
                            <div className="text-2xl font-bold text-cyber-gold">実戦解決率 9X%</div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default ComparisonSection;
