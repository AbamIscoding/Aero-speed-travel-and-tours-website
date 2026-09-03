import type { Metadata } from 'next';
import { Camera, Mail, MapPin, MessageCircle, Music2, Phone } from 'lucide-react';
import ContactForm from '@/components/ContactForm';
import InnerHero from '@/components/InnerHero';
import { PageBreadcrumbs } from '@/components/PageBreadcrumbs';
import {
  COMPANY_EMAIL,
  COMPANY_EMAIL_HREF,
  COMPANY_LOCATION,
  COMPANY_PHONE,
  COMPANY_PHONE_HREF,
  COMPANY_POSTAL_CODE,
  companySocials,
} from '@/data/site';

export const metadata: Metadata = {
  title: 'Plan Your Batanes Trip | AeroSpeed Travel & Tours',
  description: 'Share your dates and interests with AeroSpeed to begin planning a Batanes and Itbayat journey.',
  alternates: { canonical: '/contact' },
  openGraph: { images: [{ url: '/images/alapas-coast.jpg', alt: 'The rocky Alapad coast in Batanes' }] },
  twitter: { images: ['/images/alapas-coast.jpg'] },
};

export default function ContactPage() {
  return (
    <>
      <InnerHero
        eyebrow="Plan your trip"
        title="Plan Your Batanes Trip."
        italic="Let’s shape your story."
        description="Tell us when you hope to travel, who is coming, and how far beyond the usual you want to go."
        image="/images/alapas-coast.jpg"
        imageAlt="The rocky Alapad coast in Batanes"
      />
      <PageBreadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Contact' }]} />
      <section className="contact-section">
        <aside className="contact-details">
          <p className="section-kicker">AeroSpeed details</p>
          <h2>Start with a conversation.</h2>
          <p>Call, email, or connect with AeroSpeed on social media to start planning your Batanes journey.</p>
          <a href={COMPANY_PHONE_HREF}><Phone aria-hidden="true" /> <small>Phone</small><strong>{COMPANY_PHONE}</strong></a>
          <a href={COMPANY_EMAIL_HREF}><Mail aria-hidden="true" /> <small>Email</small><strong>{COMPANY_EMAIL}</strong></a>
          <span><MapPin aria-hidden="true" /> <small>Location</small><strong>{COMPANY_LOCATION} {COMPANY_POSTAL_CODE}</strong></span>
          <div className="contact-socials" aria-label="AeroSpeed social profiles">
            <a href={companySocials.facebook} rel="noreferrer noopener" target="_blank"><MessageCircle aria-hidden="true" />Facebook</a>
            <a href={companySocials.instagram} rel="noreferrer noopener" target="_blank"><Camera aria-hidden="true" />Instagram</a>
            <a href={companySocials.tiktok} rel="noreferrer noopener" target="_blank"><Music2 aria-hidden="true" />TikTok</a>
          </div>
        </aside>
        <ContactForm />
      </section>
    </>
  );
}
