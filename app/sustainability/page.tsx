import type { Metadata } from 'next';
import EditorialPage from '@/components/EditorialPage';

export const metadata: Metadata = { title: 'Travel Thoughtfully | AeroSpeed Travel & Tours', description: 'AeroSpeed’s intended approach to respectful, locally grounded travel in Batanes.' };

const sections = [
  { title: 'Respect the islands', body: 'Shape guest expectations around the fact that Batanes communities, heritage, and natural places deserve care before, during, and after every visit.' },
  { title: 'Center local knowledge', body: 'Prioritize guidance from people who understand the islands’ conditions, customs, routes, and community rhythms.' },
  { title: 'Keep claims accountable', body: 'A formal sustainability policy and measurable commitments should be reviewed and approved by AeroSpeed before launch.' },
] as const;

export default function SustainabilityPage() { return <EditorialPage eyebrow="Travel thoughtfully" title="Go farther." italic="Tread lighter." intro="This page establishes the direction for a future AeroSpeed sustainability policy without inventing unverified commitments." sections={sections} />; }
