"use client";

import React from 'react';
import Link from 'next/link';
import { ArrowDown, Code2, Database, Zap, MessageSquare } from 'lucide-react';

const WorksSection: React.FC = () => {
    return (
        <section className="py-24 px-6 bg-tech-navy relative">
            <div className="container mx-auto max-w-6xl">
                <div className="mb-16 text-center lg:text-left">
                    <h2 className="text-3xl font-bold font-noto-sans text-white mb-4">Case Study</h2>
                    <p className="text-white/60">実際の構築事例</p>
                </div>

                <div className="space-y-16">
                    {/* Case 01 */}
                    <div className="bg-white/5 border border-white/10 rounded-3xl p-8 lg:p-12">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                            {/* Visual / Demo Placeholder */}
                            <div className="relative h-[300px] lg:h-[360px] bg-black rounded-2xl border border-white/10 overflow-hidden group">
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <Zap className="text-white/10 w-24 h-24" />
                                </div>
                                <div className="absolute bottom-4 left-4 bg-black/60 px-3 py-1 rounded text-white/50 text-xs border border-white/5">
                                    Dashboard Demo
                                </div>
                            </div>

                            {/* Content */}
                            <div className="space-y-8">
                                <div>
                                    <div className="inline-block px-3 py-1 bg-tech-cyan/10 text-tech-cyan rounded-full text-xs font-bold tracking-wider uppercase mb-4">
                                        Case 01
                                    </div>
                                    <h3 className="text-2xl font-bold text-white mb-6">管理ダッシュボード・Webシステム</h3>

                                    <div className="space-y-4">
                                        {/* Before */}
                                        <div className="flex items-start gap-4 p-4 bg-white/5 rounded-xl border border-white/5">
                                            <div className="text-red-400 font-bold text-sm pt-1">Before</div>
                                            <div className="text-white/70">
                                                スクラッチ開発の見積もりが<br />
                                                <span className="font-bold text-white">500万円・納期2ヶ月</span> で断念
                                            </div>
                                        </div>

                                        <div className="flex justify-center -my-2 relative z-10">
                                            <div className="bg-tech-navy p-1 rounded-full border border-white/10 text-tech-cyan">
                                                <ArrowDown size={16} />
                                            </div>
                                        </div>

                                        {/* After */}
                                        <div className="flex items-start gap-4 p-4 bg-tech-cyan/10 rounded-xl border border-tech-cyan/30">
                                            <div className="text-tech-cyan font-bold text-sm pt-1">After</div>
                                            <div className="text-white">
                                                最新スタックの活用で<br />
                                                <span className="font-bold text-tech-cyan text-lg">数値可視化まで 3日で実装</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex items-center gap-2 text-sm text-white/40 font-mono border-t border-white/10 pt-6">
                                    <Database size={14} />
                                    <span>Javascript / Google Cloud</span>
                                </div>
                            </div>

                        </div>
                    </div>

                    {/* Case 02 */}
                    <div className="bg-white/5 border border-white/10 rounded-3xl p-8 lg:p-12">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                            {/* Content */}
                            <div className="space-y-8 order-2 lg:order-1">
                                <div>
                                    <div className="inline-block px-3 py-1 bg-tech-cyan/10 text-tech-cyan rounded-full text-xs font-bold tracking-wider uppercase mb-4">
                                        Case 02
                                    </div>
                                    <h3 className="text-2xl font-bold text-white mb-6">ECサイト・決済基盤の実装</h3>

                                    <div className="space-y-4">
                                        {/* Before */}
                                        <div className="flex items-start gap-4 p-4 bg-white/5 rounded-xl border border-white/5">
                                            <div className="text-red-400 font-bold text-sm pt-1">Before</div>
                                            <div className="text-white/70">
                                                外注見積もり<br />
                                                <span className="font-bold text-white">300万円・納期3ヶ月</span> と言われた
                                            </div>
                                        </div>

                                        <div className="flex justify-center -my-2 relative z-10">
                                            <div className="bg-tech-navy p-1 rounded-full border border-white/10 text-tech-cyan">
                                                <ArrowDown size={16} />
                                            </div>
                                        </div>

                                        {/* After */}
                                        <div className="flex items-start gap-4 p-4 bg-tech-cyan/10 rounded-xl border border-tech-cyan/30">
                                            <div className="text-tech-cyan font-bold text-sm pt-1">After</div>
                                            <div className="text-white">
                                                Shopifyの活用により<br />
                                                <span className="font-bold text-tech-cyan text-lg">制作費 10万円・納期1週間</span> でローンチ
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex items-center gap-2 text-sm text-white/40 font-mono border-t border-white/10 pt-6">
                                    <Database size={14} />
                                    <span>Commerce Platform / Payment API</span>
                                </div>
                            </div>

                            {/* Visual / Demo Placeholder */}
                            <div className="relative h-[300px] lg:h-[360px] bg-black rounded-2xl border border-white/10 overflow-hidden group order-1 lg:order-2">
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <Zap className="text-white/10 w-24 h-24" />
                                </div>
                                <div className="absolute bottom-4 left-4 bg-black/60 px-3 py-1 rounded text-white/50 text-xs border border-white/5">
                                    EC / Store Demo
                                </div>
                            </div>

                        </div>
                    </div>

                    {/* Disclaimer / Note */}
                    <div className="text-center text-white/40 text-sm mt-12">
                        ※ 上記は一例です。課題に合わせて最適な組み合わせを提案します。
                    </div>

                    {/* CTA Button */}
                    <div className="flex justify-center mt-12">
                        <Link
                            href="/flow/consultation"
                            className="inline-flex items-center justify-center px-12 py-5 bg-white/5 text-white rounded-full font-bold text-lg hover:bg-white/10 border border-tech-cyan/30 hover:border-tech-cyan hover:shadow-[0_0_30px_rgba(0,243,255,0.2)] transition-all duration-300 gap-3"
                        >
                            無料相談はこちら
                            <MessageSquare size={20} />
                        </Link>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default WorksSection;
