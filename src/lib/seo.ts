import type { MetaDescriptor } from 'react-router';

export const SITE_URL = 'https://mayacalc.danielrogowski.net';
export const SITE_NAME = 'Maya Numeral Converter';
export const OG_IMAGE_URL = `${SITE_URL}/og-image.png`;
const OG_IMAGE_ALT = 'Maya Numeral Converter showing 365 as Maya numerals with its base-20 breakdown';

type PageMeta = {
  title: string;
  description: string;
  /** Path starting with "/", used for canonical and og:url. Omit for pages that must not be indexed. */
  path?: string;
  noindex?: boolean;
};

/**
 * React Router replaces (does not merge) parent meta, so every route builds its full tag set here.
 */
export function buildMeta({ title, description, path, noindex = false }: PageMeta): MetaDescriptor[] {
  const canonicalUrl = path ? `${SITE_URL}${path}` : undefined;
  const robots = noindex ? 'noindex, follow' : 'index, follow, max-image-preview:large';

  const tags: MetaDescriptor[] = [
    { title },
    { name: 'description', content: description },
    { name: 'robots', content: robots },
    { name: 'author', content: 'Daniel Rogowski' },
    { name: 'application-name', content: SITE_NAME },
    { property: 'og:type', content: 'website' },
    { property: 'og:site_name', content: SITE_NAME },
    { property: 'og:locale', content: 'en_US' },
    { property: 'og:title', content: title },
    { property: 'og:description', content: description },
    { property: 'og:image', content: OG_IMAGE_URL },
    { property: 'og:image:type', content: 'image/png' },
    { property: 'og:image:width', content: '1200' },
    { property: 'og:image:height', content: '630' },
    { property: 'og:image:alt', content: OG_IMAGE_ALT },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: title },
    { name: 'twitter:description', content: description },
    { name: 'twitter:image', content: OG_IMAGE_URL },
    { name: 'twitter:image:alt', content: OG_IMAGE_ALT },
  ];

  if (canonicalUrl) {
    tags.push({ tagName: 'link', rel: 'canonical', href: canonicalUrl });
    tags.push({ property: 'og:url', content: canonicalUrl });
  }

  return tags;
}
