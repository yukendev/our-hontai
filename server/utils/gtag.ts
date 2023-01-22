import { useRouter } from 'next/router';
import { useEffect } from 'react';

export const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_ID ?? '';

export const pageview = (url: string) => {
  window.gtag('config', GA_MEASUREMENT_ID, {
    page_path: url,
  });
};

export const useGoogleAnalytics = () => {
  const router = useRouter();
  useEffect(() => {
    const handleRouterChange = (url: string) => {
      pageview(url);
    };
    router.events.on('routeChangeComplete', handleRouterChange);
    return () => {
      router.events.off('routeChangeComplete', handleRouterChange);
    };
  }, [router.events]);
};
