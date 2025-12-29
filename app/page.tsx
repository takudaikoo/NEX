"use client";

import React, { useState } from 'react';
import HubThreeScene from '@/components/hub/HubThreeScene';
import BrandServices from '@/components/brand/BrandServices';
import BrandMessage from '@/components/brand/BrandMessage';
import BrandPhilosophy from '@/components/brand/BrandPhilosophy';
import BrandFooter from '@/components/brand/BrandFooter';

export default function Home() {
    const [hoverState, setHoverState] = useState<'cyber' | 'impact' | 'flow' | null>(null);

    return (
        <div className="min-h-screen bg-black text-white relative">

            {/* Fixed 3D Background */}
            <div className="fixed inset-0 z-0 pointer-events-none">
                <HubThreeScene hoverState={hoverState} />
            </div>

            {/* Scrollable Content Wrapper */}
            <div className="relative z-10 w-full overflow-x-hidden">

                {/* Header / Nav (Brand) */}
                <header className="fixed top-0 left-0 w-full p-6 md:p-8 z-50 flex justify-between items-center pointer-events-none mix-blend-difference">
                    <div className="text-2xl font-bold tracking-[0.5em] text-white">NXS</div>
                    <div className="text-xs text-white/50 font-mono hidden md:block">INTERFACE PROTOCOL</div>
                </header>

                {/* 1. Services (Now at Top) */}
                <div className="pt-10 md:pt-20">
                    <BrandServices setHoverState={setHoverState} />
                </div>

                {/* 2. Message (Hero + About content merged) */}
                <BrandMessage />

                {/* 3. Philosophy */}
                <BrandPhilosophy />

                {/* 4. Footer */}
                <BrandFooter />

            </div>
        </div>
    );
}
