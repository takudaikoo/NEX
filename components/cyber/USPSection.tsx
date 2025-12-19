"use client";

import React from 'react';
import { Brain, Flame, Wallet, ArrowRight } from 'lucide-react';

const USPSection: React.FC = () => {
    return (
        <section className="py-24 px-6 bg-white text-cyber-midnight">
            <div className="container mx-auto max-w-6xl">
                <div className="text-center mb-20">
                    <span className="text-cyber-vermilion font-bold tracking-widest uppercase text-sm">Why We Are Different</span>
                    <h2 className="text-3xl md:text-5xl font-bold font-noto-sans mt-2">
                        「サイエンス（論理）」と<br />
                        「熱血（感情）」の融合。
                    </h2>
                </div>

                <div className="space-y-24">
                    {/* Reason 01: Science */}
                    <div className="grid md:grid-cols-2 gap-12 items-center group">
                        <div className="order-2 md:order-1 relative">
                            <div className="absolute -inset-4 bg-blue-100 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                            {/* Visual Placeholder: Brain/Chart */}
                            <div className="relative bg-gray-100 rounded-3xl aspect-[4/3] flex items-center justify-center overflow-hidden">
                                <Brain size={120} className="text-blue-500/20" />
                                <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(59,130,246,0.1)_50%,transparent_75%)] bg-[length:250%_250%] animate-shine"></div>
                            </div>
                        </div>
                        <div className="order-1 md:order-2">
                            <div className="inline-flex items-center gap-2 text-blue-600 font-bold mb-4">
                                <span className="text-5xl opacity-20 font-mono">01</span>
                                <span className="uppercase tracking-widest">Science</span>
                            </div>
                            <h3 className="text-2xl font-bold mb-4">脳科学に基づいた<br />「実戦」カリキュラム</h3>
                            <p className="text-gray-600 leading-relaxed mb-6">
                                人は「聞いたこと」の9割を忘れますが、「やったこと」は忘れません。<br />
                                座学を排除し、手を動かすことに特化したカリキュラムだから、スキルの定着率が段違いです。
                                「わかったつもり」を完全に排除します。
                            </p>
                        </div>
                    </div>

                    {/* Reason 02: Heat */}
                    <div className="grid md:grid-cols-2 gap-12 items-center group">
                        <div className="order-1">
                            <div className="inline-flex items-center gap-2 text-cyber-vermilion font-bold mb-4">
                                <span className="text-5xl opacity-20 font-mono">02</span>
                                <span className="uppercase tracking-widest">Heat</span>
                            </div>
                            <h3 className="text-2xl font-bold mb-4">絶対に見捨てない<br />「熱血」サポート</h3>
                            <p className="text-gray-600 leading-relaxed mb-6">
                                エラー1つで止まる時間はもう終わりです。<br />
                                あなたが「動いた！」と感動するその瞬間まで、私が隣で泥臭く付き合います。<br />
                                ビジネスライクな関係ではなく、共にゴールを目指す「相棒」として接します。
                            </p>
                        </div>
                        <div className="order-2 relative">
                            <div className="absolute -inset-4 bg-red-100 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                            {/* Visual Placeholder: Handshake/Burning Spirit */}
                            <div className="relative bg-gray-100 rounded-3xl aspect-[4/3] flex items-center justify-center overflow-hidden">
                                <Flame size={120} className="text-red-500/20" />
                            </div>
                        </div>
                    </div>

                    {/* Reason 03: Cost */}
                    <div className="grid md:grid-cols-2 gap-12 items-center group">
                        <div className="order-2 md:order-1 relative">
                            <div className="absolute -inset-4 bg-green-100 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                            {/* Visual Placeholder: Wallet/Unlock */}
                            <div className="relative bg-gray-100 rounded-3xl aspect-[4/3] flex items-center justify-center overflow-hidden">
                                <Wallet size={120} className="text-green-500/20" />
                            </div>
                        </div>
                        <div className="order-1 md:order-2">
                            <div className="inline-flex items-center gap-2 text-green-600 font-bold mb-4">
                                <span className="text-5xl opacity-20 font-mono">03</span>
                                <span className="uppercase tracking-widest">Cost</span>
                            </div>
                            <h3 className="text-2xl font-bold mb-4">縛りなし。<br />「単発」で利用できる身軽さ</h3>
                            <p className="text-gray-600 leading-relaxed mb-6">
                                高額なローン契約は不要です。<br />
                                必要な時に、必要な分だけ利用できるチケット制。<br />
                                あなたのペースで、無理なく最強の「武器」を増やしていけます。
                            </p>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default USPSection;
