"use client";

import React from 'react';
import { Calendar, MessageSquare, Monitor, Map } from 'lucide-react';

const FlowSection: React.FC = () => {
    const steps = [
        {
            icon: <Calendar size={24} />,
            title: "お申し込み",
            desc: "カレンダーからご都合の良い日程を選択してください。1分で完了します。"
        },
        {
            icon: <MessageSquare size={24} />,
            title: "事前ヒアリング",
            desc: "現状の課題や「作りたいもの」を簡単に入力。漠然としていても大丈夫です。"
        },
        {
            icon: <Monitor size={24} />,
            title: "オンライン体験",
            desc: "30分のハンズオンセッション。実際に画面を共有しながら課題を解決します。"
        },
        {
            icon: <Map size={24} />,
            title: "ロードマップ提示",
            desc: "あなたの目指す姿への最短ルートを提示します。無理な売り込みは一切しません。"
        }
    ];

    return (
        <section className="py-24 px-6 bg-white text-cyber-midnight">
            <div className="container mx-auto max-w-5xl">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold font-noto-sans">ご予約は簡単です</h2>
                    <p className="text-gray-500 mt-4">Co-Pilotとのフライトプラン</p>
                </div>

                <div className="grid md:grid-cols-4 gap-8 relative">
                    {/* Connecting Line (Desktop) */}
                    <div className="hidden md:block absolute top-8 left-0 w-full h-0.5 bg-gray-200 -z-10"></div>

                    {steps.map((step, index) => (
                        <div key={index} className="relative bg-white pt-8 md:pt-0">
                            <div className="w-16 h-16 mx-auto bg-cyber-midnight text-white rounded-full flex items-center justify-center mb-6 shadow-lg relative z-10 border-4 border-white">
                                {step.icon}
                                <div className="absolute -top-2 -right-2 w-6 h-6 bg-cyber-gold text-cyber-midnight text-xs font-bold rounded-full flex items-center justify-center border-2 border-white">
                                    {index + 1}
                                </div>
                            </div>
                            <h3 className="text-lg font-bold text-center mb-3">{step.title}</h3>
                            <p className="text-sm text-gray-500 text-center leading-relaxed">
                                {step.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FlowSection;
