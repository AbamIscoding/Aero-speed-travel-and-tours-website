export const COMPANY_PHONE = 'Add phone number';
export const COMPANY_EMAIL = 'Add email';
export const COMPANY_LOCATION = 'Basco, Batanes, Philippines';
export const FLIGHT_DURATION = 'Confirm with AeroSpeed';
export const FLIGHT_SCHEDULE = 'Confirm with AeroSpeed';
export const AIRCRAFT_DETAILS = 'Confirm with AeroSpeed';

export const primaryNavigation = [
  { label: 'Home', href: '/' },
  { label: 'Destinations', href: '/destinations' },
  { label: 'Itbayat by Air', href: '/itbayat' },
  { label: 'Packages', href: '/packages' },
  { label: 'Reviews', href: '/reviews' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
] as const;

export const footerNavigation = {
  explore: [
    { label: 'Destinations', href: '/destinations' },
    { label: 'Itbayat by Air', href: '/itbayat' },
    { label: 'Packages', href: '/packages' },
    { label: 'Travel Guide', href: '/travel-guide' },
    { label: 'FAQs', href: '/faqs' },
  ],
  company: [
    { label: 'About Us', href: '/about' },
    { label: 'Our Story', href: '/about#story' },
    { label: 'Sustainability', href: '/sustainability' },
    { label: 'Careers', href: '/careers' },
    { label: 'Privacy Policy', href: '/privacy' },
  ],
} as const;
