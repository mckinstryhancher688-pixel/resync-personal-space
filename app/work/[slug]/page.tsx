import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getProject, getProjects } from '@/lib/content';
import { ProjectVisual } from '@/components/ProjectVisual';
export async function generateStaticParams() { return (await getProjects()).map(project => ({ slug: project.slug })); }
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> { const project = await getProject((await params).slug); return { title: project?.name || 'Project not found', description: project?.description, openGraph: { title: project?.name, description: project?.description, type: 'article' } }; }
export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const project = await getProject((await params).slug);
  if (!project) notFound();
  return <main id="main" className="shell"><article className="article project-detail"><Link className="article-back" href="/work">← All work</Link><header className="article-header"><p className="eyebrow">PROJECT {project.number} / {project.category}</p><h1>{project.name}</h1><p>{project.description}</p><div className="article-meta"><span>{project.status}</span><span>Project notes · an ongoing record</span></div></header>{project.featured && <ProjectVisual />}<section className="project-detail-section"><h2>01 / THE PROBLEM</h2><p>{project.problem}</p></section><section className="project-detail-section"><h2>02 / WHAT I BUILT</h2><p>{project.built}</p></section><section className="project-detail-section"><h2>03 / WHAT I’M LEARNING</h2><p>{project.learning}</p></section><p className="draft-notice">An initial project outline based on the project brief. Screenshots, specific decisions and first-hand lessons are still to be added.</p><div className="article-end"><Link href="/work" className="text-link">Back to the things I’ve built ↗</Link></div></article></main>;
}
