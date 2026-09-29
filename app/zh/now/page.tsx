import type { Metadata } from 'next';
import { Intro } from '@/components/Intro';
import { zhNow } from '@/data/zh';
export const metadata: Metadata = { title: '近况', description: '最近正在做、正在学、正在想和正在尝试的事。', openGraph: { locale: 'zh_CN' } };
export default function ChineseNow() { return <main id="main" lang="zh-CN" className="shell interior"><Intro lang="zh-CN" index="03" title="近况" description={zhNow.introduction} aside="一张近况快照，不是简历" /><p className="draft-notice">这份近况是根据网站初始内容整理的草稿；具体事项和更新时间之后可以自行替换。</p><div className="now-layout"><aside className="now-sidebar"><span className="status-dot" /> 最近更新<p>{zhNow.updated}<br />中国，长沙</p><p>少一点“我做什么”。<br />多一点“我正在做什么”。</p></aside><div>{zhNow.items.map(item => <section className="now-item" key={item.label}><span className="eyebrow">{item.label}</span><div><h2>{item.title}</h2><p>{item.text}</p></div></section>)}</div></div></main>; }
