"use client";

import React, { useState } from 'react';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import BrandHero from '@/components/brand/BrandHero';
import BrandServices from '@/components/brand/BrandServices';
import BrandMessage from '@/components/brand/BrandMessage';
import BrandPhilosophy from '@/components/brand/BrandPhilosophy';
import BrandFooter from '@/components/brand/BrandFooter';

const HubThreeScene = dynamic(() => import('@/components/hub/HubThreeScene'), {
    ssr: false,
});

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

                {/* Header */}
                <header className="fixed top-0 left-0 w-full p-6 md:p-8 z-50 flex justify-between items-center">
                    <Link href="/" className="text-2xl font-bold tracking-[0.5em] text-white hover:text-white/80 transition-colors">
                        NXS
                    </Link>
                    <nav aria-label="メインナビゲーション" className="flex items-center gap-6">
                        <Link href="/contact" className="text-sm text-white/60 hover:text-white transition-colors font-mono">
                            Contact
                        </Link>
                    </nav>
                </header>

                {/* Main Content */}
                <main>
                    {/* 1. Hero */}
                    <BrandHero />

                    {/* 2. Services */}
                    <BrandServices setHoverState={setHoverState} />

                    {/* 3. Message */}
                    <BrandMessage />

                    {/* 4. Philosophy */}
                    <BrandPhilosophy />
                </main>

                {/* 5. Footer */}
                <BrandFooter />

            </div>
        </div>
    );
}
