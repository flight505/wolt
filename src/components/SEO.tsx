'use client';

import Head from 'next/head';

interface SEOProps {
  title?: string;
  description?: string;
  canonical?: string;
  ogImage?: string;
}

export default function SEO({
  title = 'Cancel Wolt - Fight for Fair Delivery',
  description = 'Join the movement against Wolt\'s high commissions and unfair practices in food delivery.',
  canonical = 'https://cancelwolt.org',
  ogImage = '/images/og-image.png',
}: SEOProps) {
  const fullTitle = title.includes('Cancel Wolt') ? title : `${title} | Cancel Wolt`;
  
  return (
    <Head>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonical} />
      
      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:url" content={canonical} />
      <meta property="og:site_name" content="Cancel Wolt" />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
    </Head>
  );
} 