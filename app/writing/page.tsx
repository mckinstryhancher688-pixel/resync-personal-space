import type { Metadata } from 'next';
import { Intro } from '@/components/Intro';
import { NoteList } from '@/components/NoteList';
import { getNotes } from '@/lib/content';
export const metadata: Metadata = { title: 'Writing', description: 'Notes on AI, products, HR, travel, and questions that refuse to go away.' };
export default async function Writing() { return <main id="main" className="shell interior"><Intro index="02" title="Writing" description="Thinking out loud, one note at a time. About AI, people, products, and everything in between." aside="THE NOTEBOOK" /><p className="draft-notice">The first pages are sample drafts. Real observations and published notes will grow here.</p><NoteList notes={await getNotes()} /><p className="interior-end">Some thoughts need a little room before they become opinions.</p></main>; }
