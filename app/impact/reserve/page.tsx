"use client";

import React from 'react';
import { BookingFlow } from '@/components/features/booking/BookingFlow';
import ImpactThreeBackground from '@/components/impact/ImpactThreeBackground';

export default function ImpactBookingPage() {
    return (
        <div className="relative min-h-screen text-gray-900 bg-white">
            <ImpactThreeBackground />

            <div className="relative z-10 pt-24 pb-12 px-6">
                <BookingFlow serviceId="Impact" theme="impact" />
            </div>
        </div>
    );
}
