import React from 'react';
import HeroSection from '@/components/impact/HeroSection';
import EmpathySection from '@/components/impact/EmpathySection';
import CauseSection from '@/components/impact/CauseSection';
import ImpactTheorySection from '@/components/impact/ImpactTheorySection';
import TargetSection from '@/components/impact/TargetSection';
import SessionDetailsSection from '@/components/impact/SessionDetailsSection';
import FAQSection from '@/components/impact/FAQSection';
import Footer from '@/components/impact/Footer';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

import ImpactThreeBackground from '@/components/impact/ImpactThreeBackground';

export const metadata = {
    title: 'Impact Analysis | 動作解析サービス',
    description: '感覚の限界を「物理」で突破する。動作そのものではなく「動作が始まる前の身体条件」を解析するサービスです。',
};

export default function Page() {
    return (
        <div className="relative text-gray-900 selection:bg-impact-red selection:text-white overflow-x-hidden min-h-screen">

            {/* 3D Background */}
            <ImpactThreeBackground />

            {/* 1. Hero */}
            <HeroSection />

            {/* 2. Empathy (Problems) */}
            <EmpathySection />

            {/* 3. Cause (Root Cause) */}
            <CauseSection />

            {/* 4. Theory (What is Impact) */}
            <ImpactTheorySection />

            {/* 5. Target Audience */}
            <TargetSection />

            {/* 6. Session Content & Benefits */}
            <SessionDetailsSection />

            {/* 7. CTA Section */}
            <section className="relative z-10 py-24 px-6 md:px-12 bg-impact-red text-white text-center">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-3xl md:text-5xl font-bold font-noto-sans mb-6">
                        まずは、自分の動作の土台を知る
                    </h2>
                    <p className="text-lg md:text-xl text-white/90 mb-12 max-w-3xl mx-auto leading-relaxed">
                        初回セッションは、治療やトレーニングを受ける場ではありません。<br />
                        自身の身体条件や動作の前提を整理し、<br />
                        今後の競技や日常動作をどう捉え、どう向き合うかを考えるための時間です。
                    </p>
                    <Link href="/impact/application" className="inline-flex items-center gap-3 px-10 py-5 bg-white text-impact-red font-bold text-xl rounded-full hover:bg-black hover:text-white transition-all duration-300 shadow-xl">
                        体験セッションを予約する
                        <ArrowRight size={24} />
                    </Link>
                </div>
            </section>

            {/* 8. FAQ */}
            <FAQSection />

            {/* 9. Footer */}
            <Footer />
        </div>
    );
}
