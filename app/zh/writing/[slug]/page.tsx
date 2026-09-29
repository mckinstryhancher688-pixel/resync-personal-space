import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Markdown } from '@/components/Markdown';
import { zhNotes } from '@/data/zh';
export function generateStaticParams() { return zhNotes.map(note => ({ slug: note.slug })); }
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const note = zhNotes.find(item => item.slug === slug);
  return { title: note?.title || '手记未找到', description: note?.excerpt, robots: note?.draft ? { index: false, follow: true } : undefined, openGraph: { title: note?.title, description: note?.excerpt, type: 'article', locale: 'zh_CN' } };
}
export default async function ChineseNotePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const note = zhNotes.find(item => item.slug === slug);
  if (!note) notFound();
  return <main id="main" lang="zh-CN" className="shell"><article className="article"><Link className="article-back" href="/zh/writing">← 手记本</Link><header className="article-header"><p className="eyebrow">{note.category}</p><h1>{note.title}</h1><p>{note.excerpt}</p><div className="article-meta"><span>{note.date} · 示例日期</span><span>{note.readTime}</span></div></header>{note.draft && <p className="draft-notice">这是一篇网站预览用的示例草稿，不是 Resync 过去发表的文章。</p>}<Markdown source={note.body} /><div className="article-end"><Link href="/zh/writing" className="text-link">更多手记 ↗</Link></div></article></main>;
}
