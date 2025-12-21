"use client";

import React from 'react';
import { ArrowRight } from 'lucide-react';

const BeforeAfterSection: React.FC = () => {
    return (
        <section className="py-24 px-6 bg-gray-50 border-y border-gray-200">
            <div className="container mx-auto max-w-5xl">
                <div className="text-center mb-16">
                    <div className="text-sm tracking-widest uppercase text-gray-500 mb-2">CASE STUDY</div>
                    <h2 className="text-3xl font-bold font-noto-sans text-gray-900 mb-4">
                        「接地音が変わった」「痛みが消えた」<br />
                        わずか60分で、走りが変わる。
                    </h2>
                </div>

                <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden p-8 md:p-12 shadow-sm">
                    <div className="mb-8">
                        <span className="inline-block px-3 py-1 bg-gray-100 text-gray-600 text-xs rounded mb-2">Target</span>
                        <h3 className="text-xl font-bold text-gray-900">サブ3.5目標ランナー（40代男性）</h3>
                    </div>

                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        {/* Before */}
                        <div className="space-y-4 relative">
                            <div className="absolute -left-4 top-0 bottom-0 w-1 bg-red-900/50"></div>
                            <h4 className="text-red-500 font-bold tracking-widest uppercase text-sm">Before</h4>
                            <p className="text-gray-900 font-bold">「膝の外側が痛む」</p>
                            <p className="text-gray-600 text-sm">着地時に膝が内側に入るニーイン現象が発生。</p>

                            {/* Graphic Placeholder */}
                            <div className="h-40 bg-black border border-white/10 rounded flex items-center justify-center relative overflow-hidden">
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="w-full h-px bg-white/10"></div>
                                    <div className="absolute w-px h-full bg-white/10"></div>
                                </div>
                                {/* Knee Valgus simulation curve */}
                                <svg viewBox="0 0 100 50" className="w-full h-full opacity-50">
                                    <path d="M10,40 Q50,10 90,40" fill="none" stroke="red" strokeWidth="2" strokeDasharray="4 2" />
                                </svg>
                                <div className="absolute bottom-2 right-2 text-xs text-red-500 font-mono">Load: 3.2G (High)</div>
                            </div>
                        </div>

                        {/* Arrow */}
                        <div className="hidden md:flex justify-center text-gray-300">
                            <ArrowRight size={32} />
                        </div>

                        {/* After */}
                        <div className="space-y-4 relative">
                            <div className="absolute -left-4 top-0 bottom-0 w-1 bg-impact-red"></div>
                            <h4 className="text-impact-red font-bold tracking-widest uppercase text-sm">After</h4>
                            <p className="text-gray-900 font-bold">重心を2cm外側へ意識</p>
                            <p className="text-gray-600 text-sm">痛み消失＆ハーフマラソンPB更新。</p>

                            {/* Graphic Placeholder */}
                            <div className="h-40 bg-gray-50 border border-gray-200 rounded flex items-center justify-center relative overflow-hidden">
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="w-full h-px bg-gray-200"></div>
                                    <div className="absolute w-px h-full bg-gray-200"></div>
                                </div>
                                {/* Correct alignment curve */}
                                <svg viewBox="0 0 100 50" className="w-full h-full opacity-50">
                                    <path d="M10,25 L90,25" fill="none" stroke="#eb0000" strokeWidth="2" />
                                </svg>
                                <div className="absolute bottom-2 right-2 text-xs text-impact-red font-mono">Load: 1.1G (Optimal)</div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default BeforeAfterSection;
