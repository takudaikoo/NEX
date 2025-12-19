"use client";

import React from 'react';
import { GeneratedContent } from '../types';
import ImpactThreeBackground from './impact/ImpactThreeBackground';
import HeroSection from './impact/HeroSection';
import OfferSection from './impact/OfferSection';
import ProblemAgitationSection from './impact/ProblemAgitationSection';
import SolutionSection from './impact/SolutionSection';
import ComparisonSection from './impact/ComparisonSection';
import USPSection from './impact/USPSection';
import BeforeAfterSection from './impact/BeforeAfterSection';
import SocialProofSection from './impact/SocialProofSection';
import VisionAuthoritySection from './impact/VisionAuthoritySection';
import FlowSection from './impact/FlowSection';
import FAQSection from './impact/FAQSection';
import Footer from './impact/Footer';

interface Props {
    content: GeneratedContent;
}

const PatternImpact: React.FC<Props> = ({ content }) => {
    return (
        <div className="min-h-screen bg-[#050505] text-white font-sans overflow-x-hidden relative">

            {/* Shared Background */}
            <ImpactThreeBackground />

            {/* Content Sections */}
            <HeroSection />
            <OfferSection />
            <ProblemAgitationSection />
            <SolutionSection />
            <ComparisonSection />
            <USPSection />
            <BeforeAfterSection />
            <SocialProofSection />
            <VisionAuthoritySection />
            <FlowSection />
            <FAQSection />
            <Footer />

        </div>
    );
};

export default PatternImpact;
