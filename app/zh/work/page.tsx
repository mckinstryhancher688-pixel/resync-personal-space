import type { Metadata } from 'next';
import Link from 'next/link';
import { Intro } from '@/components/Intro';
import { ProjectList } from '@/components/ProjectList';
import { ProjectVisual } from '@/components/ProjectVisual';
import { zhProjects } from '@/data/zh';
export const metadata: Metadata = { title: '项目', description: '真实项目、小工具，以及动手过程中冒出来的问题。', openGraph: { locale: 'zh_CN' } };
export default function ChineseWork() { return <main id="main" lang="zh-CN" className="shell interior"><Intro lang="zh-CN" index="01" title="项目" description="为了弄明白一件事而做的东西。有些真的走进了现实场景。" aside="项目记录 / 01—05" /><Link href="/zh/work/geo-copilot" className="featured-project"><ProjectVisual lang="zh" /><div className="featured-copy"><span className="eyebrow">真实客户项目</span><h3>GEO Copilot <span>↗</span></h3><p>{zhProjects[0].description}</p><div className="project-proof"><span className="status-dot" />实际运行 · 服务本地商家</div><span className="text-link">查看项目记录 ↗</span></div></Link><ProjectList projects={zhProjects.slice(1)} basePath="/zh" /><p className="interior-end">一个项目，也是一种把问题问得更好的方式。</p></main>; }
