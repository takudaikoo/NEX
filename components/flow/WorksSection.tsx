"use client";

import React from 'react';
import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';

const WorksSection: React.FC = () => {
    return (
        <section className="py-24 px-6 bg-tech-navy relative">
            <div className="container mx-auto max-w-6xl">
                <div className="mb-16">
                    <h2 className="text-3xl font-bold font-noto-sans text-white mb-4">Works / Prototypes</h2>
                    <p className="text-white/60">実際の構築事例</p>
                </div>

                <div className="space-y-24">
                    {/* Case 01 */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                        <div className="order-2 md:order-1 space-y-6">
                            <div className="inline-block px-3 py-1 bg-tech-cyan/10 text-tech-cyan rounded-full text-xs font-bold tracking-wider uppercase">
                                Case 01: Automation
                            </div>
                            <h3 className="text-3xl font-bold text-white">契約・決済オートメーション</h3>
                            <p className="text-xl text-white/80 font-light leading-relaxed">
                                「署名 → 請求 → 入金確認まで、あなたは1秒も使いません」
                            </p>
                            <div className="flex gap-4 text-sm text-white/40 font-mono pt-4">
                                <span className="border border-white/10 px-3 py-1 rounded">Dev: 3 Days</span>
                                <span className="border border-white/10 px-3 py-1 rounded">Tools: Stripe + Airtable</span>
                            </div>
                        </div>
                        <div className="order-1 md:order-2 relative h-[300px] md:h-[400px] bg-gradient-to-br from-gray-900 to-black rounded-3xl border border-white/10 overflow-hidden group">
                            <Image
                                src="/images/flow1.jpg"
                                alt="Automation Case Mockup"
                                fill
                                className="object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                            />
                            <div className="absolute bottom-6 right-6 p-4 bg-white/10 backdrop-blur-md rounded-xl border border-white/20">
                                <div className="flex items-center gap-3">
                                    <div className="w-2 h-2 rounded-full bg-tech-green animate-pulse"></div>
                                    <span className="text-sm font-bold">入金完了通知</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Case 02 */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                        <div className="order-2 md:order-2 space-y-6">
                            <div className="inline-block px-3 py-1 bg-tech-cyan/10 text-tech-cyan rounded-full text-xs font-bold tracking-wider uppercase">
                                Case 02: Platform
                            </div>
                            <h3 className="text-3xl font-bold text-white">会員制動画プラットフォーム</h3>
                            <p className="text-xl text-white/80 font-light leading-relaxed">
                                「集客・決済・動画配信・会員管理。4つのツールが裏側で連携し、ひとつの『収益装置』になります」
                            </p>
                            <div className="flex gap-4 text-sm text-white/40 font-mono pt-4">
                                <span className="border border-white/10 px-3 py-1 rounded">Dev: 5 Days</span>
                                <span className="border border-white/10 px-3 py-1 rounded">Tools: Teachable + Zapier</span>
                            </div>
                        </div>
                        <div className="order-1 md:order-1 relative h-[300px] md:h-[400px] bg-gradient-to-br from-gray-900 to-black rounded-3xl border border-white/10 overflow-hidden group">
                            <Image
                                src="/images/flow2.jpg"
                                alt="Platform Case Mockup"
                                fill
                                className="object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WorksSection;
