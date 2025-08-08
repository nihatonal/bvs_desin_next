'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

// window.gtag için TypeScript tanımı
declare global {
  interface Window {
    gtag: (...args: any[]) => void;
  }
}

export function AnalyticsTracker() {
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
