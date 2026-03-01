"use client";

import { useState, useEffect, useRef, RefObject } from 'react';

interface UseActiveOnScrollOptions<T extends string> {
    keys: T[];
    rootMargin?: string;
    threshold?: number;
}

export function useActiveOnScroll<T extends string>(
    { keys, rootMargin = '-20% 0px -20% 0px', threshold = 0.6 }: UseActiveOnScrollOptions<T>
): { refs: Record<T, RefObject<HTMLElement | null>>; activeKey: T | null } {
    const [activeKey, setActiveKey] = useState<T | null>(null);

    const refs = {} as Record<T, RefObject<HTMLElement | null>>;
    const refsArray = useRef<RefObject<HTMLElement | null>[]>([]);

    if (refsArray.current.length !== keys.length) {
        refsArray.current = keys.map(() => ({ current: null }));
    }

    keys.forEach((key, i) => {
        refs[key] = refsArray.current[i];
    });

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const index = refsArray.current.findIndex(ref => ref.current === entry.target);
                        if (index !== -1) setActiveKey(keys[index]);
                    }
                });
            },
            { rootMargin, threshold }
        );

        refsArray.current.forEach(ref => {
            if (ref.current) observer.observe(ref.current);
        });

        return () => observer.disconnect();
    }, [keys, rootMargin, threshold]);

    return { refs, activeKey };
}
