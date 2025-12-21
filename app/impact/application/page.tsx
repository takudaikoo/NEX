import React from 'react';
import ApplicationForm from '@/components/impact/ApplicationForm';
import ImpactThreeBackground from '@/components/impact/ImpactThreeBackground';
import Footer from '@/components/impact/Footer';

export const metadata = {
    title: 'お申し込み | Impact Analysis',
    description: '動作解析・コンサルティングのお申し込みフォームです。',
};

export default function ApplicationPage() {
    return (
        <div className="relative min-h-screen bg-white text-gray-900 selection:bg-impact-red selection:text-white">
            {/* Background */}
            <ImpactThreeBackground />

            <main className="relative z-10 container mx-auto px-6 py-24">
                <div className="text-center mb-12">
                    <h1 className="text-4xl md:text-5xl font-bold font-noto-sans text-gray-900 mb-4">
                        APPLICATION
                    </h1>
                    <p className="text-gray-500">初回動作解析・コンサルティング お申込みフォーム</p>
                </div>

                <ApplicationForm />
            </main>

            {/* Footer */}
            <div className="relative z-10">
                <Footer variant="application" />
            </div>
        </div>
    );
}
