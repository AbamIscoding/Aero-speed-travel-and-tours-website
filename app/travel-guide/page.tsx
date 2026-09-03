import type { Metadata } from 'next';
import EditorialPage from '@/components/EditorialPage';
import { PageBreadcrumbs } from '@/components/PageBreadcrumbs';

export const metadata: Metadata = {
  title: 'Batanes Travel Guide | AeroSpeed Travel & Tours',
  description: 'A thoughtful starting point for planning a flexible Batanes island journey.',
  alternates: { canonical: '/travel-guide' },
};

const sections = [
  { title: 'Plan with flexibility', body: 'Island conditions can reshape transport and timing. Build breathing room into your itinerary and confirm current operating details directly with AeroSpeed.' },
  { title: 'Pack for many moods', body: 'Choose light layers, dependable footwear, sun and rain protection, and a small day bag suited to changing terrain.' },
  { title: 'Travel with respect', body: 'Batanes is home before it is a destination. Follow local guidance, ask before photographing people, and tread lightly in villages and natural sites.' },
] as const;

export default function TravelGuidePage() {
  return (
    <>
      <PageBreadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Travel Guide' }]} />
      <EditorialPage eyebrow="Travel guide" title="Batanes Travel Guide." italic="Arrive prepared." intro="A few timeless principles help a Batanes journey feel calmer, more respectful, and ready for the islands’ changing rhythm." sections={sections} />
    </>
  );
}
