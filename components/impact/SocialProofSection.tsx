"use client";

import React from 'react';
import { Star } from 'lucide-react';

const SocialProofSection: React.FC = () => {
    return (
        <section className="py-24 px-6 bg-black border-t border-white/5">
            <div className="container mx-auto max-w-6xl">
                <div className="text-center mb-16">
                    <div className="text-tech-cyan text-sm tracking-widest uppercase mb-2">Social Proof</div>
                    <h2 className="text-3xl font-bold font-noto-sans text-white mb-4">
                        Sensory to Logical.<br />
                        （感覚から、論理へ。）
                    </h2>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                    {/* Review 1 */}
                    <div className="bg-[#0a0a0a] p-8 md:p-10 border border-white/10 rounded-2xl relative">
                        <div className="flex gap-1 text-tech-cyan mb-4">
                            {[1, 2, 3, 4, 5].map((i) => <Star key={i} size={16} fill="currentColor" />)}
                        </div>
                        <h3 className="text-xl font-bold text-white mb-4">「エンジニアの私に最適な指導でした」</h3>
                        <p className="text-white/60 leading-relaxed mb-6 font-light">
                            感覚的な言葉で指導されるのが苦手でしたが、ここは全て理屈で説明してくれるので納得感が違います。「なんとなく」で練習していた10年を取り戻したいです。
                        </p>
                        <div className="flex items-center gap-4">
                            <div className="w-10 h-10 bg-gray-800 rounded-full"></div>
                            <div className="text-sm">
                                <span className="block text-white font-bold">30代・男性</span>
                                <span className="block text-white/40">ITエンジニア</span>
                            </div>
                        </div>
                    </div>

                    {/* Review 2 */}
                    <div className="bg-[#0a0a0a] p-8 md:p-10 border border-white/10 rounded-2xl relative">
                        <div className="flex gap-1 text-tech-cyan mb-4">
                            {[1, 2, 3, 4, 5].map((i) => <Star key={i} size={16} fill="currentColor" />)}
                        </div>
                        <h3 className="text-xl font-bold text-white mb-4">「1回で解決策が見つかりました」</h3>
                        <p className="text-white/60 leading-relaxed mb-6 font-light">
                            ずっと悩んでいた股関節の詰まりが、解析の直後に解消されて驚きました。「使い方が間違っていただけ」という事実に救われました。
                        </p>
                        <div className="flex items-center gap-4">
                            <div className="w-10 h-10 bg-gray-800 rounded-full"></div>
                            <div className="text-sm">
                                <span className="block text-white font-bold">陸上競技者</span>
                                <span className="block text-white/40">大学生</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Mid CTA */}
                <div className="mt-16 text-center">
                    <button className="group relative px-8 py-4 bg-transparent border border-tech-cyan/50 text-white font-bold text-sm tracking-widest uppercase overflow-hidden transition-all hover:bg-tech-cyan hover:text-black">
                        今月の解析枠を確認する ＞
                    </button>
                    <p className="text-xs text-white/30 mt-2">（残りわずか）</p>
                </div>
            </div>
        </section>
    );
};

export default SocialProofSection;
