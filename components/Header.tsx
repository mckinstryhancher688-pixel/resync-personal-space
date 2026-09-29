'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useRef, useState } from 'react';
import { navigation } from '@/data/site';
import { SocialLinks } from './SocialLinks';

export function Header() {
  const pathname = usePathname();
  const isZh = pathname === '/zh' || pathname.startsWith('/zh/');
  const [open, setOpen] = useState(false);
  const toggle = useRef<HTMLButtonElement>(null);
  const items = isZh
    ? [{ label: '项目', href: '/zh/work' }, { label: '手记', href: '/zh/writing' }, { label: '近况', href: '/zh/now' }, { label: '实验室', href: '/zh/lab' }, { label: '关于', href: '/zh/about' }]
    : navigation.map(label => ({ label, href: '/' + label.toLowerCase() }));
  return <header lang={isZh ? 'zh-CN' : 'en'} className="site-header shell" onKeyDown={event => { if (event.key === 'Escape') { setOpen(false); toggle.current?.focus(); } }}>
    <Link href={isZh ? '/zh' : '/'} className="logo" aria-label={isZh ? 'Resync 中文首页' : 'Resync home'} onClick={() => setOpen(false)}>RESYNC<span className="logo-dot">.</span></Link>
    <button ref={toggle} className="menu-toggle" aria-expanded={open} aria-controls="main-nav" onClick={() => setOpen(!open)}>{open ? (isZh ? '关闭 −' : 'Close −') : (isZh ? '菜单 +' : 'Menu +')}</button>
    <nav id="main-nav" aria-label={isZh ? '主导航' : 'Main navigation'} className={open ? 'main-nav is-open' : 'main-nav'}>
      {items.map(({ label, href }) => <Link key={href} href={href} aria-current={pathname === href || pathname.startsWith(`${href}/`) ? 'page' : undefined} onClick={() => setOpen(false)}>{label}{label === (isZh ? '近况' : 'Now') && <i className="status-dot" aria-hidden="true" />}</Link>)}
      <Link className="language-switch" href={isZh ? (pathname === '/zh' ? '/' : pathname.replace(/^\/zh/, '')) : `/zh${pathname === '/' ? '' : pathname}`} aria-label={isZh ? '切换到英文版' : 'Switch to Chinese'} onClick={() => setOpen(false)}>{isZh ? 'EN ↗' : '中文 ↗'}</Link>
    </nav>
    <div className="header-social"><SocialLinks compact lang={isZh ? 'zh' : 'en'} /></div>
  </header>;
}
