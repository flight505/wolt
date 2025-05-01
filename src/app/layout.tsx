import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SkipToContent from '@/components/SkipToContent';
import ThemeProvider from '@/components/ThemeProvider';
import { LanguageProvider } from '@/contexts/LanguageContext';
import OmnesFontLoader from '@/components/OmnesFontLoader';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Cancel Wolt - Fight for Fair Delivery',
  description: 'Join the movement against Wolt\'s high commissions and unfair practices',
  metadataBase: new URL('https://cancelwolt.org'),
  openGraph: {
    title: 'Cancel Wolt - Fight for Fair Delivery',
    description: 'Join the movement against Wolt\'s high commissions and unfair practices',
    url: 'https://cancelwolt.org',
    siteName: 'Cancel Wolt',
    locale: 'en_US',
    type: 'website',
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon.svg', type: 'image/svg+xml' }
    ],
    apple: { url: '/apple-touch-icon.svg', type: 'image/svg+xml' }
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="font-omnes">
        <OmnesFontLoader />
        <ThemeProvider>
          <LanguageProvider>
            <SkipToContent />
            <Header />
            <main id="main-content" className="min-h-screen pt-24 md:pt-28 lg:pt-28">
              {children}
            </main>
            <Footer />
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
} 