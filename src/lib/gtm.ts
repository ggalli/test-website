type WindowWithDataLayer = Window & {
  dataLayer: Record<string, any>[];
};

declare const window: WindowWithDataLayer;

export const GTM_ID = process.env.NEXT_PUBLIC_GOOGLE_TAG_MANAGER_ID;

export const pageview = (url: string) => {
  if (typeof window.dataLayer === 'undefined') return;

  window.dataLayer.push({
    event: 'pageview',
    page: url,
  });
};
