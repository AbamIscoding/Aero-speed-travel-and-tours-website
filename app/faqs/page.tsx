import type { Metadata } from 'next';
import EditorialPage from '@/components/EditorialPage';
import { PageBreadcrumbs } from '@/components/PageBreadcrumbs';
import { JsonLd } from '@/components/JsonLd';
import { buildFaqPageSchema } from '@/lib/structured-data';

export const metadata: Metadata = {
  title: 'Batanes Trip FAQs | AeroSpeed Travel & Tours',
  description: 'Answers to common planning questions for AeroSpeed Batanes and Itbayat journeys.',
  alternates: { canonical: '/faqs' },
};

const sections = [
  { title: 'How do package rates work?', body: 'Published rates are per person and apply to each package’s stated minimum group size. AeroSpeed will confirm availability and final booking terms for your travel dates.' },
  { title: 'When does the Itbayat flight operate?', body: 'Flight timing, frequency, operating conditions, and aircraft details must be confirmed directly with AeroSpeed. The website does not publish an unverified schedule.' },
  { title: 'Can the itinerary be customized?', body: 'Yes—the planning experience is designed to begin with your dates, interests, group size, and preferred pace.' },
] as const;

export default function FaqsPage() {
  return (
    <>
      <PageBreadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'FAQs' }]} />
      <EditorialPage eyebrow="Frequently asked" title="Batanes Trip FAQs." italic="A clearer way to plan." intro="These answers explain how the preview works. Confirm every operational detail directly with AeroSpeed before booking." sections={sections} />
      <JsonLd data={buildFaqPageSchema(sections)} />
    </>
  );
}
