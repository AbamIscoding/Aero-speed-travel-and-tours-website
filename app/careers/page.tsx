import type { Metadata } from 'next';
import EditorialPage from '@/components/EditorialPage';
import { PageBreadcrumbs } from '@/components/PageBreadcrumbs';

export const metadata: Metadata = {
  title: 'Careers | AeroSpeed Travel & Tours',
  description: 'Career information for AeroSpeed Travel & Tours in Batanes.',
  alternates: { canonical: '/careers' },
};

const sections = [
  { title: 'No roles are published yet', body: 'AeroSpeed has not provided an approved list of open positions for this website.' },
  { title: 'Local perspective matters', body: 'Future opportunities can highlight hospitality, logistics, storytelling, and island expertise once role details are confirmed.' },
  { title: 'Watch this space', body: 'Add official hiring contacts and application instructions here when the company is ready to recruit.' },
] as const;

export default function CareersPage() {
  return (
    <>
      <PageBreadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Careers' }]} />
      <EditorialPage eyebrow="Careers" title="Help guests see" italic="Batanes differently." intro="This section is ready for approved vacancies, responsibilities, and a secure application path." sections={sections} />
    </>
  );
}
