import Link from 'next/link';
import type { Project } from '@/data/projects';
export function ProjectList({ projects, basePath = '' }: { projects: Project[]; basePath?: string }) {
  return <div className="project-list">{projects.map(project => <Link href={`${basePath}/work/${project.slug}`} className="project-row" key={project.slug}><span className="project-number">{project.number}</span><div><h3>{project.name}</h3><p>{project.description}</p></div><span className="project-category">{project.category}</span><span className="row-arrow" aria-hidden="true">↗</span></Link>)}</div>;
}
