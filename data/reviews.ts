export type Review = {
  id: number;
  quote: string;
  reviewer: string;
  location: string;
  initials: string;
  isDemo: true;
};

// Demo-only content. Replace each entry with a verified review and source before launch.
export const reviews: readonly Review[] = [
  {
    id: 1,
    quote: 'Everything was smooth from booking to the actual trip. Batanes is already magical, but flying to Itbayat made the experience unforgettable.',
    reviewer: 'Sample guest 01',
    location: 'Location placeholder',
    initials: '01',
    isDemo: true,
  },
  {
    id: 2,
    quote: 'The Itbayat trip was incredibly convenient. AeroSpeed took care of the details and made the entire journey feel effortless.',
    reviewer: 'Sample guest 02',
    location: 'Location placeholder',
    initials: '02',
    isDemo: true,
  },
  {
    id: 3,
    quote: 'Professional, organized, and easy to communicate with. We felt supported throughout our trip.',
    reviewer: 'Sample guest 03',
    location: 'Location placeholder',
    initials: '03',
    isDemo: true,
  },
  {
    id: 4,
    quote: 'The island planning felt personal from the start, and every transfer connected smoothly with the next part of our journey.',
    reviewer: 'Sample guest 04',
    location: 'Location placeholder',
    initials: '04',
    isDemo: true,
  },
  {
    id: 5,
    quote: 'Itbayat felt truly far beyond the usual—the landscapes, stories, and welcome made it the highlight of our Batanes escape.',
    reviewer: 'Sample guest 05',
    location: 'Location placeholder',
    initials: '05',
    isDemo: true,
  },
] as const;
