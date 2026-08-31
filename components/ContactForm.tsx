'use client';

import { useState, type SyntheticEvent } from 'react';
import { ArrowRight } from 'lucide-react';

const CONTACT_FORM_ENDPOINT = process.env.NEXT_PUBLIC_CONTACT_FORM_ENDPOINT;

export default function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'unconfigured' | 'error'>('idle');

  async function handleSubmit(event: SyntheticEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;

    if (!CONTACT_FORM_ENDPOINT) {
      setStatus('unconfigured');
      return;
    }

    setStatus('sending');
    try {
      const response = await fetch(CONTACT_FORM_ENDPOINT, {
        body: JSON.stringify(Object.fromEntries(new FormData(form).entries())),
        headers: { 'Content-Type': 'application/json' },
        method: 'POST',
      });
      if (!response.ok) throw new Error('Request failed');
      form.reset();
      setStatus('sent');
    } catch {
      setStatus('error');
    }
  }

  return (
    <form className="planning-form" onSubmit={handleSubmit}>
      <div className="form-heading">
        <p className="section-kicker">Trip request</p>
        <h2>Tell us where you want to go.</h2>
        <p>This planning form is ready to connect to AeroSpeed’s confirmed inbox or booking system.</p>
      </div>
      <div className="form-grid">
        <label>Full name<input autoComplete="name" name="name" placeholder="Your name" required /></label>
        <label>Email address<input autoComplete="email" name="email" placeholder="you@example.com" required type="email" /></label>
        <label>Preferred travel date<input name="date" type="date" /></label>
        <label>Number of travelers<input min="1" name="travelers" placeholder="2" type="number" /></label>
        <label>Phone / messaging number<input autoComplete="tel" name="contactNumber" placeholder="Your preferred number" type="tel" /></label>
        <label>Journey interest<select defaultValue="" name="interest"><option disabled value="">Choose an experience</option><option>Batan</option><option>Sabtang</option><option>Itbayat by Air</option><option>All three islands</option></select></label>
        <label>Preferred contact<select defaultValue="email" name="contact-method"><option value="email">Email</option><option value="phone">Phone</option><option value="messaging">Messaging app</option></select></label>
        <label className="full-field">What would make this trip special?<textarea name="message" placeholder="Tell us about your pace, interests, and must-see places." rows={5} /></label>
      </div>
      <button className="button button-primary form-submit" disabled={status === 'sending'} type="submit">
        {status === 'sending' ? 'Sending…' : CONTACT_FORM_ENDPOINT ? 'Send Trip Request' : 'Preview Trip Request'} <ArrowRight aria-hidden="true" size={16} />
      </button>
      {status !== 'idle' && status !== 'sending' && (
        <output aria-live="polite" className={`form-status visible ${status}`}>
          {status === 'sent' && 'Thanks—your trip request was sent. AeroSpeed can follow up using your preferred contact details.'}
          {status === 'unconfigured' && 'No request was sent. Add AeroSpeed’s confirmed form endpoint before accepting live inquiries.'}
          {status === 'error' && 'Your request could not be sent. Please try again once AeroSpeed’s contact channel is available.'}
        </output>
      )}
    </form>
  );
}
