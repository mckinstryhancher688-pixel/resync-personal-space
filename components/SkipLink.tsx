'use client';

import { usePathname } from 'next/navigation';

export function SkipLink() {
  const pathname = usePathname();
  const isZh = pathname === '/zh' || pathname.startsWith('/zh/');
  return <a lang={isZh ? 'zh-CN' : 'en'} className="skip-link" href="#main">{isZh ? '跳到正文' : 'Skip to content'}</a>;
}
