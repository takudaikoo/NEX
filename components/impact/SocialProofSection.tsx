"use client";

import React from 'react';
import { Star } from 'lucide-react';
import Link from 'next/link';

const SocialProofSection: React.FC = () => {
    return (
        <section className="py-24 px-6 bg-gray-50 border-t border-gray-200">
            <div className="container mx-auto max-w-6xl">
                <div className="text-center mb-16">
                    <div className="text-impact-red text-sm tracking-widest uppercase mb-2">Social Proof</div>
                    <h2 className="text-3xl font-bold font-noto-sans text-gray-900 mb-4">
                        Sensory to Logical.<br />
                        （感覚から、論理へ。）
                    </h2>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                    {/* Review 1 */}
                    <div className="bg-white p-8 md:p-10 border border-impact-red/10 rounded-2xl relative shadow-lg shadow-impact-red/5 hover:shadow-xl hover:shadow-impact-red/10 transition-all duration-300">
                        <div className="flex gap-1 text-impact-red mb-4">
                            {[1, 2, 3, 4, 5].map((i) => <Star key={i} size={16} fill="currentColor" />)}
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-4">「エンジニアの私に最適な指導でした」</h3>
                        <p className="text-gray-600 leading-relaxed mb-6 font-light">
                            感覚的な言葉で指導されるのが苦手でしたが、ここは全て理屈で説明してくれるので納得感が違います。「なんとなく」で練習していた10年を取り戻したいです。
                        </p>
                        <div className="flex items-center gap-4">
                            <div className="w-10 h-10 bg-gray-200 rounded-full"></div>
                            <div className="text-sm">
                                <span className="block text-gray-900 font-bold">30代・男性</span>
                                <span className="block text-white/40">ITエンジニア</span>
                            </div>
                        </div>
                    </div>

                    {/* Review 2 */}
                    <div className="bg-white p-8 md:p-10 border border-impact-red/10 rounded-2xl relative shadow-lg shadow-impact-red/5 hover:shadow-xl hover:shadow-impact-red/10 transition-all duration-300">
                        <div className="flex gap-1 text-impact-red mb-4">
                            {[1, 2, 3, 4, 5].map((i) => <Star key={i} size={16} fill="currentColor" />)}
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-4">「1回で解決策が見つかりました」</h3>
                        <p className="text-gray-600 leading-relaxed mb-6 font-light">
                            ずっと悩んでいた股関節の詰まりが、解析の直後に解消されて驚きました。「使い方が間違っていただけ」という事実に救われました。
                        </p>
                        <div className="flex items-center gap-4">
                            <div className="w-10 h-10 bg-gray-200 rounded-full"></div>
                            <div className="text-sm">
                                <span className="block text-gray-900 font-bold">陸上競技者</span>
                                <span className="block text-white/40">大学生</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Mid CTA */}
                <div className="mt-16 text-center">
                    <Link href="/impact/application" className="group relative px-8 py-4 bg-transparent border border-impact-red/50 text-impact-red font-bold text-sm tracking-widest uppercase overflow-hidden transition-all hover:bg-impact-red hover:text-white inline-block">
                        今月の解析枠を確認する ＞
                    </Link>
                    <p className="text-xs text-gray-400 mt-2">（残りわずか）</p>
                </div>
            </div>
        </section>
    );
};

export default SocialProofSection;
