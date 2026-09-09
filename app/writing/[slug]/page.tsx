import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getNote, getNotes } from '@/lib/content';
import { Markdown } from '@/components/Markdown';
export async function generateStaticParams() { return (await getNotes()).map(note => ({ slug: note.slug })); }
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> { const note = await getNote((await params).slug); return { title: note?.title || 'Note not found', description: note?.excerpt, robots: note?.draft ? { index: false, follow: true } : undefined, openGraph: { title: note?.title, description: note?.excerpt, type: 'article' }, twitter: { title: note?.title, description: note?.excerpt, card: 'summary' } }; }
export default async function NotePage({ params }: { params: Promise<{ slug: string }> }) {
  const note = await getNote((await params).slug);
  if (!note) notFound();
  return <main id="main" className="shell"><article className="article"><Link className="article-back" href="/writing">← The notebook</Link><header className="article-header"><p className="eyebrow">{note.category}</p><h1>{note.title}</h1><p>{note.excerpt}</p><div className="article-meta"><span>{note.date} · sample date</span><span>{note.readTime}</span></div></header>{note.draft && <p className="draft-notice">Sample draft for this website preview. This is not a previously published article by Resync.</p>}<Markdown source={note.body} /><div className="article-end"><Link href="/writing" className="text-link">More from the notebook ↗</Link></div></article></main>;
}
