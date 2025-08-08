'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

// window.gtag için uygun ve güvenli bir type tanımı
type GtagFunction = (
  command: 'event' | 'config' | string,
  eventNameOrId: string,
  params?: Record<string, unknown>
) => void;

declare global {
  interface Window {
    gtag: GtagFunction;
  }
}

export function AnalyticsTracker() {
  const pathname = usePathname();

  useEffect(() => {
    if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
      window.gtag('event', 'page_view', {
        page_path: pathname,
        page_title: document.title,
        screen_name: document.title,
      });
    }
  }, [pathname]);

  return null;
}
