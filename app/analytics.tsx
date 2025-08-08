'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

export function AnalyticsTracker() {
  const pathname = usePathname();

  useEffect(() => {
    const gtag = window.gtag || function () {};
    gtag('event', 'page_view', {
      page_path: pathname,
      page_title: document.title,
      screen_name: document.title,
    });
  }, [pathname]);

  return null;
}
