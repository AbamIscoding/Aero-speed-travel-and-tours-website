export type Destination = {
  slug: 'batan' | 'sabtang' | 'itbayat';
  name: string;
  eyebrow: string;
  description: string;
  image: string;
  imageAlt: string;
  signature?: boolean;
  highlights: readonly string[];
};

export const destinations: readonly Destination[] = [
  {
    slug: 'batan',
    name: 'Batan',
    eyebrow: 'The heart of Batanes',
    description: 'Iconic landscapes, rolling hills, lighthouses, and timeless Ivatan charm.',
    image: '/images/batan.jpg',
    imageAlt: 'Rolling green hills and coastline on Batan Island',
    highlights: ['Rolling landscapes', 'Historic Basco', 'North & South Batan'],
  },
  {
    slug: 'sabtang',
    name: 'Sabtang',
    eyebrow: 'Living Ivatan heritage',
    description: 'Traditional villages, stone houses, coastal scenery, and living Ivatan heritage.',
    image: '/images/sabtang.jpg',
    imageAlt: 'Traditional stone village set against green mountains in Sabtang',
    highlights: ['Stone-house villages', 'Coastal viewpoints', 'Cultural encounters'],
  },
  {
    slug: 'itbayat',
    name: 'Itbayat',
    eyebrow: 'The farthest island',
    description: 'The farthest island—wild, remote, dramatic, and unforgettable.',
    image: '/images/itbayat-cliffs.jpg',
    imageAlt: 'Travelers at the dramatic Rapang cliffs of Itbayat Island',
    signature: true,
    highlights: ['Dramatic cliffs', 'Remote culture', 'AeroSpeed air access'],
  },
] as const;
