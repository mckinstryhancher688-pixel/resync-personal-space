import { site } from '@/data/site';
export function SocialLinks({ compact = false }: { compact?: boolean }) {
  return <div className="social-links">{site.socials.slice(0, compact ? 2 : 3).map(link => link.href ? <a key={link.label} href={link.href} target={link.href.startsWith('mailto:') ? undefined : '_blank'} rel="noreferrer">{link.label} ↗</a> : <span key={link.label} className="social-placeholder" title={`${link.label} — link to be added`}>{link.label} <span aria-hidden="true">↗</span><span className="sr-only"> (link to be added)</span></span>)}</div>;
}
