"use client";

import React from 'react';
import { BookingFlow } from '@/components/features/booking/BookingFlow';
import CyberThreeBackground from '@/components/cyber/CyberThreeBackground';

export default function CyberBookingPage() {
    return (
        <div className="relative min-h-screen bg-cyber-black text-white font-mono selection:bg-cyber-green selection:text-black">
            <CyberThreeBackground />

            <div className="relative z-10 pt-24 pb-12 px-6">
                <BookingFlow serviceId="Cyber" theme="cyber" />
            </div>
        </div>
    );
}
