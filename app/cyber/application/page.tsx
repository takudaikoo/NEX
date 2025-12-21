import React from 'react';
import ApplicationForm from '@/components/cyber/ApplicationForm';
import CyberThreeBackground from '@/components/cyber/CyberThreeBackground';
import Footer from '@/components/cyber/Footer';

export const metadata = {
    title: 'お申し込み | Online Motion Audit',
    description: 'オンライン動作解析のお申し込みフォームです。',
};

export default function ApplicationPage() {
    return (
        <div className="relative min-h-screen bg-cyber-black text-white selection:bg-cyber-green selection:text-black">
            {/* Background */}
            <CyberThreeBackground />

            <main className="relative z-10 container mx-auto px-6 py-24">
                <div className="text-center mb-12">
                    <h1 className="text-4xl md:text-5xl font-bold font-noto-sans text-white mb-4">
                        APPLICATION
                    </h1>
                    <p className="text-white/60">30分ハンズオンサポート お申込みフォーム</p>
                </div>

                <ApplicationForm />
            </main>

            {/* Footer */}
            <div className="relative z-10">
                <Footer isApplicationPage={true} />
            </div>
        </div>
    );
}
