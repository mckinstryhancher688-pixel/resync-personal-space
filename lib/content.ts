import { projects } from '@/data/projects';
import { notes } from '@/data/writing';
import { now } from '@/data/now';
// Content access boundary: replace these with CMS/Supabase calls when needed.
// Keep secrets on the server. Current content is local and statically generated.
export async function getProjects() { return projects; }
export async function getProject(slug: string) { return projects.find(project => project.slug === slug); }
export async function getNotes() { return notes; }
export async function getNote(slug: string) { return notes.find(note => note.slug === slug); }
export async function getNow() { return now; }
