import type { Metadata, Viewport } from 'next';
import { Fraunces, JetBrains_Mono } from 'next/font/google';
import Interactive from '@/components/Interactive';
import './globals.css';

const fraunces = Fraunces({
  subsets: ['latin'],
  variable: '--font-fraunces',
  display: 'swap',
  style: ['normal', 'italic'],
  weight: ['300', '400', '500'],
});

const jetbrains = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
  weight: ['400', '500'],
});

const SITE = 'https://bia.studio';
const TITLE = 'Bia Marques — Product Designer';
const DESCRIPTION =
  'Product designer crafting calm, carefully considered interfaces. Currently focused on financial tooling, design systems, and the slow art of making software feel inevitable.';

export const metadata: Metadata = {
  metadataBase: new URL(SITE),
  title: { default: TITLE, template: '%s — Bia Marques' },
  description: DESCRIPTION,
  applicationName: 'Bia Marques',
  authors: [{ name: 'Bia Marques' }],
  creator: 'Bia Marques',
  keywords: [
    'product design',
    'interaction design',
    'design systems',
    'fintech design',
    'editorial design',
    'Lisbon designer',
    'Bia Marques',
  ],
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    siteName: 'Bia Marques',
    title: TITLE,
    description: DESCRIPTION,
    url: '/',
    locale: 'en_US',
  },
  twitter: { card: 'summary_large_image', title: TITLE, description: DESCRIPTION },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: '#F7F1E6',
  colorScheme: 'light',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const personJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Bia Marques',
    jobTitle: 'Product Designer',
    url: SITE,
    address: { '@type': 'PostalAddress', addressLocality: 'Lisbon', addressCountry: 'PT' },
    sameAs: [
      'https://www.linkedin.com/in/biamarques',
      'https://read.cv/biamarques',
      'https://www.are.na/biamarques',
    ],
  };

  return (
    <html lang="en" className={`${fraunces.variable} ${jetbrains.variable}`}>
      <head>
        <link rel="preconnect" href="https://api.fontshare.com" />
        <link rel="preconnect" href="https://cdn.fontshare.com" crossOrigin="" />
        <link
          rel="stylesheet"
          href="https://api.fontshare.com/v2/css?f[]=general-sans@400,500,600&display=swap"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
      </head>
      <body data-screen-label="Portfolio">
        {children}
        <Interactive />
      </body>
    </html>
  );
}
