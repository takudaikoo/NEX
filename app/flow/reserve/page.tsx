"use client";

import React from 'react';
import { BookingFlow } from '@/components/features/booking/BookingFlow';
import FlowThreeBackground from '@/components/flow/FlowThreeBackground';

export default function FlowBookingPage() {
    return (
        <div className="relative min-h-screen bg-tech-navy text-white font-noto-sans selection:bg-tech-cyan selection:text-tech-navy">
            {/* Background Layer - Fixed to viewport */}
            <div className="fixed inset-0 z-0 pointer-events-none">
                <FlowThreeBackground />
            </div>

            <div className="relative z-10 pt-24 pb-12 px-6">
                <BookingFlow serviceId="Flow" theme="flow" />
            </div>
        </div>
    );
}
