import { site } from '@/data/site';
export function SocialLinks({ compact = false, lang = 'en' }: { compact?: boolean; lang?: 'en' | 'zh' }) {
  const pending = lang === 'zh' ? '链接待补充' : 'link to be added';
  return <div className="social-links">{site.socials.slice(0, compact ? 2 : 3).map(link => link.href ? <a key={link.label} href={link.href} target={link.href.startsWith('mailto:') ? undefined : '_blank'} rel="noreferrer">{link.label} ↗</a> : <span key={link.label} className="social-placeholder" title={`${link.label} — ${pending}`}>{link.label} <span aria-hidden="true">↗</span><span className="sr-only"> ({pending})</span></span>)}</div>;
}
