"use client";

import React from 'react';
import { Check, X } from 'lucide-react';

const ComparisonSection: React.FC = () => {
    return (
        <section className="py-24 px-6 bg-white border-t border-gray-200">
            <div className="container mx-auto max-w-5xl">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold font-noto-sans text-gray-900 mb-4">
                        なぜ、一般的な「パーソナルレッスン」ではダメなのか？
                    </h2>
                </div>

                <div className="grid md:grid-cols-2 gap-8 md:gap-0 relative">
                    {/* Competitor */}
                    <div className="bg-gray-100 p-8 md:p-12 border border-gray-200 rounded-3xl md:rounded-r-none md:border-r-0 text-gray-400 grayscale opacity-80">
                        <h3 className="text-xl font-bold mb-8 text-center">一般的なジム・コーチ</h3>
                        <div className="space-y-8">
                            <div>
                                <div className="text-xs uppercase tracking-widest mb-1">指導の根拠</div>
                                <div className="text-lg font-medium flex items-center gap-2">
                                    <X size={16} /> トレーナーの「経験・感覚」
                                </div>
                            </div>
                            <div>
                                <div className="text-xs uppercase tracking-widest mb-1">ゴール</div>
                                <div className="text-lg font-medium flex items-center gap-2">
                                    <X size={16} /> 通い続けてもらうこと
                                </div>
                            </div>
                            <div>
                                <div className="text-xs uppercase tracking-widest mb-1">再現性</div>
                                <div className="text-lg font-medium flex items-center gap-2">
                                    <X size={16} /> その場ではできるが、すぐ忘れる
                                </div>
                            </div>
                            <div>
                                <div className="text-xs uppercase tracking-widest mb-1">費用</div>
                                <div className="text-lg font-medium flex items-center gap-2">
                                    <X size={16} /> 月額 数万円〜（終わりがない）
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Lab (Highlighted) */}
                    <div className="bg-[#fff5f5] p-8 md:p-12 border-2 border-impact-red rounded-3xl relative shadow-[0_0_50px_rgba(235,0,0,0.1)] z-10 scale-105">
                        <div className="absolute top-0 right-0 bg-impact-red text-white text-xs font-bold px-3 py-1 rounded-bl-xl uppercase tracking-widest">
                            Recommended
                        </div>
                        <h3 className="text-xl font-bold mb-8 text-center text-gray-900">Sports Mechanics Lab</h3>
                        <div className="space-y-8">
                            <div>
                                <div className="text-xs text-impact-red uppercase tracking-widest mb-1">指導の根拠</div>
                                <div className="text-xl font-bold text-gray-900 flex items-center gap-2">
                                    <Check size={20} className="text-impact-red" /> 物理学・力学・データ
                                </div>
                            </div>
                            <div>
                                <div className="text-xs text-impact-red uppercase tracking-widest mb-1">ゴール</div>
                                <div className="text-xl font-bold text-gray-900 flex items-center gap-2">
                                    <Check size={20} className="text-impact-red" /> 「卒業」させること
                                </div>
                            </div>
                            <div>
                                <div className="text-xs text-impact-red uppercase tracking-widest mb-1">再現性</div>
                                <div className="text-xl font-bold text-gray-900 flex items-center gap-2">
                                    <Check size={20} className="text-impact-red" /> 数値で管理するため再現可能
                                </div>
                            </div>
                            <div>
                                <div className="text-xs text-impact-red uppercase tracking-widest mb-1">費用</div>
                                <div className="text-xl font-bold text-gray-900 flex items-center gap-2">
                                    <Check size={20} className="text-impact-red" /> 都度払い（必要な時だけ）
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ComparisonSection;
