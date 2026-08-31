import { Plane } from 'lucide-react';

export function AnnouncementBar() {
  return (
    <div className="announcement">
      <Plane aria-hidden="true" size={13} />
      <span>Exclusive Itbayat access with AeroSpeed Air</span>
    </div>
  );
}

export function Wordmark({ light = false }: { light?: boolean }) {
  return (
    <span className={light ? 'wordmark wordmark-light' : 'wordmark'}>
      <span>AEROSPEED</span>
      <small>TRAVEL &amp; TOURS</small>
    </span>
  );
}
