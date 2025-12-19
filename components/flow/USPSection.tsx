"use client";

import React from 'react';
import { Eye, Zap, TrendingUp } from 'lucide-react';

const USPSection: React.FC = () => {
    return (
        <section className="py-24 px-6 relative">
            <div className="container mx-auto max-w-6xl">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <USPCard
                        icon={<Eye size={32} />}
                        title="Showroom Strategy"
                        desc="まず「動くもの」をお見せします。試着してから購入してください。"
                    />
                    <USPCard
                        icon={<Zap size={32} />}
                        title="Hyper Speed"
                        desc="100点の完成度を待たず、60点のプロトタイプで来週からPDCAを回せます。"
                    />
                    <USPCard
                        icon={<TrendingUp size={32} />}
                        title="Business Logic"
                        desc="専門用語は使いません。経営の言葉（利益・効率）で対話します。"
                    />
                </div>
            </div>
        </section>
    );
};

const USPCard = ({ icon, title, desc }: { icon: React.ReactNode, title: string, desc: string }) => (
    <div className="group p-8 bg-tech-navy-light/40 backdrop-blur-md border border-white/10 rounded-2xl hover:border-tech-cyan/50 transition-all duration-300 hover:shadow-[0_0_20px_rgba(0,243,255,0.1)] hover:-translate-y-1">
        <div className="w-16 h-16 rounded-xl bg-tech-navy flex items-center justify-center text-tech-cyan mb-6 group-hover:bg-tech-cyan group-hover:text-tech-navy transition-colors duration-300">
            {icon}
        </div>
        <h3 className="text-xl font-bold font-montserrat mb-4 text-white group-hover:text-tech-cyan transition-colors">{title}</h3>
        <p className="text-white/60 leading-relaxed font-light">
            {desc}
        </p>
    </div>
);

export default USPSection;
