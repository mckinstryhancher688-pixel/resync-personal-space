import type { Metadata } from 'next';
import { Intro } from '@/components/Intro';
import { NoteList } from '@/components/NoteList';
import { zhNotes } from '@/data/zh';
export const metadata: Metadata = { title: '手记', description: '关于 AI、产品、HR、旅行与那些挥之不去的问题。', openGraph: { locale: 'zh_CN' } };
export default function ChineseWriting() { return <main id="main" lang="zh-CN" className="shell interior"><Intro lang="zh-CN" index="02" title="手记" description="关于 AI、人、产品，以及它们之间的一切，试着把想法写下来。" aside="一本还在写的手记本" /><p className="draft-notice">目前展示的是示例草稿，并非已发表文章。这里会慢慢放进真实的观察和记录。</p><NoteList notes={zhNotes} basePath="/zh" draftLabel="示例草稿" /><p className="interior-end">有些想法还需要一点时间，才会变成观点。</p></main>; }
