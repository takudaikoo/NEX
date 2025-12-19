"use client";

import React from 'react';
import { Quote } from 'lucide-react';

const VisionAuthoritySection: React.FC = () => {
    return (
        <section className="py-24 px-6 bg-[#0B1026] text-white relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-cyber-midnight to-transparent opacity-50 z-0"></div>

            <div className="container mx-auto max-w-5xl relative z-10">
                <div className="grid md:grid-cols-2 gap-12 items-center">

                    {/* Portrait */}
                    <div className="relative">
                        <div className="aspect-[3/4] bg-gray-800 rounded-lg overflow-hidden grayscale hover:grayscale-0 transition-all duration-700 relative">
                            {/* Placeholder for Founder Image */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                            <div className="absolute bottom-6 left-6">
                                <p className="text-xl font-bold font-noto-serif">Takudaiko</p>
                                <p className="text-xs text-cyber-gold tracking-widest uppercase">Lead Engineer / Mentor</p>
                            </div>
                        </div>
                        {/* Stats Overlay */}
                        <div className="absolute -bottom-6 -right-6 bg-white text-cyber-midnight p-6 rounded-lg shadow-xl">
                            <div className="flex gap-8">
                                <div>
                                    <div className="text-xs text-gray-400 uppercase">Students</div>
                                    <div className="text-2xl font-bold font-mono">500+</div>
                                </div>
                                <div>
                                    <div className="text-xs text-gray-400 uppercase">Satisfaction</div>
                                    <div className="text-2xl font-bold font-mono text-cyber-vermilion">99%</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Vision Message */}
                    <div className="font-noto-serif">
                        <Quote size={48} className="text-cyber-vermilion mb-8 opacity-50" />

                        <h2 className="text-3xl md:text-4xl font-bold leading-relaxed mb-8">
                            「頑張っている人が、<br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyber-gold to-orange-400">正しく報われる世界</span>を作りたい」
                        </h2>

                        <div className="space-y-6 text-gray-300 leading-loose">
                            <p>
                                私はこれまで多くの現場を見てきました。<br />
                                優秀なのに、古いやり方に忙殺され、自信を失っていく若手をこれ以上見たくありません。
                            </p>
                            <p>
                                AIやツールは敵ではありません。<br />
                                正しく使えば、あなたを守る<b className="text-white">最強の鎧</b>になります。
                            </p>
                            <p>
                                一人で抱え込まないでください。<br />
                                私があなたの「コ・パイロット」として、次のステージへ押し上げます。
                            </p>
                        </div>

                        <div className="mt-12">
                            {/* Signature placeholder */}
                            <div className="text-2xl font-handwriting text-white/80 transform -rotate-2">
                                Takudaiko
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default VisionAuthoritySection;
