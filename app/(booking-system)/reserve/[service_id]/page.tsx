"use client";

import React, { useState, useEffect, use } from 'react';
import { useRouter } from 'next/navigation';
import { BookingCalendar } from '@/components/features/booking/Calendar';
import { TimeSlotPicker } from '@/components/features/booking/TimeSlotPicker';
import { BookingForm, BookingFormData } from '@/components/features/booking/BookingForm';
import { createClient } from '@/lib/supabase'; // Client-side import if needed, but let's stick to API calls for logic
import { supabase } from '@/lib/supabase';

// Mock service data for initial dev (replace with fetch from DB)
// or fetch from 'booking_services' if seeded
interface ServiceConfig {
    id: string;
    name: string;
    description: string;
    duration: number;
    price: number;
}

// Helper for availability range
const getAvailabilityRange = () => {
    const now = new Date();
    // Min Date: Today (Logic for "2 hours later" handled in API for slots, but for Calendar, we enable Today unless it's too late)
    // If it's past 22:00, basically today is over for booking? 
    // Let's just set minDate to today. API filters slots.
    const minDate = new Date();

    // Max Date: End of next month
    const maxDate = new Date(now.getFullYear(), now.getMonth() + 2, 0); // Day 0 of month+2 = Last day of month+1

    return { minDate, maxDate };
};

export default function BookingPage(props: { params: Promise<{ service_id: string }> }) {
    const params = use(props.params);
    const router = useRouter();
    const [step, setStep] = useState<1 | 2 | 3>(1);
    const [selectedDate, setSelectedDate] = useState<Date | null>(null);
    const [selectedSlot, setSelectedSlot] = useState<Date | null>(null);
    const [availableSlots, setAvailableSlots] = useState<Date[]>([]);
    const [isLoadingSlots, setIsLoadingSlots] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const range = getAvailabilityRange();

    // Service State
    const [service, setService] = useState<ServiceConfig | null>(null);
    const [error, setError] = useState<string | null>(null);

    // Fetch Service Info
    useEffect(() => {
        async function fetchService() {
            // Ideally fetch from API or DB. 
            // For now, let's look up from Supabase directly or hardcode fallback if DB empty
            // Using logic: if DB empty, show fallback for dev

            const { data, error } = await supabase
                .from('booking_services')
                .select('*')
                .eq('id', params.service_id)
                .single();

            if (data) {
                setService({
                    id: data.id,
                    name: data.name,
                    description: data.description,
                    duration: data.duration_minutes,
                    price: data.price
                });
            } else {
                // Fallback for demo/dev if DB not seeded
                console.warn("Service not found in DB, using fallback mock data.");
                setService({
                    id: params.service_id,
                    name: params.service_id === 'ai-consult' ? 'AI導入コンサルティング' :
                        params.service_id === 'clinic' ? 'スポーツクリニック初診' : 'システム開発相談',
                    description: '初回オンライン面談（Zoom/Google Meet）',
                    duration: 60,
                    price: params.service_id === 'ai-consult' ? 10000 : 5000 // Mock prices
                });
            }
        }
        fetchService();
    }, [params.service_id]);

    // Fetch availability when date selected
    useEffect(() => {
        if (!selectedDate || !service) return;

        async function fetchAvailability() {
            setIsLoadingSlots(true);
            setAvailableSlots([]); // Clear prev

            try {
                // Call API
                const res = await fetch(`/api/booking/availability?serviceId=${service!.id}&date=${selectedDate!.toISOString()}`);
                if (!res.ok) throw new Error('Failed to fetch slots');
                const data = await res.json();

                // Convert string dates back to Date objects
                const slots = data.slots.map((s: string) => new Date(s));
                setAvailableSlots(slots);
            } catch (err) {
                console.error(err);
                // Mock slots for dev if API fails (e.g. no GCal keys)
                // Generate slots from 10:00 to 18:00
                const mockSlots = [];
                for (let i = 10; i < 18; i++) {
                    const d = new Date(selectedDate!);
                    d.setHours(i, 0, 0, 0);
                    mockSlots.push(d);
                }
                setAvailableSlots(mockSlots);
            } finally {
                setIsLoadingSlots(false);
            }
        }
        fetchAvailability();
    }, [selectedDate, service]);

    const handleDateSelect = (date: Date) => {
        setSelectedDate(date);
        setSelectedSlot(null);
        setStep(1); // Stay on step 1 (calendar view) but show slots
    };

    const handleSlotSelect = (slot: Date) => {
        setSelectedSlot(slot);
    };

    const handleProceed = () => {
        if (!selectedSlot || !service) return;

        const params = new URLSearchParams();
        params.set('service_id', service.id);
        params.set('start_time', selectedSlot.toISOString());
        params.set('service_name', service.name);

        router.push(`/impact/application?${params.toString()}`);
    };

    if (!service) return <div className="p-8 text-center animate-pulse">読み込み中...</div>;

    return (
        <div className="max-w-4xl mx-auto space-y-8 pb-32">
            <div className="text-center space-y-4">
                <h1 className="text-3xl font-bold text-gray-900">{service.name}</h1>
                <p className="text-gray-500">{service.description}</p>
                <div className="inline-block bg-gray-100 rounded-full px-4 py-1 text-sm text-gray-600">
                    所要時間: {service.duration}分 / 料金: ¥{service.price.toLocaleString()}
                </div>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 max-w-2xl mx-auto">
                <h2 className="text-lg font-bold border-l-4 border-impact-red pl-3 mb-6">
                    日時を選択してください
                </h2>
                <div className="space-y-6">
                    <BookingCalendar
                        selectedDate={selectedDate}
                        onSelectDate={handleDateSelect}
                        minDate={range.minDate}
                        maxDate={range.maxDate}
                    />

                    {selectedDate && (
                        <div className="mt-4 pt-4 border-t border-gray-100">
                            <h3 className="text-sm font-bold text-gray-700 mb-4 flex items-center gap-2">
                                <span className="w-2 h-2 rounded-full bg-impact-red"></span>
                                {selectedDate.toLocaleDateString('ja-JP')} の空き状況
                            </h3>
                            <TimeSlotPicker
                                slots={availableSlots}
                                selectedSlot={selectedSlot}
                                onSelectSlot={handleSlotSelect}
                                isLoading={isLoadingSlots}
                            />
                        </div>
                    )}
                </div>
            </div>

            {/* Bottom Action Bar */}
            <div className={`fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)] transition-transform duration-300 transform z-50 ${selectedSlot ? 'translate-y-0' : 'translate-y-full'}`}>
                <div className="max-w-4xl mx-auto flex items-center justify-between">
                    <div className="hidden md:block">
                        <p className="text-sm text-gray-500">選択中の日時</p>
                        <p className="font-bold text-lg text-gray-900">
                            {selectedSlot ? selectedSlot.toLocaleString('ja-JP', { month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit' }) : '-'}
                        </p>
                    </div>
                    <button
                        onClick={handleProceed}
                        className="w-full md:w-auto px-8 py-3 bg-impact-red text-white font-bold rounded-full hover:bg-red-600 transition-colors shadow-lg flex items-center justify-center gap-2"
                    >
                        予約情報の入力に進む
                        <span>→</span>
                    </button>
                </div>
            </div>
        </div>
    );
}
