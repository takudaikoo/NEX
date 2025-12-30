"use client";

import React from 'react';

export default function BrandAbout() {
    return (
        <section className="relative w-full py-24 px-6 md:px-12 bg-black/80 backdrop-blur-sm z-10 border-t border-white/5">
            <div className="max-w-4xl mx-auto space-y-24">

                {/* Definition */}
                <div className="text-center">
                    <h2 className="text-xl md:text-2xl font-bold font-sans text-tech-cyan mb-8 tracking-widest">WHY WE EXIST</h2>
                    <blockquote className="text-2xl md:text-4xl font-bold leading-relaxed border-l-4 border-tech-cyan pl-6 md:pl-10 text-left my-10">
                        NXSは、分断された「アイデア・スキル・身体」をつなぎ、<br />
                        現場で機能する形に実装する会社です。
                    </blockquote>
                    <p className="text-lg text-white/70 leading-relaxed text-left md:text-center max-w-2xl mx-auto">
                        多くの組織や個人は、<br />
                        「考えている」「学んでいる」「努力している」<br />
                        それでも成果に結びつかない状態にあります。<br /><br />
                        NXSは、<br />
                        <span className="text-white font-bold border-b border-tech-cyan/50 pb-1">思想や理論で終わらせず、成果が出るところまで伴走します。</span>
                    </p>
                </div>

                {/* Problem */}
                <div className="bg-white/5 border border-white/10 rounded-3xl p-8 md:p-12">
                    <h3 className="text-2xl font-bold mb-8 text-center">なぜ、成果が出ないのか？</h3>

                    <ul className="space-y-4 mb-10 max-w-xl mx-auto">
                        <li className="flex items-start gap-4 text-white/80">
                            <span className="text-red-400 font-bold">×</span>
                            技術はあるが、使いこなせていない
                        </li>
                        <li className="flex items-start gap-4 text-white/80">
                            <span className="text-red-400 font-bold">×</span>
                            学んだ知識が、現場で活きない
                        </li>
                        <li className="flex items-start gap-4 text-white/80">
                            <span className="text-red-400 font-bold">×</span>
                            努力しているのに、結果が安定しない
                        </li>
                    </ul>

                    <div className="text-center">
                        <p className="text-lg mb-6">原因はシンプルです。</p>
                        <h4 className="text-3xl md:text-5xl font-bold text-white mb-6">
                            「つながっていない」から。
                        </h4>
                        <p className="text-white/60">
                            NXSは、その断絶を埋めます。
                        </p>
                    </div>
                </div>

            </div>
        </section>
    );
}
