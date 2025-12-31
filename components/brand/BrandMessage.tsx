"use client";

import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function BrandMessage() {
    return (
        <section className="relative w-full py-32 px-6 md:px-12 bg-black/60 backdrop-blur-sm z-10 border-t border-white/5 text-center">

            {/* Main Message (Hero Copy) */}
            <div className="mb-24 animate-fade-in-up">
                <h2 className="text-2xl md:text-4xl font-bold font-noto-sans leading-tight mb-8 tracking-wide text-white">
                    NXS（ネクサス）は、<br className="hidden md:block" />
                    AI・テクノロジー・身体知を統合し、<br />
                    現場で「機能する」状態まで導く<br className="hidden md:block" />
                    実装パートナーです。
                </h2>
                <div className="w-20 h-1 bg-gradient-to-r from-tech-cyan to-tech-green mx-auto rounded-full mb-8"></div>
            </div>

            {/* Why We Exist (Definition) */}
            <div className="max-w-4xl mx-auto animate-fade-in-up delay-100">
                <p className="text-lg md:text-xl text-white/70 leading-relaxed max-w-3xl mx-auto mb-16">
                    多くの組織や個人が、知識を蓄え、努力を重ねながらも<br />
                    「成果に結びつかない」という壁に突き当たっています。<br /><br />
                    その原因は、アイデアと実行の間の「分断」にあります。
                </p>

                <blockquote className="text-xl md:text-3xl font-bold leading-relaxed mb-10 text-white">
                    私たちは、思想や理論を掲げるだけではありません。<br />
                    分断されたスキルと現場を繋ぎ、<br />
                    「使える」「変わる」「結果が出る」まで、<br />
                    実直に伴走し、形にします。
                </blockquote>

                {/* CTA */}
                <div className="flex justify-center">
                    <a
                        href="/contact"
                        className="group relative px-10 py-5 bg-white text-black font-bold text-lg rounded-full overflow-hidden transition-all hover:scale-105 shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:shadow-[0_0_30px_rgba(255,255,255,0.5)]"
                    >
                        <span className="relative z-10 flex items-center gap-3">
                            NXSについて問い合わせる
                            <ArrowRight className="group-hover:translate-x-1 transition-transform" />
                        </span>
                    </a>
                </div>
            </div>

        </section>
    );
}
