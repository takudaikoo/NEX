"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Terminal, Key, ShieldCheck } from 'lucide-react';

const OfferSection: React.FC = () => {
    const [timeLeft, setTimeLeft] = useState({ hours: 2, minutes: 59, seconds: 59 });

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(prev => {
                let { hours, minutes, seconds } = prev;
                if (seconds > 0) seconds--;
                else {
                    seconds = 59;
                    if (minutes > 0) minutes--;
                    else {
                        minutes = 59;
                        if (hours > 0) hours--;
                    }
                }
                return { hours, minutes, seconds };
            });
        }, 1000);
        return () => clearInterval(timer);
    }, []);

    return (
        <section className="py-24 px-6 relative overflow-hidden">
            {/* Background Grid Accent */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,65,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,65,0.03)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none"></div>

            <div className="container mx-auto max-w-4xl relative z-10">

                {/* Visual Concept: Holographic Access Terminal (Visualizing 'Control') */}
                <div className="bg-cyber-black/90 border border-cyber-green/30 backdrop-blur-xl rounded-sm shadow-[0_0_50px_rgba(0,255,65,0.1)] overflow-hidden">

                    {/* Terminal Header */}
                    <div className="bg-black/50 px-6 py-2 border-b border-cyber-green/20 flex items-center justify-between">
                        <div className="flex gap-2">
                            <div className="w-3 h-3 rounded-full bg-red-500/50"></div>
                            <div className="w-3 h-3 rounded-full bg-yellow-500/50"></div>
                            <div className="w-3 h-3 rounded-full bg-green-500/50"></div>
                        </div>
                        <div className="text-[10px] font-mono text-cyber-green/60 tracking-widest">
                            ACCESS_LEVEL: ADMIN
                        </div>
                    </div>

                    <div className="p-8 md:p-12 relative">
                        {/* Scanning Line */}
                        <div className="absolute top-0 left-0 w-full h-1 bg-cyber-green/20 shadow-[0_0_20px_rgba(0,255,65,0.5)] animate-scan-down pointer-events-none"></div>

                        <div className="grid md:grid-cols-2 gap-12">
                            {/* Left: Input / Command */}
                            <div className="space-y-6 font-mono">
                                <div>
                                    <div className="flex items-center gap-2 text-cyber-green mb-2">
                                        <Terminal size={18} />
                                        <span className="text-sm font-bold animate-pulse">SYSTEM WARNING</span>
                                    </div>
                                    <h3 className="text-3xl font-bold text-white mb-2">
                                        CO-PILOT<br />
                                        AUTHORIZATION
                                    </h3>
                                    <p className="text-gray-400 text-sm">
                                        AI制御権限を付与します。<br />
                                        定員に達し次第、アクセスは遮断されます。
                                    </p>
                                </div>

                                <div className="bg-black/40 p-4 border border-cyber-green/10 rounded">
                                    <div className="flex justify-between text-xs text-gray-500 mb-2">
                                        <span>SESSION EXPIRES IN:</span>
                                    </div>
                                    <div className="flex gap-4 text-2xl font-bold text-cyber-gold font-mono tracking-widest">
                                        <div>0{timeLeft.hours}</div>
                                        <div className="animate-pulse">:</div>
                                        <div>{timeLeft.minutes < 10 ? `0${timeLeft.minutes}` : timeLeft.minutes}</div>
                                        <div className="animate-pulse">:</div>
                                        <div>{timeLeft.seconds < 10 ? `0${timeLeft.seconds}` : timeLeft.seconds}</div>
                                    </div>
                                </div>
                            </div>

                            {/* Right: The "Key" (Offer Details) */}
                            <div className="flex flex-col justify-center items-center text-center">
                                <div className="w-full bg-cyber-green/5 border border-cyber-green/30 p-6 rounded-lg relative group hover:bg-cyber-green/10 transition-colors">
                                    {/* Corner Accents */}
                                    <div className="absolute top-0 left-0 w-2 h-2 border-t-2 border-l-2 border-cyber-green"></div>
                                    <div className="absolute top-0 right-0 w-2 h-2 border-t-2 border-r-2 border-cyber-green"></div>
                                    <div className="absolute bottom-0 left-0 w-2 h-2 border-b-2 border-l-2 border-cyber-green"></div>
                                    <div className="absolute bottom-0 right-0 w-2 h-2 border-b-2 border-r-2 border-cyber-green"></div>

                                    <div className="mb-4 text-cyber-green">
                                        <Key size={32} className="mx-auto" />
                                    </div>
                                    <div className="text-3xl font-bold text-white mb-2 font-mono">
                                        ¥4,980
                                    </div>
                                    <div className="text-xs text-gray-400 mb-6 font-mono">
                                        TOKEN-ID: #8X-99<br />
                                        TYPE: SINGLE_SESSION
                                    </div>

                                    <Link href="/cyber/application" className="w-full py-3 bg-cyber-green hover:bg-emerald-400 text-black font-bold tracking-widest uppercase transition-all shadow-[0_0_20px_rgba(0,255,65,0.4)] block">
                                        Execute Sequence
                                    </Link>
                                </div>
                                <div className="flex items-center gap-2 mt-4 text-[10px] text-gray-500 uppercase tracking-widest">
                                    <ShieldCheck size={12} />
                                    Secure Encrypted Connection
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default OfferSection;
