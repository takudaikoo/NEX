"use client";

import React from 'react';
import CyberThreeBackground from './cyber/CyberThreeBackground';
import HeroSection from './cyber/HeroSection';
import OfferSection from './cyber/OfferSection';
import ProblemAgitationSection from './cyber/ProblemAgitationSection';
import SolutionSection from './cyber/SolutionSection';
import ComparisonSection from './cyber/ComparisonSection';
import USPSection from './cyber/USPSection';
import BeforeAfterSection from './cyber/BeforeAfterSection';
import SocialProofSection from './cyber/SocialProofSection';
import VisionAuthoritySection from './cyber/VisionAuthoritySection';
import FlowSection from './cyber/FlowSection';
import FAQSection from './cyber/FAQSection';
import Footer from './cyber/Footer';
import { GeneratedContent } from '@/types';

const PatternCyber: React.FC<{ content: GeneratedContent }> = ({ content }) => {
    return (
        <div className="relative min-h-screen bg-cyber-midnight text-white selection:bg-cyber-vermilion selection:text-white overflow-hidden">
            {/* 3D Background */}
            <CyberThreeBackground />

            {/* Main Content (Relative z-10 to sit above background) */}
            <main className="relative z-10">
                <HeroSection />{/* FV */}
                <OfferSection />{/* Ticket Offer */}
                <ProblemAgitationSection />{/* Empathy & Enemy */}
                <SolutionSection />{/* The Solution */}
                <ComparisonSection />{/* Competitors */}
                <USPSection />{/* 3 Reasons */}
                <BeforeAfterSection />{/* Case Study */}
                <SocialProofSection />{/* Testimonials */}
                <VisionAuthoritySection />{/* Vision & Trust */}
                <FlowSection />{/* Steps */}
                <FAQSection />{/* FAQ */}
            </main>

            {/* Footer */}
            <div className="relative z-10">
                <Footer />
            </div>

            {/* Chat Widget Placeholder (Optional) */}
            <div className="fixed bottom-6 right-6 z-50">
                <button className="bg-cyber-vermilion text-white p-4 rounded-full shadow-lg hover:scale-110 transition-transform">
                    <span className="font-bold text-xl">?</span>
                </button>
            </div>
        </div>
    );
};

export default PatternCyber;
