import type { Metadata } from 'next';
import EditorialPage from '@/components/EditorialPage';

export const metadata: Metadata = { title: 'Batanes Travel Guide | AeroSpeed Travel & Tours', description: 'A thoughtful starting point for planning a flexible Batanes island journey.' };

const sections = [
  { title: 'Plan with flexibility', body: 'Island conditions can reshape transport and timing. Build breathing room into your itinerary and confirm current operating details directly with AeroSpeed.' },
  { title: 'Pack for many moods', body: 'Choose light layers, dependable footwear, sun and rain protection, and a small day bag suited to changing terrain.' },
  { title: 'Travel with respect', body: 'Batanes is home before it is a destination. Follow local guidance, ask before photographing people, and tread lightly in villages and natural sites.' },
] as const;

export default function TravelGuidePage() { return <EditorialPage eyebrow="Travel guide" title="Arrive prepared." italic="Leave more open." intro="A few timeless principles help a Batanes journey feel calmer, more respectful, and ready for the islands’ changing rhythm." sections={sections} />; }
