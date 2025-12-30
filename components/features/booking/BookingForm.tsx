
"use client";

import React, { useState } from 'react';
import { Loader2 } from 'lucide-react';

interface BookingFormProps {
    onSubmit: (data: BookingFormData) => Promise<void>;
    isSubmitting: boolean;
    serviceName: string;
    price: number;
}

export interface BookingFormData {
    name: string;
    email: string;
    notes: string;
}

export const BookingForm: React.FC<BookingFormProps> = ({ onSubmit, isSubmitting, serviceName, price }) => {
    const [formData, setFormData] = useState<BookingFormData>({
        name: '',
        email: '',
        notes: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSubmit(formData);
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-6 bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <h3 className="text-lg font-bold text-gray-900 border-b pb-4 mb-4">
                お客様情報入力 <span className="text-sm font-normal text-gray-500 ml-2">※{serviceName} (¥{price.toLocaleString()})</span>
            </h3>

            <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">お名前 <span className="text-red-500">*</span></label>
                <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-impact-red/20 focus:border-impact-red outline-none transition-all"
                    placeholder="山田 太郎"
                />
            </div>

            <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">メールアドレス <span className="text-red-500">*</span></label>
                <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-impact-red/20 focus:border-impact-red outline-none transition-all"
                    placeholder="example@email.com"
                />
            </div>

            <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">ご要望・備考</label>
                <textarea
                    name="notes"
                    value={formData.notes}
                    onChange={handleChange}
                    rows={3}
                    className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-impact-red/20 focus:border-impact-red outline-none transition-all"
                    placeholder="事前に伝えておきたいことがあればご記入ください"
                />
            </div>

            <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 bg-impact-red text-white font-bold rounded-full shadow-lg hover:shadow-xl hover:bg-black transition-all flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
            >
                {isSubmitting ? (
                    <>
                        <Loader2 className="animate-spin" />
                        処理中...
                    </>
                ) : (
                    '予約と決済に進む'
                )}
            </button>
        </form>
    );
};
