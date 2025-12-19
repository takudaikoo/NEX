"use client";

import React from 'react';
import { Monitor, Zap, Droplets, ArrowRight } from 'lucide-react';
import Link from 'next/link';

interface Props {
    setHoverState: (state: 'cyber' | 'impact' | 'flow' | null) => void;
}

const BusinessOverlay: React.FC<Props> = ({ setHoverState }) => {
    return (
        <div className="relative z-10 w-full h-screen flex flex-col md:flex-row">

            {/* 1. Cyber (Left) */}
            <Link
                href="/cyber"
                className="flex-1 group relative border-b md:border-b-0 md:border-r border-white/10 flex items-center justify-center cursor-none md:cursor-pointer"
                onMouseEnter={() => setHoverState('cyber')}
                onMouseLeave={() => setHoverState(null)}
            >
                {/* Hover Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-green-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="text-center relative transform transition-transform duration-500 group-hover:scale-110">
                    <div className="inline-block p-4 mb-4 rounded-full border border-white/20 bg-black/50 backdrop-blur-md group-hover:border-[#00ff41] group-hover:text-[#00ff41] transition-colors">
                        <Monitor size={48} />
                    </div>
                    <h2 className="text-4xl font-bold font-mono tracking-tighter text-white mb-2 group-hover:text-[#00ff41] transition-colors">AI Solutions</h2>
                    <p className="text-sm font-mono text-white/50 group-hover:text-white/80">Cybernetic Intelligence</p>

                    <div className="mt-8 opacity-0 group-hover:opacity-100 transition-all transform translate-y-4 group-hover:translate-y-0 flex items-center justify-center gap-2 text-[#00ff41]">
                        <span>ENTER</span> <ArrowRight size={16} />
                    </div>
                </div>
            </Link>

            {/* 2. Impact (Center/Right) - Body Mechanics often Red */}
            <Link
                href="/impact"
                className="flex-1 group relative border-b md:border-b-0 md:border-r border-white/10 flex items-center justify-center cursor-none md:cursor-pointer"
                onMouseEnter={() => setHoverState('impact')}
                onMouseLeave={() => setHoverState(null)}
            >
                <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-red-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="text-center relative transform transition-transform duration-500 group-hover:scale-110">
                    <div className="inline-block p-4 mb-4 rounded-full border border-white/20 bg-black/50 backdrop-blur-md group-hover:border-[#ff2e2e] group-hover:text-[#ff2e2e] transition-colors">
                        <Zap size={48} />
                    </div>
                    <h2 className="text-4xl font-bold font-noto-sans italic tracking-widest text-white mb-2 group-hover:text-[#ff2e2e] transition-colors">Body Mechanics</h2>
                    <p className="text-sm font-sans text-white/50 group-hover:text-white/80">Physical Impact</p>
                    <div className="mt-8 opacity-0 group-hover:opacity-100 transition-all transform translate-y-4 group-hover:translate-y-0 flex items-center justify-center gap-2 text-[#ff2e2e]">
                        <span>ENTER</span> <ArrowRight size={16} />
                    </div>
                </div>
            </Link>

            {/* 3. Flow (Right/End) - Cyan */}
            <Link
                href="/flow"
                className="flex-1 group relative flex items-center justify-center cursor-none md:cursor-pointer"
                onMouseEnter={() => setHoverState('flow')}
                onMouseLeave={() => setHoverState(null)}
            >
                <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-l from-cyan-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="text-center relative transform transition-transform duration-500 group-hover:scale-110">
                    <div className="inline-block p-4 mb-4 rounded-full border border-white/20 bg-black/50 backdrop-blur-md group-hover:border-[#00f3ff] group-hover:text-[#00f3ff] transition-colors">
                        <Droplets size={48} />
                    </div>
                    <h2 className="text-4xl font-bold font-sans tracking-tight text-white mb-2 group-hover:text-[#00f3ff] transition-colors">Dev Management</h2>
                    <p className="text-sm font-sans text-white/50 group-hover:text-white/80">Digital Flow</p>
                    <div className="mt-8 opacity-0 group-hover:opacity-100 transition-all transform translate-y-4 group-hover:translate-y-0 flex items-center justify-center gap-2 text-[#00f3ff]">
                        <span>ENTER</span> <ArrowRight size={16} />
                    </div>
                </div>
            </Link>

        </div>
    );
};

export default BusinessOverlay;
