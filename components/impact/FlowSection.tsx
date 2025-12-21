"use client";

import React from 'react';
import { Smartphone, Video, FileText, ArrowRight } from 'lucide-react';

const FlowSection: React.FC = () => {
    return (
        <section className="py-24 px-6 bg-white border-t border-gray-200">
            <div className="container mx-auto max-w-6xl">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold font-noto-sans text-gray-900 mb-4">
                        スマホひとつで完了。3ステップ
                    </h2>
                </div>

                <div className="grid md:grid-cols-3 gap-8 relative">
                    {/* Connecting Line (Desktop) */}
                    <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-px bg-gray-200 -z-0"></div>

                    {/* Step 1 */}
                    <div className="relative bg-gray-50 p-8 border border-gray-200 rounded-2xl md:text-center group hover:border-impact-red/50 transition-colors">
                        <div className="w-24 h-24 mx-auto bg-white border border-gray-200 rounded-full flex items-center justify-center mb-6 relative z-10 group-hover:shadow-[0_0_30px_rgba(235,0,0,0.1)] transition-all">
                            <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-impact-red text-white font-bold flex items-center justify-center border-4 border-white">1</div>
                            <Smartphone size={32} className="text-gray-600 group-hover:text-impact-red transition-colors" />
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-3">Shoot（撮影）</h3>
                        <p className="text-gray-600 text-sm leading-relaxed">
                            普段の練習動画（ランニングや動作）をLINEで送るだけ。
                        </p>
                    </div>

                    {/* Step 2 */}
                    <div className="relative bg-gray-50 p-8 border border-gray-200 rounded-2xl md:text-center group hover:border-impact-red/50 transition-colors">
                        <div className="w-24 h-24 mx-auto bg-white border border-gray-200 rounded-full flex items-center justify-center mb-6 relative z-10 group-hover:shadow-[0_0_30px_rgba(235,0,0,0.1)] transition-all">
                            <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-impact-red text-white font-bold flex items-center justify-center border-4 border-white">2</div>
                            <Video size={32} className="text-gray-600 group-hover:text-impact-red transition-colors" />
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-3">Audit（解析）</h3>
                        <p className="text-gray-600 text-sm leading-relaxed">
                            Zoomで画面共有しながら解析＆フィードバック（60分）。
                        </p>
                    </div>

                    {/* Step 3 */}
                    <div className="relative bg-gray-50 p-8 border border-gray-200 rounded-2xl md:text-center group hover:border-impact-red/50 transition-colors">
                        <div className="w-24 h-24 mx-auto bg-white border border-gray-200 rounded-full flex items-center justify-center mb-6 relative z-10 group-hover:shadow-[0_0_30px_rgba(235,0,0,0.1)] transition-all">
                            <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-impact-red text-white font-bold flex items-center justify-center border-4 border-white">3</div>
                            <FileText size={32} className="text-gray-600 group-hover:text-impact-red transition-colors" />
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-3">Prescription（処方箋）</h3>
                        <p className="text-gray-600 text-sm leading-relaxed">
                            修正のためのドリルと、管理すべき数値をまとめた「処方箋」を受け取る。
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FlowSection;
