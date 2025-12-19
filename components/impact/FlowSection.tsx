"use client";

import React from 'react';
import { Smartphone, Video, FileText, ArrowRight } from 'lucide-react';

const FlowSection: React.FC = () => {
    return (
        <section className="py-24 px-6 bg-[#0a0a0a] border-t border-white/5">
            <div className="container mx-auto max-w-6xl">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold font-noto-sans text-white mb-4">
                        スマホひとつで完了。3ステップ
                    </h2>
                </div>

                <div className="grid md:grid-cols-3 gap-8 relative">
                    {/* Connecting Line (Desktop) */}
                    <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-px bg-white/10 -z-0"></div>

                    {/* Step 1 */}
                    <div className="relative bg-[#050505] p-8 border border-white/10 rounded-2xl md:text-center group hover:border-tech-cyan/50 transition-colors">
                        <div className="w-24 h-24 mx-auto bg-[#0a0a0a] border border-white/10 rounded-full flex items-center justify-center mb-6 relative z-10 group-hover:shadow-[0_0_30px_rgba(0,243,255,0.2)] transition-all">
                            <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-tech-cyan text-black font-bold flex items-center justify-center border-4 border-[#0a0a0a]">1</div>
                            <Smartphone size={32} className="text-white group-hover:text-tech-cyan transition-colors" />
                        </div>
                        <h3 className="text-xl font-bold text-white mb-3">Shoot（撮影）</h3>
                        <p className="text-white/60 text-sm leading-relaxed">
                            普段の練習動画（ランニングや動作）をLINEで送るだけ。
                        </p>
                    </div>

                    {/* Step 2 */}
                    <div className="relative bg-[#050505] p-8 border border-white/10 rounded-2xl md:text-center group hover:border-tech-cyan/50 transition-colors">
                        <div className="w-24 h-24 mx-auto bg-[#0a0a0a] border border-white/10 rounded-full flex items-center justify-center mb-6 relative z-10 group-hover:shadow-[0_0_30px_rgba(0,243,255,0.2)] transition-all">
                            <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-tech-cyan text-black font-bold flex items-center justify-center border-4 border-[#0a0a0a]">2</div>
                            <Video size={32} className="text-white group-hover:text-tech-cyan transition-colors" />
                        </div>
                        <h3 className="text-xl font-bold text-white mb-3">Audit（解析）</h3>
                        <p className="text-white/60 text-sm leading-relaxed">
                            Zoomで画面共有しながら解析＆フィードバック（60分）。
                        </p>
                    </div>

                    {/* Step 3 */}
                    <div className="relative bg-[#050505] p-8 border border-white/10 rounded-2xl md:text-center group hover:border-tech-cyan/50 transition-colors">
                        <div className="w-24 h-24 mx-auto bg-[#0a0a0a] border border-white/10 rounded-full flex items-center justify-center mb-6 relative z-10 group-hover:shadow-[0_0_30px_rgba(0,243,255,0.2)] transition-all">
                            <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-tech-cyan text-black font-bold flex items-center justify-center border-4 border-[#0a0a0a]">3</div>
                            <FileText size={32} className="text-white group-hover:text-tech-cyan transition-colors" />
                        </div>
                        <h3 className="text-xl font-bold text-white mb-3">Prescription（処方箋）</h3>
                        <p className="text-white/60 text-sm leading-relaxed">
                            修正のためのドリルと、管理すべき数値をまとめた「処方箋」を受け取る。
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FlowSection;
