import type { Metadata } from 'next';
import InnerHero from '@/components/InnerHero';
import ReviewsSection from '@/components/ReviewsSection';
import GalleryStrip from '@/components/GalleryStrip';

export const metadata: Metadata = {
  title: 'Guest Stories | AeroSpeed Travel & Tours',
  description: 'Read guest stories from AeroSpeed’s Batanes and Itbayat journeys.',
};

export default function ReviewsPage() {
  return (
    <>
      <InnerHero
        eyebrow="Guest stories"
        title="Journeys remembered"
        italic="long after landing."
        description="Read the experiences of guests who explored Batanes and Itbayat with AeroSpeed Travel & Tours."
        image="/images/travelers-2pax.jpg"
        imageAlt="Travelers enjoying a Batanes journey"
      />
      <ReviewsSection />
      <GalleryStrip />
    </>
  );
}
