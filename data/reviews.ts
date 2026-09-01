export type Review = {
  id: number;
  quote: string;
  reviewer: string;
  journey: string;
  initials: string;
};

export const reviews: readonly Review[] = [
  {
    id: 1,
    quote: 'Thank you so much, AeroSpeed Travel & Tours, for the safe flight, smooth travel, and joy. Upon arrival in Itbayat, Batanes, we were warmly welcomed by our tour guide. Thank you so much, Kuya Bong and JP. The tour was extremely good and very flexible—a true example of an excellent tour guide. Kung gusto n’yo mag-travel in Itbayat, Batanes, I highly recommend AeroSpeed Travel & Tours!',
    reviewer: 'Jayzene Santos',
    journey: 'Itbayat, Batanes',
    initials: 'JS',
  },
  {
    id: 2,
    quote: 'Thank you so much, AeroSpeed Travel & Tours, for the great service during our Itbayat, Batanes escapade. Truly, we had a great time on a breathtaking island. We will never forget this wonderful journey of a lifetime.',
    reviewer: 'Princes Joy Eseque',
    journey: 'Itbayat, Batanes',
    initials: 'PE',
  },
  {
    id: 3,
    quote: 'We are fortunate to have AeroSpeed Air as our tour guide during our family vacation in Batanes. Their three-day package covering North and South Batan Island, as well as Sabtang Island, was truly memorable even for us, who are already Ivatans. The untold stories shared throughout the tour and the sumptuous food made the experience even more special. Most commendable was the excellent service provided by the team, which made our trip comfortable, meaningful, and unforgettable. Dios Mamajes.',
    reviewer: 'Jake Abela',
    journey: 'Batanes family vacation',
    initials: 'JA',
  },
] as const;
