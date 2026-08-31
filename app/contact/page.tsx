import type { Metadata } from 'next';
import { Mail, MapPin, Phone } from 'lucide-react';
import ContactForm from '@/components/ContactForm';
import InnerHero from '@/components/InnerHero';
import { COMPANY_EMAIL, COMPANY_LOCATION, COMPANY_PHONE } from '@/data/site';

export const metadata: Metadata = {
  title: 'Plan Your Batanes Trip | AeroSpeed Travel & Tours',
  description: 'Share your dates and interests with AeroSpeed to begin planning a Batanes and Itbayat journey.',
};

export default function ContactPage() {
  return (
    <>
      <InnerHero
        eyebrow="Plan your trip"
        title="Let’s shape"
        italic="your Batanes story."
        description="Tell us when you hope to travel, who is coming, and how far beyond the usual you want to go."
        image="/images/alapas-coast.jpg"
        imageAlt="The rocky Alapad coast in Batanes"
      />
      <section className="contact-section">
        <aside className="contact-details">
          <p className="section-kicker">AeroSpeed details</p>
          <h2>Start with a conversation.</h2>
          <p>Official phone and email details still need to be supplied before launch.</p>
          <span><Phone aria-hidden="true" /> <small>Phone</small><strong>{COMPANY_PHONE}</strong></span>
          <span><Mail aria-hidden="true" /> <small>Email</small><strong>{COMPANY_EMAIL}</strong></span>
          <span><MapPin aria-hidden="true" /> <small>Location</small><strong>{COMPANY_LOCATION}</strong></span>
        </aside>
        <ContactForm />
      </section>
    </>
  );
}
