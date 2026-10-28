import type { Metadata } from 'next';
import Link from 'next/link';
import { Intro } from '@/components/Intro';
import { ProjectList } from '@/components/ProjectList';
import { ProjectVisual } from '@/components/ProjectVisual';
import { zhProjects } from '@/data/zh';
export const metadata: Metadata = { title: '项目', description: '真实项目、小工具，以及动手过程中冒出来的问题。', openGraph: { locale: 'zh_CN' } };
export default function ChineseWork() {
  const geo = zhProjects[0];
  return <main id="main" lang="zh-CN" className="shell interior">
    <Intro lang="zh-CN" index="01" title="项目" description="真实客户工作、独立研究和个人原型。每个项目都处在不同阶段。" aside={`精选项目 / 01—${String(zhProjects.length).padStart(2, '0')}`} />
    <Link href="/zh/work/geo-copilot" className="featured-project">
      <ProjectVisual lang="zh" />
      <div className="featured-copy"><span className="eyebrow">主线 / GEO 客户项目</span><h3>搜见实验室 <span>↗</span></h3><p>{geo.description}</p><div className="project-proof"><span className="status-dot" />10 位真实客户 · 已暂停接新客</div><span className="text-link">查看项目记录 ↗</span></div>
    </Link>
    <div className="project-demo-entry"><a href="https://geo.peiqirui.com/" target="_blank" rel="noreferrer">打开搜见实验室 · 体验 GEO 项目 ↗</a><span>品牌研究 → AI 搜索监测 → 内容审核与交付 · 虚构案例</span></div>
    <div className="work-family"><div><span className="eyebrow">从 GEO 主线长出的工具</span><p>围绕同一套客户工作流程，各自解决不同问题。</p></div><div className="work-family-tools">{geo.parts?.map(part => <div key={part.name}><strong>{part.name}</strong><span>{part.description}</span></div>)}</div></div>
    <div className="work-list-intro"><span className="eyebrow">不止一种做法</span><p>调查监测、旅行协商、协作原型，以及还在尝试变得好用的个人工具。</p></div>
    <ProjectList projects={zhProjects.slice(1)} basePath="/zh" />
    <Link href="/zh/lab" className="text-link work-more-link">更多小工具与实验 ↗</Link>
    <p className="work-role-note">我主要负责提出问题、测试流程、根据反馈选择调整方向；具体代码大多由 AI 实现。每个项目的现状都按实际阶段标注。</p>
    <p className="interior-end">一个项目，也是一种把问题问得更好的方式。</p>
  </main>;
}
