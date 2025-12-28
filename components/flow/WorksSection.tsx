"use client";

import React from 'react';
import Image from 'next/image';
import { ArrowDown, Code2, Database, Zap } from 'lucide-react';

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
                                    Automation Demo
                                </div>
                            </div>

                            {/* Content */}
                            <div className="space-y-8">
                                <div>
                                    <div className="inline-block px-3 py-1 bg-tech-cyan/10 text-tech-cyan rounded-full text-xs font-bold tracking-wider uppercase mb-4">
                                        Case 01
                                    </div>
                                    <h3 className="text-2xl font-bold text-white mb-6">契約・決済オートメーション</h3>

                                    <div className="space-y-4">
                                        {/* Before */}
                                        <div className="flex items-start gap-4 p-4 bg-white/5 rounded-xl border border-white/5">
                                            <div className="text-red-400 font-bold text-sm pt-1">Before</div>
                                            <div className="text-white/70">
                                                契約書作成・送付・入金確認に<br />
                                                <span className="font-bold text-white">毎日 2時間</span> かかっていた
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
                                                AIと自動化により<br />
                                                <span className="font-bold text-tech-cyan text-lg">作業時間 0分</span> (完全自動化)
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex items-center gap-2 text-sm text-white/40 font-mono border-t border-white/10 pt-6">
                                    <Code2 size={14} />
                                    <span>Stripe / Airtable / Zapier</span>
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
                                    <h3 className="text-2xl font-bold text-white mb-6">顧客対応・FAQボット</h3>

                                    <div className="space-y-4">
                                        {/* Before */}
                                        <div className="flex items-start gap-4 p-4 bg-white/5 rounded-xl border border-white/5">
                                            <div className="text-red-400 font-bold text-sm pt-1">Before</div>
                                            <div className="text-white/70">
                                                同じような質問への回答作成に<br />
                                                <span className="font-bold text-white">月間 30時間</span> 費やしていた
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
                                                AIボットの導入により<br />
                                                <span className="font-bold text-tech-cyan text-lg">対応工数 90% 削減</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex items-center gap-2 text-sm text-white/40 font-mono border-t border-white/10 pt-6">
                                    <Database size={14} />
                                    <span>Dify / Notion API / LINE</span>
                                </div>
                            </div>

                            {/* Visual / Demo Placeholder */}
                            <div className="relative h-[300px] lg:h-[360px] bg-black rounded-2xl border border-white/10 overflow-hidden group order-1 lg:order-2">
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <Zap className="text-white/10 w-24 h-24" />
                                </div>
                                <div className="absolute bottom-4 left-4 bg-black/60 px-3 py-1 rounded text-white/50 text-xs border border-white/5">
                                    Chatbot Demo
                                </div>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default WorksSection;
