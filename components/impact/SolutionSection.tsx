"use client";

import React from 'react';
import { Terminal, Search } from 'lucide-react';

const SolutionSection: React.FC = () => {
    return (
        <section className="py-24 px-6 bg-gray-50 relative overflow-hidden">
            {/* Tech Grid Background */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.03)_1px,transparent_1px)] bg-[size:40px_40px]"></div>

            <div className="container mx-auto max-w-6xl relative z-10">
                <div className="grid md:grid-cols-2 gap-16 items-center">

                    <div>
                        <div className="flex items-center gap-3 text-impact-red mb-6">
                            <Terminal size={20} />
                            <span className="font-mono text-sm tracking-widest uppercase">Debugging</span>
                        </div>
                        <h2 className="text-4xl font-bold font-noto-sans text-gray-900 mb-8">
                            必要なのは、モチベーションではなく<br />
                            「デバッグ（修正）」です。
                        </h2>
                        <div className="space-y-6 text-gray-600 leading-relaxed">
                            <p>
                                当ラボ（Sports Mechanics Lab）は、あなたの動作を「物理学」の視点で解析します。感覚的なアドバイスは一切しません。
                            </p>
                            <div className="bg-impact-red/5 border-l-2 border-impact-red p-6 my-6 font-mono text-sm text-impact-red/90">
                                「股関節の伸展角が不足しているため、推進力の20%をロスしている」
                            </div>
                            <p>
                                このように、事実（ファクト）だけを提示します。<br />
                                そして、最新のAIツールを活用し、<b className="text-gray-900">「トレーナーがいなくても、自分でフォームを管理できる状態」</b>をインストールします。
                            </p>
                        </div>
                    </div>

                    {/* Visual: Analysis Tablet */}
                    <div className="relative">
                        <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-gray-200 group bg-white">
                            {/* Fake UI Header */}
                            <div className="bg-gray-100 p-4 flex items-center justify-between border-b border-gray-200">
                                <div className="flex gap-2">
                                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                                </div>
                                <div className="text-xs font-mono text-gray-400">audit_protocol_v2.exe</div>
                            </div>

                            {/* Main Content Area (Abstract Analysis) */}
                            <div className="aspect-[4/3] bg-white relative p-8">
                                {/* Grid Lines */}
                                <div className="absolute inset-0 border-t border-b border-gray-100 my-auto h-1/2"></div>
                                <div className="absolute inset-0 border-l border-r border-gray-100 mx-auto w-1/2"></div>

                                {/* Skeleton / Overlay Mockup */}
                                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-64 border-2 border-dashed border-impact-red/30 rounded-lg flex items-center justify-center">
                                    <Search className="text-impact-red animate-pulse" size={48} />
                                </div>

                                {/* Floating Metrics */}
                                <div className="absolute top-10 right-10 bg-white/90 backdrop-blur border border-impact-red/20 p-3 rounded font-mono text-xs text-impact-red shadow-lg">
                                    <div>VECTOR: +12.4%</div>
                                    <div>LOSS: 0.8%</div>
                                </div>
                            </div>
                        </div>

                        {/* Glow behind */}
                        <div className="absolute -inset-4 bg-impact-red/20 blur-[60px] -z-10"></div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default SolutionSection;
