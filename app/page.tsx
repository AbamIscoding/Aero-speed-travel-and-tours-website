import Hero from '@/components/Hero';
import StrengthsSection from '@/components/StrengthsSection';
import ItbayatSection from '@/components/ItbayatSection';
import DestinationsSection from '@/components/DestinationsSection';
import PackagesSection from '@/components/PackagesSection';
import ReviewsSection from '@/components/ReviewsSection';
import GalleryStrip from '@/components/GalleryStrip';
import FinalCTA from '@/components/FinalCTA';

export default function Home() {
  return (
    <>
      <Hero />
      <StrengthsSection />
      <ItbayatSection />
      <DestinationsSection />
      <PackagesSection />
      <ReviewsSection />
      <GalleryStrip />
      <FinalCTA />
    </>
  );
}
