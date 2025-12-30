"use client";

import React from 'react';
import { User, Users, GraduationCap } from 'lucide-react';

const TargetSection: React.FC = () => {
    const targets = [
        {
            icon: <User size={32} />,
            text: "ゴルフ・野球など回旋動作が必要な競技アスリート（高校生以上推奨）",
            color: "text-impact-red"
        },
        {
            icon: <Users size={32} />,
            text: "姿勢や身体の使い方を見直したい一般競技者",
            color: "text-tech-cyan"
        },
        {
            icon: <GraduationCap size={32} />,
            text: "感覚論や根性論に頼りたくない学生指導者",
            color: "text-tech-yellow"
        }
    ];

    return (
        <section className="relative z-10 py-24 px-6 md:px-12 bg-zinc-950">
            <div className="max-w-4xl mx-auto">
                <div className="text-center mb-16">
                    <span className="text-impact-red text-sm font-mono tracking-widest border border-impact-red/30 px-3 py-1 rounded mb-4 inline-block">TARGET</span>
                    <h2 className="text-3xl font-bold font-noto-sans text-white">こんな方に向いています</h2>
                </div>

                <div className="space-y-4">
                    {targets.map((target, index) => (
                        <div key={index} className="flex items-center gap-6 p-6 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 transition-colors duration-300 group">
                            <div className={`p-4 rounded-full bg-black border border-white/10 ${target.color} group-hover:scale-110 transition-transform duration-300`}>
                                {target.icon}
                            </div>
                            <p className="text-lg text-gray-200 font-medium">
                                {target.text}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TargetSection;
