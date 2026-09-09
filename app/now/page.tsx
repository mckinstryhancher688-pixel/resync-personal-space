import type { Metadata } from 'next';
import { Intro } from '@/components/Intro';
import { getNow } from '@/lib/content';
export const metadata: Metadata = { title: 'Now', description: 'What has my attention right now: building, learning, thinking, reading and trying.' };
export default async function Now() {
  const now = await getNow();
  return <main id="main" className="shell interior"><Intro index="03" title="Now" description={now.introduction} aside="A SNAPSHOT, NOT A RÉSUMÉ" />{now.isDraft && <p className="draft-notice">An initial snapshot from the site brief. Current activities and the update date are ready for a personal edit.</p>}<div className="now-layout"><aside className="now-sidebar"><span className="status-dot" /> LAST TENDED<p>{now.updated}<br />Changsha, China</p><p>A little less “what I do.”<br />A little more “what I’m doing.”</p></aside><div>{now.items.map(item => <section className="now-item" key={item.label}><span className="eyebrow">{item.label}</span><div><h2>{item.title}</h2><p>{item.text}</p></div></section>)}</div></div></main>;
}
