import { ProjectShelf } from '@/components/ProjectEvidence';
import type { Metadata } from 'next';
import Link from 'next/link';
import { Intro } from '@/components/Intro';
import { ProjectList } from '@/components/ProjectList';
import { ProjectVisual } from '@/components/ProjectVisual';
import { getProjects } from '@/lib/content';
export const metadata: Metadata = { title: 'Work', description: 'Real projects, small tools, and the questions that came with building them.' };
export default async function Work() {
  const projects = await getProjects();
  const geo = projects[0];
  return <main id="main" className="shell interior">
    <Intro index="01" title="Work" description="Real client work, independent research and personal prototypes. Each has a different stage." aside={`SELECTED WORK / 01—${String(projects.length).padStart(2, '0')}`} />
    <ProjectShelf />
    <Link href="/work/geo-copilot" className="featured-project">
      <ProjectVisual />
      <div className="featured-copy"><span className="eyebrow">FEATURED / GEO MAIN LINE</span><h3>Soujian Lab <span>↗</span></h3><p>{geo.description}</p><div className="project-proof"><span className="status-dot" />Ten real clients. New intake paused.</div><span className="text-link">Read the project notes ↗</span></div>
    </Link>
    <div className="project-demo-entry"><a href="https://geo.peiqirui.com/" target="_blank" rel="noreferrer">Open Soujian Lab · explore the GEO demo ↗</a><span>Brand research → AI search monitoring → reviewed content · fictional case</span></div>
    <div className="work-family"><div><span className="eyebrow">GROWN FROM THE GEO WORK</span><p>One client workflow, with different tools for different jobs.</p></div><div className="work-family-tools">{geo.parts?.map(part => <div key={part.name}><strong>{part.name}</strong><span>{part.description}</span></div>)}</div></div>
    <div className="work-list-intro"><span className="eyebrow">MORE THAN ONE KIND OF BUILD</span><p>Research, travel, collaboration and the tools I am still trying to make useful.</p></div>
    <ProjectList projects={projects.slice(1)} />
    <Link href="/lab" className="text-link work-more-link">Small tools and experiments ↗</Link>
    <p className="work-role-note">My part is usually defining the problem, testing the workflow and choosing what to change from feedback. AI has written most of the implementation code. I keep each project’s current stage visible.</p>
    <p className="interior-end">A project is also a way of asking a better question.</p>
  </main>;
}
