"use client";

import React from 'react';
import { X, ZapOff } from 'lucide-react';

const ProblemAgitationSection: React.FC = () => {
    return (
        <section className="py-24 px-6 bg-white border-t border-gray-200">
            <div className="container mx-auto max-w-5xl">

                {/* Problem: Empathy */}
                <div className="grid md:grid-cols-2 gap-16 items-center mb-32">
                    <div className="order-2 md:order-1 relative h-[400px] bg-neutral-900 rounded-lg overflow-hidden grayscale opacity-60">
                        {/* Placeholder for struggling athlete */}
                        <div className="absolute inset-0 flex items-center justify-center text-white/20 font-mono">
                            [ STRUGGLING_ATHLETE_IMG ]
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                    </div>
                    <div className="order-1 md:order-2">
                        <h2 className="text-2xl font-bold font-noto-sans text-gray-900 mb-8 border-l-4 border-gray-300 pl-6">
                            「言われた通りにやっているのに、<br />なぜかできない」
                        </h2>
                        <div className="space-y-6 text-gray-600 leading-relaxed font-light">
                            <p>
                                こんな"感覚のズレ"に、時間を奪われていませんか？
                            </p>
                            <ul className="space-y-4">
                                <li className="flex items-start gap-4">
                                    <X className="text-red-500 mt-1 shrink-0" size={18} />
                                    <span>「地面をもっと強く蹴れ」と意識したら、逆に足が流れて遅くなった。</span>
                                </li>
                                <li className="flex items-start gap-4">
                                    <X className="text-red-500 mt-1 shrink-0" size={18} />
                                    <span>YouTubeの"神ドリル"を試しても、自分にはハマらない。</span>
                                </li>
                                <li className="flex items-start gap-4">
                                    <X className="text-red-500 mt-1 shrink-0" size={18} />
                                    <span>怪我が治ったと思ったら、また同じ箇所を痛めてしまう。</span>
                                </li>
                            </ul>
                            <p className="pt-4 text-gray-900 font-bold">
                                その原因は、あなたのセンスが無いからではありません。
                            </p>
                        </div>
                    </div>
                </div>

                {/* Agitation: Definition */}
                <div className="text-center max-w-3xl mx-auto">
                    <div className="inline-block p-3 mb-6 bg-red-500/10 rounded-full text-red-500">
                        <ZapOff size={32} />
                    </div>
                    <h2 className="text-3xl font-bold text-gray-900 mb-6">
                        脳内のイメージと、実際の物理現象が<br />
                        <span className="text-red-500">「矛盾」</span>しているからです。
                    </h2>
                    <p className="text-gray-600 leading-relaxed max-w-2xl mx-auto mb-12">
                        プロの指導現場で起きる最大の悲劇。それは、指導者の「感覚的な言葉（もっとグッと！）」と、あなたの「受け取り方」のズレです。<br /><br />
                        物理学に「気持ち」は通用しません。<br />
                        重心位置が数センチずれていれば、あなたがどんなに気合を入れて走っても、物理法則は容赦なく「ブレーキ」をかけ続けます。<br /><br />
                        <span className="text-gray-900 border-b border-red-500/50">感覚に頼る修正は、地図を持たずに樹海を歩くようなものです。</span>
                    </p>

                    {/* Diagram Placeholder */}
                    <div className="h-64 bg-gray-50 border border-dashed border-gray-300 rounded-xl flex items-center justify-center relative overflow-hidden">
                        <div className="text-center">
                            <div className="text-4xl text-gray-200 font-bold mb-2">SENSATION ≠ PHYSICS</div>
                            <div className="text-sm text-gray-400">Gap creates Resistance</div>
                        </div>
                        {/* Decorative visual lines */}
                        <div className="absolute top-1/2 left-0 w-full h-px bg-red-500/20 rotate-12 transform origin-center"></div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default ProblemAgitationSection;
