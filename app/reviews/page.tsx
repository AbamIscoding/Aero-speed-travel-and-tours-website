import type { Metadata } from 'next';
import InnerHero from '@/components/InnerHero';
import { PageBreadcrumbs } from '@/components/PageBreadcrumbs';
import ReviewsSection from '@/components/ReviewsSection';
import GalleryStrip from '@/components/GalleryStrip';

export const metadata: Metadata = {
  title: 'Guest Stories | AeroSpeed Travel & Tours',
  description: 'Read guest stories from AeroSpeed’s Batanes and Itbayat journeys.',
  alternates: { canonical: '/reviews' },
  openGraph: { images: [{ url: '/images/travelers-2pax.jpg', alt: 'Travelers enjoying a Batanes journey' }] },
  twitter: { images: ['/images/travelers-2pax.jpg'] },
};

export default function ReviewsPage() {
  return (
    <>
      <InnerHero
        eyebrow="Guest stories"
        title="Batanes Tour Reviews."
        italic="Remembered long after landing."
        description="Read the experiences of guests who explored Batanes and Itbayat with AeroSpeed Travel & Tours."
        image="/images/travelers-2pax.jpg"
        imageAlt="Travelers enjoying a Batanes journey"
      />
      <PageBreadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Reviews' }]} />
      <ReviewsSection />
      <GalleryStrip />
    </>
  );
}
