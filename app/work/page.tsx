import type { Metadata } from 'next';
import Link from 'next/link';
import { Intro } from '@/components/Intro';
import { ProjectList } from '@/components/ProjectList';
import { ProjectVisual } from '@/components/ProjectVisual';
import { getProjects } from '@/lib/content';
export const metadata: Metadata = { title: 'Work', description: 'Real projects, small tools, and the questions that came with building them.' };
export default async function Work() {
  const projects = await getProjects();
  return <main id="main" className="shell interior"><Intro index="01" title="Work" description="Things I built to understand something. A few made it into the real world." aside="SELECTED PROJECTS / 01—05" /><Link href="/work/geo-copilot" className="featured-project"><ProjectVisual /><div className="featured-copy"><span className="eyebrow">FEATURED / REAL CLIENT WORK</span><h3>GEO Copilot <span>↗</span></h3><p>{projects[0].description}</p><div className="project-proof"><span className="status-dot" />Working system. Real local businesses.</div><span className="text-link">Read the project notes ↗</span></div></Link><ProjectList projects={projects.slice(1)} /><p className="interior-end">A project is also a way of asking a better question.</p></main>;
}
