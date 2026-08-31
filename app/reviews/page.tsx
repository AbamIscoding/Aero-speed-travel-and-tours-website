import type { Metadata } from 'next';
import InnerHero from '@/components/InnerHero';
import ReviewsSection from '@/components/ReviewsSection';
import GalleryStrip from '@/components/GalleryStrip';

export const metadata: Metadata = {
  title: 'Guest Stories | AeroSpeed Travel & Tours',
  description: 'Preview the guest review experience for AeroSpeed’s Batanes and Itbayat journeys.',
};

export default function ReviewsPage() {
  return (
    <>
      <InnerHero
        eyebrow="Guest stories"
        title="Journeys remembered"
        italic="long after landing."
        description="The review experience is ready for verified guest stories, with space for approved Google or Facebook source links."
        image="/images/travelers-2pax.jpg"
        imageAlt="Travelers enjoying a Batanes journey"
      />
      <ReviewsSection />
      <GalleryStrip />
    </>
  );
}
