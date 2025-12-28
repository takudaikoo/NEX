"use client";

import React from 'react';

export default function BrandFooter() {
    return (
        <footer className="relative z-10 w-full py-12 bg-black text-center border-t border-white/10">
            <h2 className="text-2xl font-bold tracking-[0.2em] mb-4 text-white">
                NXS
            </h2>
            <p className="text-sm text-white/40">
                NEXUS ｜ 人・技術・身体をつなぐ実装カンパニー
            </p>
            <p className="text-xs text-white/20 mt-8 font-mono">
                © 2025 NXS. All Rights Reserved.
            </p>
        </footer>
    );
}
