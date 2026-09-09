import Link from 'next/link';
import type { Note } from '@/data/writing';
export function NoteList({ notes }: { notes: Note[] }) {
  return <div className="note-list">{notes.map(note => <Link className="note-row" key={note.slug} href={`/writing/${note.slug}`}><div className="note-meta"><span>{note.category}</span><span>{note.draft ? 'Sample draft' : note.date}</span></div><h3>{note.title}</h3><span className="row-arrow" aria-hidden="true">↗</span></Link>)}</div>;
}
