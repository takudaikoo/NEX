"use client";

import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function BrandMessage() {
    return (
        <section className="relative w-full py-32 px-6 md:px-12 bg-black/80 backdrop-blur-sm z-10 border-t border-white/5 text-center">

            {/* Main Message (Hero Copy) */}
            <div className="mb-24 animate-fade-in-up">
                <h2 className="text-3xl md:text-5xl font-bold font-noto-sans leading-tight mb-8 tracking-wide text-white">
                    人・技術・身体をつなぎ、<br />
                    実装によって成果を生む。
                </h2>
                <div className="w-20 h-1 bg-gradient-to-r from-tech-cyan to-tech-green mx-auto rounded-full mb-8"></div>
                <p className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto leading-relaxed">
                    NXS（NEXUS）は、AI・テクノロジー・身体知を横断し、<br />
                    「使える」「変わる」「結果が出る」状態まで落とし込む実装カンパニーです。
                </p>
            </div>

            {/* Why We Exist (Definition) */}
            <div className="max-w-4xl mx-auto animate-fade-in-up delay-100">
                <blockquote className="text-xl md:text-3xl font-bold leading-relaxed mb-10 text-white">
                    NXSは、分断された「アイデア・スキル・身体」をつなぎ、<br />
                    現場で機能する形に実装する会社です。
                </blockquote>

                <p className="text-lg text-white/60 leading-relaxed max-w-3xl mx-auto mb-16">
                    多くの組織や個人は、「考えている」「学んでいる」「努力している」<br className="hidden md:block" />
                    それでも成果に結びつかない状態にあります。<br /><br />

                    <strong className="text-white text-2xl block mt-4">
                        思想や理論で終わらせず、<br />
                        成果が出るところまで伴走します。
                    </strong>
                </p>

                {/* CTA */}
                <div className="flex justify-center">
                    <a
                        href="mailto:info@nex-s.jp"
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
