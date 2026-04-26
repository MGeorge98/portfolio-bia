import type { MetadataRoute } from 'next';
import { projects } from '@/data/projects';

const BASE = 'https://bia.studio';

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return [
    { url: `${BASE}/`, lastModified: now, changeFrequency: 'monthly', priority: 1 },
    ...projects.map((p) => ({
      url: `${BASE}${p.href}`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    })),
  ];
}
