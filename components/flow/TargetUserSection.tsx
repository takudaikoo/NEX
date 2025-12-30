"use client";

import React from 'react';
import { Check } from 'lucide-react';

const TargetUserSection: React.FC = () => {
    const targets = [
        "IT担当者がいない中小企業",
        "新規事業を素早く検証したいスタートアップ",
        "外注コストを抑えたい個人事業主"
    ];

    return (
        <section className="bg-tech-navy/50 py-16 px-6 border-b border-white/5">
            <div className="max-w-4xl mx-auto">
                <h2 className="text-2xl font-bold text-white text-center mb-10 font-noto-sans">
                    こんな方に向いています
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {targets.map((target, index) => (
                        <div key={index} className="flex items-center gap-4 bg-white/5 border border-white/10 p-6 rounded-xl hover:bg-white/10 transition-colors">
                            <div className="w-8 h-8 rounded-full bg-tech-cyan/20 flex items-center justify-center flex-shrink-0 text-tech-cyan">
                                <Check size={18} strokeWidth={3} />
                            </div>
                            <span className="text-white font-bold leading-relaxed">{target}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TargetUserSection;
