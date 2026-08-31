import Image from 'next/image';

const galleryImages = [
  { src: '/images/aerospeed-plane.jpg', alt: 'AeroSpeed guests beside a light aircraft', className: 'gallery-wide' },
  { src: '/images/sabtang-lighthouse.jpg', alt: 'A lighthouse overlooking the Batanes landscape', className: 'gallery-narrow' },
  { src: '/images/batan.jpg', alt: 'Rolling green hills in Batanes', className: 'gallery-medium' },
  { src: '/images/oldest-house.jpg', alt: 'Travelers visiting a traditional Ivatan stone house', className: 'gallery-narrow' },
  { src: '/images/itbayat-cliffs.jpg', alt: 'Travelers at the dramatic Itbayat cliffs', className: 'gallery-wide' },
  { src: '/images/sabtang-travelers.jpg', alt: 'Travelers exploring a Sabtang village', className: 'gallery-medium' },
] as const;

export default function GalleryStrip() {
  return (
    <section className="gallery-strip" aria-label="AeroSpeed Batanes photo gallery">
      {galleryImages.map((image) => (
        <figure className={image.className} key={image.src}>
          <Image alt={image.alt} fill sizes="(max-width: 760px) 70vw, 22vw" src={image.src} />
        </figure>
      ))}
    </section>
  );
}
