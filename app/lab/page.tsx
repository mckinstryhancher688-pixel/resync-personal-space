import type { Metadata } from 'next';
import { Intro } from '@/components/Intro';
import { ExperimentList } from '@/components/ExperimentList';
export const metadata: Metadata = { title: 'Lab', description: 'Small experiments, unfinished ideas and things I built because I was curious.' };
export default function Lab() { return <main id="main" className="shell interior"><Intro index="04" title="Lab" description="Small experiments, unfinished ideas and things I build because I’m curious." aside="NO BUSINESS PLAN REQUIRED" /><p className="draft-notice">Actual small tools and experiments, with their current stage written plainly. Some are useful; others are still prototypes.</p><ExperimentList /><p className="interior-end">Not everything here needs to become a startup.<br />Sometimes “I wonder if…” is enough.</p></main>; }
