"use client";

import React from 'react';
import { GeneratedContent } from '../types';
import FlowThreeBackground from './flow/FlowThreeBackground';
import { TargetUserSection, FirstOfferSection, ProblemSection, SolutionSection, USPSection, WorksSection, UseCaseMatrix } from './flow/FlowLPComponents';
import { HeroSection, SocialProofSection, StorySection, AuthoritySection, FlowSimulationSection, FAQSection, FooterCTA } from './flow/FlowConsultationComponents';
import { X } from 'lucide-react';
import Link from 'next/link';

interface Props {
    content: GeneratedContent; // Kept for compatibility, though we use static LP content
}

const PatternFlow: React.FC<Props> = ({ content }) => {
    return (
        <div className="min-h-screen bg-tech-navy text-white font-noto-sans relative selection:bg-tech-cyan selection:text-tech-navy">

            {/* Background Layer - Fixed to viewport */}
            <div className="fixed inset-0 z-0 pointer-events-none">
                <FlowThreeBackground />
            </div>

            {/* Navigation / Header Area */}
            <nav className="fixed top-0 left-0 w-full p-6 flex justify-between items-center z-50 pointer-events-none">
                <div className="text-xl md:text-2xl font-montserrat font-bold tracking-wide text-white pointer-events-auto">
                    Tech<span className="text-tech-cyan">Curator</span>
                </div>

                <Link
                    href="/"
                    className="px-6 py-2 bg-white/5 hover:bg-white/20 backdrop-blur-md rounded-full border border-white/10 text-sm font-light tracking-wide transition-all flex items-center gap-2 group pointer-events-auto"
                >
                    <span>戻る</span>
                    <X size={14} className="opacity-70 group-hover:opacity-100" />
                </Link>
            </nav>

            {/* Main Scrollable Content */}
            <main className="relative z-10 flex flex-col min-h-screen">

                {/* Section 1: First View (Hero) */}
                <HeroSection />

                {/* Section 1.5: Target User (NEW) */}
                <TargetUserSection />

                {/* Section 2: First Offer (Hook) */}
                <FirstOfferSection />

                {/* Section 3 & 4: Problem & Agitation */}
                <ProblemSection />

                {/* Section 5 & 6: Solution & Comparison */}
                <SolutionSection />

                {/* Section 7: USP */}
                <USPSection />

                {/* Section 8: Works (Refactored) */}
                <WorksSection />

                {/* Section 9: Use Case Matrix */}
                <UseCaseMatrix />

                {/* Section 10: Social Proof */}
                <SocialProofSection />

                {/* Section 11: Story (Philosophy) */}
                <StorySection />

                {/* Section 12: Authority */}
                <AuthoritySection />

                {/* Section 13: Flow Simulation */}
                <FlowSimulationSection />

                {/* Section 14: FAQ */}
                <FAQSection />

                {/* Section 15: Footer CTA */}
                <FooterCTA />

            </main>
        </div>
    );
};

export default PatternFlow;
