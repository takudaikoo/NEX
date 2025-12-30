"use client";

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { BookingCalendar } from '@/components/features/booking/Calendar';
import { TimeSlotPicker } from '@/components/features/booking/TimeSlotPicker';
import { supabase } from '@/lib/supabase';

interface ServiceConfig {
    id: string;
    name: string;
    description: string;
    duration: number;
    price: number;
}

type Theme = 'impact' | 'cyber' | 'flow';

interface BookingFlowProps {
    serviceId: string;
    theme?: Theme;
}

const getAvailabilityRange = () => {
    const now = new Date();
    const minDate = new Date();
    const maxDate = new Date(now.getFullYear(), now.getMonth() + 2, 0);
    return { minDate, maxDate };
};

export const BookingFlow: React.FC<BookingFlowProps> = ({ serviceId, theme = 'impact' }) => {
    const router = useRouter();
    const [selectedDate, setSelectedDate] = useState<Date | null>(null);
    const [selectedSlot, setSelectedSlot] = useState<Date | null>(null);
    const [availableSlots, setAvailableSlots] = useState<Date[]>([]);
    const [isLoadingSlots, setIsLoadingSlots] = useState(false);

    // Service State
    const [service, setService] = useState<ServiceConfig | null>(null);

    const range = getAvailabilityRange();

    // Theme Config
    const themeColors = {
        impact: {
            text: 'text-gray-900',
            subText: 'text-gray-500',
            bg: 'bg-white',
            accent: 'bg-impact-red',
            accentText: 'text-impact-red',
            border: 'border-impact-red',
            button: 'bg-impact-red text-white hover:bg-red-600',
            card: 'bg-white border-gray-100 shadow-sm'
        },
        cyber: {
            text: 'text-white',
            subText: 'text-gray-400',
            bg: 'bg-transparent', // Handled by parent
            accent: 'bg-cyber-green',
            accentText: 'text-cyber-green',
            border: 'border-cyber-green',
            button: 'bg-cyber-green text-black hover:scale-105',
            card: 'bg-black/80 border-cyber-green/30 shadow-[0_0_15px_rgba(0,255,65,0.2)]'
        },
        flow: {
            text: 'text-white',
            subText: 'text-gray-300',
            bg: 'bg-transparent',
            accent: 'bg-tech-cyan',
            accentText: 'text-tech-cyan',
            border: 'border-tech-cyan',
            button: 'bg-tech-cyan text-tech-navy hover:bg-cyan-400',
            card: 'bg-tech-navy/80 border-tech-cyan/30 shadow-[0_0_15px_rgba(0,200,255,0.2)]'
        }
    };

    const styles = themeColors[theme];

    // Fetch Service Info
    useEffect(() => {
        async function fetchService() {
            const { data, error } = await supabase
                .from('booking_services')
                .select('*')
                .eq('id', serviceId)
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
                // Determine fallback based on serviceId/theme logic if needed
                setService({
                    id: serviceId,
                    name: serviceId === 'ai-consult' ? 'AI導入コンサルティング' :
                        serviceId === 'Impact' ? '初回動作解析' :
                            serviceId === 'Flow' ? '業務改善の無料相談' :
                                serviceId === 'Cyber' ? '体験ハンズオン' : 'システム開発相談',
                    description: serviceId === 'Impact' ? '動作解析に基づく診断と解決方針の決定' :
                        serviceId === 'Flow' ? '業務効率化診断と対策方針の決定' :
                            serviceId === 'Cyber' ? 'AI導入・システム開発に関するハンズオンサポート' : '初回オンライン面談（Zoom/Google Meet）',
                    duration: serviceId === 'Flow' || serviceId === 'Cyber' ? 30 : 60,
                    price: serviceId === 'Impact' ? 8000 : 0
                });
            }
        }
        fetchService();
    }, [serviceId]);

    // Fetch availability
    useEffect(() => {
        if (!selectedDate || !service) return;

        async function fetchAvailability() {
            setIsLoadingSlots(true);
            setAvailableSlots([]);

            try {
                const res = await fetch(`/api/booking/availability?serviceId=${service!.id}&date=${selectedDate!.toISOString()}`);
                if (!res.ok) throw new Error('Failed to fetch slots');
                const data = await res.json();
                const slots = data.slots.map((s: string) => new Date(s));
                setAvailableSlots(slots);
            } catch (err) {
                console.error(err);
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
    };

    const handleSlotSelect = (slot: Date) => {
        // Just set state, no auto redirect
        setSelectedSlot(slot);
    };

    const handleProceed = () => {
        if (!selectedSlot || !service) return;

        const params = new URLSearchParams();
        params.set('service_id', service.id);
        params.set('start_time', selectedSlot.toISOString());
        params.set('service_name', service.name);
        params.set('price', service.price.toString());

        let path = '/impact/application';
        if (theme === 'cyber') path = '/cyber/application';
        if (theme === 'flow') path = '/flow/consultation';

        router.push(`${path}?${params.toString()}`);
    };

    if (!service) return <div className={`p-8 text-center animate-pulse ${styles.text}`}>読み込み中...</div>;

    return (
        <div className="max-w-4xl mx-auto space-y-8 pb-32">
            <div className="text-center space-y-4">
                <h1 className={`text-3xl font-bold ${styles.text}`}>{service.name}</h1>
                <p className={styles.subText}>{service.description}</p>
                <div className={`inline-block rounded-full px-4 py-1 text-sm ${theme === 'impact' ? 'bg-gray-100 text-gray-600' : 'bg-white/10 text-white'}`}>
                    所要時間: {service.duration}分 / 料金: ¥{service.price.toLocaleString()}
                </div>
            </div>

            <div className={`p-6 rounded-2xl border ${styles.card}`}>
                <h2 className={`text-lg font-bold border-l-4 pl-3 mb-6 ${styles.border} ${styles.text}`}>
                    日時を選択してください
                </h2>
                <div className="space-y-6">
                    <BookingCalendar
                        selectedDate={selectedDate}
                        onSelectDate={handleDateSelect}
                        minDate={range.minDate}
                        maxDate={range.maxDate}
                        theme={theme}
                    />

                    {selectedDate && (
                        <div className={`mt-4 pt-4 border-t ${theme === 'impact' ? 'border-gray-100' : 'border-white/10'}`}>
                            <h3 className={`text-sm font-bold mb-4 flex items-center gap-2 ${styles.text}`}>
                                <span className={`w-2 h-2 rounded-full ${styles.accent}`}></span>
                                {selectedDate.toLocaleDateString('ja-JP')} の空き状況
                            </h3>
                            <TimeSlotPicker
                                slots={availableSlots}
                                selectedSlot={selectedSlot}
                                onSelectSlot={handleSlotSelect}
                                isLoading={isLoadingSlots}
                                theme={theme}
                            />
                        </div>
                    )}
                </div>
            </div>

            {/* Bottom Action Bar */}
            <div className={`fixed bottom-0 left-0 right-0 border-t p-4 shadow-2xl transition-transform duration-300 transform z-50 ${selectedSlot ? 'translate-y-0' : 'translate-y-full'} ${theme === 'impact' ? 'bg-white border-gray-200' : theme === 'cyber' ? 'bg-black border-cyber-green' : 'bg-tech-navy border-tech-cyan'}`}>
                <div className="max-w-4xl mx-auto flex items-center justify-between">
                    <div className="hidden md:block">
                        <p className={`text-sm ${styles.subText}`}>選択中の日時</p>
                        <p className={`font-bold text-lg ${styles.text}`}>
                            {selectedSlot ? selectedSlot.toLocaleString('ja-JP', { month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit' }) : '-'}
                        </p>
                    </div>
                    <button
                        onClick={handleProceed}
                        className={`w-full md:w-auto px-8 py-3 font-bold rounded-full transition-all shadow-lg flex items-center justify-center gap-2 ${styles.button}`}
                    >
                        予約情報の入力に進む
                        <span>→</span>
                    </button>
                </div>
            </div>
        </div>
    );
};
