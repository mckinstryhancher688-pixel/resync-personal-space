import Link from 'next/link';
import type { Note } from '@/data/writing';
export function NoteList({ notes, basePath = '', draftLabel = 'Sample draft' }: { notes: Note[]; basePath?: string; draftLabel?: string }) {
  return <div className="note-list">{notes.map(note => <Link className="note-row" key={note.slug} href={`${basePath}/writing/${note.slug}`}><div className="note-meta"><span>{note.category}</span><span>{note.draft ? draftLabel : note.date}</span></div><h3>{note.title}</h3><span className="row-arrow" aria-hidden="true">↗</span></Link>)}</div>;
}
