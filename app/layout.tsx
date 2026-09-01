import type { Metadata } from 'next';
import { AnnouncementBar } from '@/components/Brand';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import './globals.css';

function parseSiteUrl(value: string | undefined) {
  const candidate = value?.trim();
  if (!candidate) return undefined;

  try {
    const url = new URL(candidate.includes('://') ? candidate : `https://${candidate}`);
    return url.protocol === 'http:' || url.protocol === 'https:' ? url : undefined;
  } catch {
    return undefined;
  }
}

const metadataBase =
  parseSiteUrl(process.env.SITE_URL) ??
  parseSiteUrl(process.env.VERCEL_PROJECT_PRODUCTION_URL) ??
  parseSiteUrl(process.env.VERCEL_URL) ??
  new URL('http://localhost:3000');

export const metadata: Metadata = {
  metadataBase,
  title: 'AeroSpeed Travel & Tours | Explore Batanes & Itbayat',
  description:
    'Discover Batanes with AeroSpeed Travel & Tours. Explore Batan, Sabtang, and Itbayat with curated tours, local expertise, and AeroSpeed air access to Itbayat.',
  icons: {
    icon: '/logo.png',
  },
  openGraph: {
    title: 'AeroSpeed Travel & Tours | Batanes, Beyond the Usual',
    description: 'Explore Batan, Sabtang, and Itbayat with local expertise and AeroSpeed air access to Itbayat.',
    images: [{ url: '/og.png', width: 1731, height: 909, alt: 'Batanes, Beyond the Usual — AeroSpeed Travel & Tours' }],
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
        <a className="skip-link" href="#main-content">Skip to main content</a>
        <AnnouncementBar />
        <Navbar />
        <main id="main-content" tabIndex={-1}>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
