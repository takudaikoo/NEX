import React, { useState, useEffect } from 'react';
import PatternCyber from './components/PatternCyber';
import PatternImpact from './components/PatternImpact';
import PatternFlow from './components/PatternFlow';
import Gateway from './components/Gateway';
import { PatternType, GeneratedContent } from './types';
import { generateSiteContent } from './services/geminiService';

const App: React.FC = () => {
    // Start with no pattern selected (Home/Gateway view)
    const [currentPattern, setCurrentPattern] = useState<PatternType | null>(null);
    const [content, setContent] = useState<GeneratedContent | null>(null);
    const [loading, setLoading] = useState(false);

    const loadContent = async (pattern: PatternType) => {
        setLoading(true);
        // Reset content while loading new one, or keep old? Resetting feels more distinct.
        setContent(null);
        const data = await generateSiteContent(pattern);
        setContent(data);
        setLoading(false);
    };

    const handlePatternSelect = (pattern: PatternType) => {
        setCurrentPattern(pattern);
        loadContent(pattern);
    };

    const handleBack = () => {
        setCurrentPattern(null);
        setContent(null);
    };

    const renderView = () => {
        // 1. Gateway View
        if (!currentPattern) {
            return <Gateway onSelect={handlePatternSelect} />;
        }

        // 2. Loading State (Overlays the black background or a loader)
        if (loading || !content) {
            return (
                <div className="fixed inset-0 z-[90] bg-black flex items-center justify-center">
                    <div className="text-center">
                        <div className="text-white font-mono text-2xl animate-pulse mb-4">INITIALIZING SYSTEM...</div>
                        <div className="w-64 h-1 bg-gray-800 mx-auto rounded overflow-hidden">
                            <div className="h-full bg-white animate-progress"></div>
                        </div>
                        <style>{`
                            @keyframes progress {
                                0% { width: 0%; }
                                50% { width: 70%; }
                                100% { width: 100%; }
                            }
                            .animate-progress {
                                animation: progress 2s ease-in-out infinite;
                            }
                        `}</style>
                    </div>
                </div>
            );
        }

        // 3. Pattern Views
        switch (currentPattern) {
            case PatternType.CYBER:
                return <PatternCyber content={content} onBack={handleBack} />;
            case PatternType.IMPACT:
                return <PatternImpact content={content} onBack={handleBack} />;
            case PatternType.FLOW:
                return <PatternFlow content={content} onBack={handleBack} />;
            default:
                return null;
        }
    };

    return (
        <div className="relative">
            {renderView()}
        </div>
    );
};

export default App;