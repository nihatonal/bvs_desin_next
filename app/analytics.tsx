// app/analytics.tsx
'use client';

import { usePathname } from 'next/navigation';
import { useEffect } from 'react';

export default function Analytics() {
    const pathname = usePathname();

    useEffect(() => {
        if (typeof window.gtag === 'function') {
            window.gtag('event', 'page_view', {
                page_path: pathname,
                page_title: document.title,
                screen_name: document.title,
            });
        }
    }, [pathname]);

    return null;
}
