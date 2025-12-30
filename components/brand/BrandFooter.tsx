"use client";

import React from 'react';

export default function BrandFooter() {
    return (
        <footer className="relative z-10 w-full py-12 bg-black/60 backdrop-blur-sm text-center border-t border-white/10">
            <h2 className="text-2xl font-bold tracking-[0.2em] mb-4 text-white">
                NXS
            </h2>
            <p className="text-sm text-white/40">
                NEXUS ｜ 人・技術・身体をつなぐ実装カンパニー
            </p>
            <div className="flex justify-center gap-6 mt-6 mb-4 text-xs text-white/40">
                <a href="/contact" className="hover:text-white transition-colors">お問い合わせ</a>
                <a href="/legal/terms" className="hover:text-white transition-colors">利用規約</a>
                <a href="/legal/tokusho-ho" className="hover:text-white transition-colors">特定商取引法に基づく表記</a>
                <a href="/legal/privacy" className="hover:text-white transition-colors">プライバシーポリシー</a>
            </div>
            <p className="text-xs text-white/20 mt-4 font-mono">
                © 2025 NXS. All Rights Reserved.
            </p>
        </footer>
    );
}
