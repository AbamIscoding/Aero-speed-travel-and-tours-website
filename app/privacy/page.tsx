import type { Metadata } from 'next';
import EditorialPage from '@/components/EditorialPage';
import { PageBreadcrumbs } from '@/components/PageBreadcrumbs';

export const metadata: Metadata = {
  title: 'Privacy Policy | AeroSpeed Travel & Tours',
  description: 'Privacy policy preparation page for AeroSpeed Travel & Tours.',
  alternates: { canonical: '/privacy' },
};

const sections = [
  { title: 'Form information', body: 'The trip form currently demonstrates the interface locally and does not send or store submissions. The live destination for form data must be documented before launch.' },
  { title: 'Analytics and cookies', body: 'No analytics or marketing-cookie implementation is included in this build. Add disclosures here if those services are introduced.' },
  { title: 'Policy review required', body: 'AeroSpeed should publish a legally reviewed privacy policy, retention period, contact address, and user-rights process before collecting live inquiries.' },
] as const;

export default function PrivacyPage() {
  return (
    <>
      <PageBreadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Privacy' }]} />
      <EditorialPage eyebrow="Privacy" title="Clear expectations." italic="Respectful handling." intro="This is a transparent launch-readiness notice, not a substitute for AeroSpeed’s legally reviewed privacy policy." sections={sections} />
    </>
  );
}
