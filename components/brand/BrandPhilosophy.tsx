"use client";

import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function BrandPhilosophy() {
    return (
        <section className="relative w-full py-24 px-6 md:px-12 bg-gradient-to-b from-black/80 to-black z-10">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-xl md:text-2xl font-bold font-sans text-tech-green mb-16 text-center tracking-widest uppercase">
                    OUR APPROACH
                </h2>

                <div className="grid md:grid-cols-3 gap-8">

                    {/* Think */}
                    <div className="relative group p-8 border border-white/10 rounded-2xl bg-white/5 hover:bg-white/10 transition-colors">
                        <div className="text-5xl font-bold text-white/10 absolute top-4 right-6 group-hover:text-white/20 transition-colors">01</div>
                        <h3 className="text-3xl font-bold text-white mb-4">Think</h3>
                        <p className="text-sm font-mono text-white/40 mb-6">構想・理解・設計</p>
                        <p className="text-white/70 leading-relaxed">
                            本質的な課題は何か。<br />
                            あるべき姿はどのようなものか。<br />
                            まずは構造を正しく捉えます。
                        </p>
                    </div>

                    {/* Arrow for Desktop */}
                    <div className="hidden md:flex items-center justify-center text-white/20 absolute left-1/3 top-1/2 -translate-x-1/2 z-20">
                        <ArrowRight size={32} />
                    </div>

                    {/* Build */}
                    <div className="relative group p-8 border border-white/10 rounded-2xl bg-white/5 hover:bg-white/10 transition-colors">
                        <div className="text-5xl font-bold text-white/10 absolute top-4 right-6 group-hover:text-white/20 transition-colors">02</div>
                        <h3 className="text-3xl font-bold text-white mb-4 text-tech-cyan">Build</h3>
                        <p className="text-sm font-mono text-white/40 mb-6">実装・仕組み化・習得</p>
                        <p className="text-white/70 leading-relaxed">
                            絵に描いた餅にしない。<br />
                            実際に機能するシステムや<br />
                            身体動作として構築します。
                        </p>
                    </div>

                    {/* Arrow for Desktop */}
                    <div className="hidden md:flex items-center justify-center text-white/20 absolute right-1/3 top-1/2 translate-x-1/2 z-20">
                        <ArrowRight size={32} />
                    </div>

                    {/* Perform */}
                    <div className="relative group p-8 border border-white/10 rounded-2xl bg-white/5 hover:bg-white/10 transition-colors">
                        <div className="text-5xl font-bold text-white/10 absolute top-4 right-6 group-hover:text-white/20 transition-colors">03</div>
                        <h3 className="text-3xl font-bold text-white mb-4 text-impact-red">Perform</h3>
                        <p className="text-sm font-mono text-white/40 mb-6">成果・再現性・継続</p>
                        <p className="text-white/70 leading-relaxed">
                            一度きりでは意味がない。<br />
                            継続的に成果を出し続ける<br />
                            「状態」を定着させます。
                        </p>
                    </div>

                </div>

                <div className="text-center mt-12 bg-gradient-to-r from-transparent via-white/5 to-transparent p-6 rounded-xl">
                    <p className="text-xl text-white font-bold">
                        NXSは、この3つを分断せず、一気通貫で扱います。
                    </p>
                </div>
            </div>
        </section>
    );
}
