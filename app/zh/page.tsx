import type { Metadata } from 'next';
import Link from 'next/link';
import { zhExperiments, zhNotes, zhPhotos, zhProjects } from '@/data/zh';
import { HeroArtwork } from '@/components/HeroArtwork';
import { Photo } from '@/components/Photo';
import { Reveal } from '@/components/Reveal';
import { Entrance } from '@/components/Entrance';
import { SectionHeading } from '@/components/SectionHeading';
import { ProjectVisual } from '@/components/ProjectVisual';
import { ProjectList } from '@/components/ProjectList';
import { NoteList } from '@/components/NoteList';
import { ExperimentList } from '@/components/ExperimentList';

export const metadata: Metadata = {
  title: 'AI、产品与生活探索手记',
  description: '记录我正在做、正在写、正在学，也正在探索的事。',
  openGraph: { title: 'Resync — AI、产品与生活探索手记', description: '记录我正在做、正在写、正在学，也正在探索的事。', locale: 'zh_CN', type: 'website' },
};

export default function ChineseHome() {
  return <main id="main" lang="zh-CN" className="shell">
    <section className="hero"><div className="hero-edition micro"><span>一个人的互联网角落</span><span>持续探索 · 仍在进行</span></div><h1 className="masthead">RESYNC<span className="masthead-star" aria-hidden="true">✳</span></h1>
      <Entrance><div className="hero-spread"><div className="hero-copy"><span className="eyebrow"><span className="tiny-cross">+</span> 好奇心，默认开启。</span><h2>探索 AI，<br />把想法做出来，<br />再慢慢<em>理解</em><br />这个世界。</h2><p>我还在读书，也还在摸索。<br />这里放着做过的东西、走过的地方，<br className="desktop-break" />还有那些一直没想明白的问题。</p><div className="hero-coordinates"><span>↳ 中国，长沙</span><span>AI · 产品 · 写作 · 生活</span></div></div><div className="hero-image"><HeroArtwork photo={zhPhotos[0]} lang="zh" /><span className="margin-note">再往熟悉之外走一点</span></div></div></Entrance>
      <div className="current-strip"><Link href="/zh/now"><span className="status-dot" />最近在探索 <span className="current-topic">AI × 真实世界</span><span aria-hidden="true">↗</span></Link><span className="micro">随便逛逛，慢慢看。 ↓</span></div>
    </section>
    <div className="signal-ticker" aria-label="最近的好奇心"><div className="signal-track" aria-hidden="true">{Array.from({ length: 2 }, (_, copy) => <span className="signal-run" key={copy}>AI <i>✳</i> 人 <i>✳</i> 产品 <i>✳</i> 地方 <i>✳</i> 问题 <i>✳</i> 如果呢 <i>✳</i>&nbsp;</span>)}</div></div>
    <Reveal><section className="section diary"><SectionHeading number="00" label="随手记录" title="生活，发生在别处。" /><div className="diary-intro"><p>不是所有事情都发生在浏览器标签页里。</p><span className="micro">一些画面 / 暂用图片</span></div><div className="photo-wall">{zhPhotos.slice(1).map(photo => <Photo key={photo.id} photo={photo} />)}<div className="diary-scribble"><span>少看一点屏幕。<br />多 <em>看看周围。</em></span><span className="scribble-arrow" aria-hidden="true">↙</span></div></div><p className="image-disclaimer">这些图片沿用旧站素材；个人照片、说明和日期之后再补。</p></section></Reveal>
    <Reveal><section className="about-home section"><p className="eyebrow">01 / 一点背景</p><div><h2>学着理解人。<br />也一直在做东西。</h2><p>我学人力资源管理，注意力却经常跑去 AI、产品、代码，以及世界是怎么运转的。</p><p>我很常用 AI。有时为了回答一个问题，<br />有时是想把问题变成一个项目。</p><Link href="/zh/about" className="text-link">多了解一点 ↗</Link></div><span className="about-margin micro">边做边学。<br />偶尔也推倒重来。</span></section></Reveal>
    <Reveal><section className="section work-home"><SectionHeading number="02" label="做过的东西" title="从“如果呢”到一个真实项目。" href="/zh/work" action="所有项目" /><Link href="/zh/work/geo-copilot" className="featured-project"><ProjectVisual lang="zh" /><div className="featured-copy"><span className="eyebrow">01 / AI · GEO · 自动化</span><h3>GEO Copilot <span aria-hidden="true">↗</span></h3><p>{zhProjects[0].description}</p><div className="project-proof"><span className="status-dot" />真实项目 · 真实客户交付</div><span className="text-link">问题、实现与一路上的新问题 ↗</span></div></Link><ProjectList projects={zhProjects.slice(1)} basePath="/zh" /></section></Reveal>
    <Reveal><section className="section lab-home"><SectionHeading number="03" label="实验与岔路" title="好奇心的边角。" href="/zh/lab" action="去实验室看看" /><p className="section-deck">这里的东西，不一定都要变成创业项目。</p><ExperimentList experiments={zhExperiments} labels={{ question: '想继续追问 →', note: '一条实验记录 · 可交互 Demo 还在路上。' }} /></section></Reveal>
    <Reveal><section className="section writing-home"><SectionHeading number="04" label="写作" title="最近的手记。" href="/zh/writing" action="打开手记本" /><NoteList notes={zhNotes.slice(0, 3)} basePath="/zh" draftLabel="示例草稿" /></section></Reveal>
    <aside className="closing-note" lang="zh-CN"><span className="blue">✳</span><p>没有宏大的计划。<br />只是在一个方向上，继续好奇。</p><Link href="/zh/now" className="text-link">看看我最近在做什么 ↗</Link></aside>
  </main>;
}
