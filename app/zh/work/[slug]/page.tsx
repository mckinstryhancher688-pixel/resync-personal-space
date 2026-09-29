import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ProjectVisual } from '@/components/ProjectVisual';
import { zhProjects } from '@/data/zh';
export function generateStaticParams() { return zhProjects.map(project => ({ slug: project.slug })); }
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const project = zhProjects.find(item => item.slug === slug);
  return { title: project?.name || '项目未找到', description: project?.description, openGraph: { title: project?.name, description: project?.description, type: 'article', locale: 'zh_CN' } };
}
export default async function ChineseProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = zhProjects.find(item => item.slug === slug);
  if (!project) notFound();
  return <main id="main" lang="zh-CN" className="shell"><article className="article project-detail"><Link className="article-back" href="/zh/work">← 所有项目</Link><header className="article-header"><p className="eyebrow">项目 {project.number} / {project.category}</p><h1>{project.name}</h1><p>{project.description}</p><div className="article-meta"><span>{project.status}</span><span>项目记录 · 持续更新</span></div></header>{project.featured && <ProjectVisual lang="zh" />}<section className="project-detail-section"><h2>01 / 要解决的问题</h2><p>{project.problem}</p></section><section className="project-detail-section"><h2>02 / 做了什么</h2><p>{project.built}</p></section><section className="project-detail-section"><h2>03 / 还在学习什么</h2><p>{project.learning}</p></section><p className="draft-notice">这是基于项目简介整理的初始记录。真实截图、具体决策和第一手经验还会继续补充。</p><div className="article-end"><Link href="/zh/work" className="text-link">回到我做过的东西 ↗</Link></div></article></main>;
}
