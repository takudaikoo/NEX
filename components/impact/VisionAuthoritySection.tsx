"use client";

import React from 'react';
import { Microscope } from 'lucide-react';

const VisionAuthoritySection: React.FC = () => {
    return (
        <>
            {/* Vision Section */}
            <section className="py-24 px-6 bg-[#050505] relative overflow-hidden">
                <div className="container mx-auto max-w-4xl relative z-10">
                    <div className="flex flex-col md:flex-row gap-12 items-center">
                        <div className="flex-1">
                            <div className="text-tech-cyan text-sm tracking-widest uppercase mb-4">Vision</div>
                            <h2 className="text-3xl md:text-4xl font-noto-serif font-bold text-white mb-8 leading-relaxed">
                                身体のCEOは、<br />あなた自身だ。
                            </h2>
                            <div className="space-y-6 text-white/70 font-light leading-loose font-noto-sans">
                                <p>
                                    私は「トレーナー」として、あなたの隣でずっと伴走したいわけではありません。<br />
                                    私は<span className="text-white border-b border-white/20">「技術顧問」</span>でありたいのです。
                                </p>
                                <p>
                                    スポーツの世界では、指導者に依存しすぎた結果、自分で修正できなくなり、怪我で引退する選手を数多く見てきました。
                                </p>
                                <p>
                                    だからこそ、私はあなたに「魚」を与えるのではなく、「魚の釣り方（＝分析と修正のスキル）」を渡します。<br />
                                    自律した選手として、長く、怪我なく、スポーツを楽しんでもらうこと。<br />
                                    それが、物理学を学んだ私が提供できる最大の価値です。
                                </p>
                            </div>
                        </div>
                        {/* Portrait */}
                        <div className="flex-1 relative">
                            <div className="w-full aspect-[3/4] bg-gray-900 rounded-sm relative overflow-hidden grayscale contrast-125">
                                {/* Placeholder */}
                                <div className="absolute inset-0 flex items-center justify-center text-white/20">
                                    [ REPRESENTATIVE_PORTRAIT ]
                                </div>
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                                <div className="absolute bottom-4 left-4">
                                    <div className="text-white font-bold font-noto-serif">Chief Analyst</div>
                                </div>
                            </div>
                            {/* Decorative Frame */}
                            <div className="absolute -inset-4 border border-white/5 -z-10"></div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Authority Section */}
            <section className="py-24 px-6 bg-[#080808] border-t border-white/5 relative">
                <div className="absolute top-0 right-0 p-20 opacity-5 pointer-events-none">
                    <Microscope size={400} />
                </div>

                <div className="container mx-auto max-w-5xl">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-white mb-4">
                            指導者ではなく、「研究者」の視点で。<br />
                            物理法則と5,000件のデータが、私の師匠です。
                        </h2>
                    </div>

                    <div className="bg-[#050505] p-12 border border-white/10 relative overflow-hidden">
                        <div className="grid md:grid-cols-2 gap-12 relative z-10">
                            <div className="space-y-6 text-white/70 leading-relaxed text-sm">
                                <p>
                                    私はスポーツトレーナーの専門学校を出ていません。大学の研究室で「物理学」を専攻し、力学の法則を人体に応用することだけに没頭してきました。
                                </p>
                                <p>
                                    「教科書通りの綺麗なフォーム」ではなく、「物理的に効率の良い動き」だけを追求し続け、これまでに1,000名以上、5,000件を超える動作データを解析。
                                </p>
                                <p>
                                    資格という紙切れではなく、膨大な検証データに基づいたフィードバックをお約束します。
                                </p>
                            </div>
                            <div className="flex flex-col justify-center space-y-8 md:pl-12 md:border-l border-white/10">
                                <div>
                                    <div className="text-tech-cyan text-xs tracking-widest uppercase mb-1">Major</div>
                                    <div className="text-4xl font-bold text-white font-mono">Physics</div>
                                    <div className="text-white/40 text-xs">物理学専攻</div>
                                </div>
                                <div>
                                    <div className="text-tech-cyan text-xs tracking-widest uppercase mb-1">Database</div>
                                    <div className="text-4xl font-bold text-white font-mono">5,000+</div>
                                    <div className="text-white/40 text-xs">Total Audits</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default VisionAuthoritySection;
