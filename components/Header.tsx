'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useRef, useState } from 'react';
import { navigation } from '@/data/site';
import { SocialLinks } from './SocialLinks';

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const toggle = useRef<HTMLButtonElement>(null);
  return <header className="site-header shell" onKeyDown={event => { if (event.key === 'Escape') { setOpen(false); toggle.current?.focus(); } }}>
    <Link href="/" className="logo" aria-label="Resync home" onClick={() => setOpen(false)}>RESYNC<span className="logo-dot">.</span></Link>
    <button ref={toggle} className="menu-toggle" aria-expanded={open} aria-controls="main-nav" onClick={() => setOpen(!open)}>{open ? 'Close −' : 'Menu +'}</button>
    <nav id="main-nav" aria-label="Main navigation" className={open ? 'main-nav is-open' : 'main-nav'}>
      {navigation.map(label => { const href = '/' + label.toLowerCase(); return <Link key={label} href={href} aria-current={pathname.startsWith(href) ? 'page' : undefined} onClick={() => setOpen(false)}>{label}{label === 'Now' && <i className="status-dot" aria-hidden="true" />}</Link>; })}
    </nav>
    <div className="header-social"><SocialLinks compact /></div>
  </header>;
}
