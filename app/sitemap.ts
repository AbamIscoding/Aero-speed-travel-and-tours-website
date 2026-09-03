import type { MetadataRoute } from 'next';
import { SITE_URL } from '@/lib/seo';

const routes = [
  '',
  '/about',
  '/careers',
  '/contact',
  '/destinations',
  '/faqs',
  '/itbayat',
  '/packages',
  '/privacy',
  '/reviews',
  '/sustainability',
  '/travel-guide',
] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((path) => ({
    url: `${SITE_URL}${path}`,
    lastModified: new Date(),
    changeFrequency: path === '' ? 'weekly' : 'monthly',
    priority: path === '' ? 1 : path === '/packages' || path === '/destinations' ? 0.9 : 0.6,
  }));
}
