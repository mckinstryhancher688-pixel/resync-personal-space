import type { Metadata } from 'next';
import { Intro } from '@/components/Intro';
import { ExperimentList } from '@/components/ExperimentList';
export const metadata: Metadata = { title: 'Lab', description: 'Small experiments, unfinished ideas and things I built because I was curious.' };
export default function Lab() { return <main id="main" className="shell interior"><Intro index="04" title="Lab" description="Small experiments, unfinished ideas and things I build because I’m curious." aside="NO BUSINESS PLAN REQUIRED" /><p className="draft-notice">A sketchpad for now. Open an entry to see the question behind it; working demos will arrive when there is something to try.</p><ExperimentList /><p className="interior-end">Not everything here needs to become a startup.<br />Sometimes “I wonder if…” is enough.</p></main>; }
