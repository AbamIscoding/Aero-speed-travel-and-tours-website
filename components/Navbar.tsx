'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ArrowRight, Menu } from 'lucide-react';
import { useState } from 'react';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { primaryNavigation } from '@/data/site';
import { Wordmark } from '@/components/Brand';

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
      <Link href="/" aria-label="AeroSpeed Travel and Tours home">
        <Wordmark />
      </Link>

      <nav aria-label="Primary navigation">
        {primaryNavigation.map((item) => {
          const active = item.href === '/' ? pathname === '/' : pathname.startsWith(item.href);
          return (
            <Link aria-current={active ? 'page' : undefined} className={active ? 'active' : ''} href={item.href} key={item.href}>
              {item.label}
            </Link>
          );
        })}
      </nav>

      <Link className="nav-cta" href="/contact">
        Plan Your Trip <ArrowRight aria-hidden="true" size={16} />
      </Link>

      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger
          render={
            <button className="menu-button" aria-label="Open navigation menu" type="button" />
          }
        >
          <Menu aria-hidden="true" />
        </SheetTrigger>
        <SheetContent className="mobile-menu" side="right">
          <SheetHeader className="mobile-menu-header">
            <SheetTitle><Wordmark /></SheetTitle>
            <SheetDescription>Explore Batanes by land, sea, and air.</SheetDescription>
          </SheetHeader>
          <nav aria-label="Mobile navigation" className="mobile-nav">
            {primaryNavigation.map((item, index) => {
              const active = item.href === '/' ? pathname === '/' : pathname.startsWith(item.href);
              return (
                <Link aria-current={active ? 'page' : undefined} className={active ? 'active' : ''} href={item.href} key={item.href} onClick={() => setOpen(false)}>
                  <span>{String(index + 1).padStart(2, '0')}</span>{item.label}
                </Link>
              );
            })}
          </nav>
          <div className="mobile-menu-footer">
            <p>Fly beyond to Itbayat.</p>
            <Link className="button button-primary" href="/contact" onClick={() => setOpen(false)}>
              Plan Your Trip <ArrowRight aria-hidden="true" size={16} />
            </Link>
          </div>
        </SheetContent>
      </Sheet>
    </header>
  );
}
