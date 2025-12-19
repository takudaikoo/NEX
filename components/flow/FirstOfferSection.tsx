"use client";

import React from 'react';
import { Zap } from 'lucide-react';

const FirstOfferSection: React.FC = () => {
    return (
        <div className="w-full bg-tech-navy-light/80 backdrop-blur-md border-y border-white/5 py-4 px-6 relative z-20">
            <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-4">

                {/* Hook Text */}
                <div className="flex items-center gap-4 text-center md:text-left">
                    <div className="p-2 bg-tech-cyan/10 rounded-full text-tech-cyan">
                        <Zap size={18} />
                    </div>
                    <p className="text-sm md:text-base font-medium text-white/90">
                        あなたの課題、既存ツールで解決可能か<span className="text-tech-cyan font-bold">無料診断</span>します。
                    </p>
                </div>

                {/* Badge */}
                <div className="flex items-center gap-3">
                    <span className="relative flex h-3 w-3">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-tech-green opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-3 w-3 bg-tech-green"></span>
                    </span>
                    <span className="text-xs md:text-sm font-mono text-tech-green tracking-wider uppercase font-bold">
                        プロトタイプ提供まで最短3日
                    </span>
                </div>

            </div>
        </div>
    );
};

export default FirstOfferSection;
