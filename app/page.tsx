"use client";

import React, { useState } from 'react';
import HubThreeScene from '@/components/hub/HubThreeScene';
import BusinessOverlay from '@/components/hub/BusinessOverlay';

export default function Home() {
    const [hoverState, setHoverState] = useState<'cyber' | 'impact' | 'flow' | null>(null);

    return (
        <div className="min-h-screen bg-black text-white relative overflow-hidden">

            {/* 3D Background */}
            <HubThreeScene hoverState={hoverState} />

            {/* Header Overlay */}
            <div className="absolute top-0 left-0 w-full p-8 z-50 flex justify-between items-center pointer-events-none">
                <div className="text-2xl font-bold tracking-[0.5em] pointer-events-auto mix-blend-difference">NEX</div>
                <div className="text-xs text-white/50 font-mono hidden md:block mix-blend-difference">INTERFACE PROTOCOL</div>
            </div>

            {/* Interactive Overlay */}
            <BusinessOverlay setHoverState={setHoverState} />

        </div>
    );
}

