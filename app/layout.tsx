import type { Metadata } from 'next';
import { AnnouncementBar } from '@/components/Brand';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { JsonLd } from '@/components/JsonLd';
import { SITE_URL_OBJECT } from '@/lib/seo';
import { buildTravelAgencySchema } from '@/lib/structured-data';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: SITE_URL_OBJECT,
  title: 'AeroSpeed Travel & Tours | Explore Batanes & Itbayat',
  description:
    'Discover Batanes with AeroSpeed Travel & Tours. Explore Batan, Sabtang, and Itbayat with curated tours, local expertise, and AeroSpeed air access to Itbayat.',
  alternates: {
    canonical: '/',
  },
  icons: {
    icon: '/logo.png',
  },
  openGraph: {
    title: 'AeroSpeed Travel & Tours | Batanes, Beyond the Usual',
    description: 'Explore Batan, Sabtang, and Itbayat with local expertise and AeroSpeed air access to Itbayat.',
    images: [{ url: '/og.png', width: 1200, height: 630, alt: 'Batanes, Beyond the Usual — AeroSpeed Travel & Tours' }],
    locale: 'en_PH',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AeroSpeed Travel & Tours | Batanes, Beyond the Usual',
    description: 'Explore Batan, Sabtang, and Itbayat with local expertise and AeroSpeed air access to Itbayat.',
    images: ['/og.png'],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <JsonLd data={buildTravelAgencySchema()} />
        <a className="skip-link" href="#main-content">Skip to main content</a>
        <AnnouncementBar />
        <Navbar />
        <main id="main-content" tabIndex={-1}>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
