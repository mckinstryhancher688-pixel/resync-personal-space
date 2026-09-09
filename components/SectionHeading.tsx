import Link from 'next/link';
export function SectionHeading({ number, label, title, href, action }: { number: string; label: string; title: string; href?: string; action?: string }) {
  return <div className="section-heading"><div><p className="eyebrow">{number} / {label}</p><h2>{title}</h2></div>{href && <Link className="text-link" href={href}>{action || 'Take a look'} <span aria-hidden="true">↗</span></Link>}</div>;
}
