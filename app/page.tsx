import Link from 'next/link';
import { photos } from '@/data/photos';
import { getNotes, getProjects } from '@/lib/content';
import { Photo } from '@/components/Photo';
import { HeroArtwork } from '@/components/HeroArtwork';
import { Reveal } from '@/components/Reveal';
import { SectionHeading } from '@/components/SectionHeading';
import { ProjectVisual } from '@/components/ProjectVisual';
import { ProjectList } from '@/components/ProjectList';
import { NoteList } from '@/components/NoteList';
import { ExperimentList } from '@/components/ExperimentList';
import { Entrance } from '@/components/Entrance';

export default async function Home() {
  const [projects, notes] = await Promise.all([getProjects(), getNotes()]);
  return <main id="main" className="shell">
    <section className="hero"><div className="hero-edition micro"><span>A PERSONAL SPACE ON THE INTERNET</span><span>EST. 2000s — ALWAYS IN PROGRESS</span></div><h1 className="masthead">RESYNC<span className="masthead-star" aria-hidden="true">✳</span></h1>
      <Entrance><div className="hero-spread"><div className="hero-copy"><span className="eyebrow"><span className="tiny-cross">+</span> Curious, by default.</span><h2>Exploring AI,<br />building things,<br />and <em>figuring out</em><br />the world.</h2><p>Still a student. Always a work in progress.<br />This is where I keep the things I make,<br className="desktop-break" /> the places I go, and the questions that stay.</p><div className="hero-coordinates"><span>↳ Changsha, China</span><span>AI · Products · Writing · Life</span></div></div><div className="hero-image"><HeroArtwork photo={photos[0]} /><span className="margin-note">A LITTLE FURTHER FROM THE FAMILIAR</span></div></div></Entrance>
      <div className="current-strip"><Link href="/now"><span className="status-dot" />Currently exploring <span className="current-topic">AI × the real world</span><span aria-hidden="true">↗</span></Link><span className="micro">SCROLL AROUND. STAY A WHILE. ↓</span></div>
    </section>
    <div className="signal-ticker" aria-label="Areas of curiosity"><div className="signal-track" aria-hidden="true">{Array.from({ length: 2 }, (_, copy) => <span className="signal-run" key={copy}>AI <i>✳</i> PEOPLE <i>✳</i> PRODUCTS <i>✳</i> PLACES <i>✳</i> QUESTIONS <i>✳</i> WHAT IF <i>✳</i>&nbsp;</span>)}</div></div>
    <Reveal><section className="section diary"><SectionHeading number="00" label="FIELD NOTES" title="Life, in between." /><div className="diary-intro"><p>Not everything happens in a browser tab.</p><span className="micro">SELECTED FRAMES / PREVIEW IMAGES</span></div><div className="photo-wall">{photos.slice(1).map(photo => <Photo key={photo.id} photo={photo} />)}<div className="diary-scribble"><span>Less screen time.<br />More <em>looking around.</em></span><span className="scribble-arrow" aria-hidden="true">↙</span></div></div><p className="image-disclaimer">Images from the earlier site, arranged as a preview. Personal captions and dates to come.</p></section></Reveal>
    <Reveal><section className="about-home section"><p className="eyebrow">01 / A LITTLE CONTEXT</p><div><h2>I study people.<br />I keep making things.</h2><p>I study Human Resource Management. My curiosity tends to wander into AI, products, code, and how the world works.</p><p>I use AI a lot. Sometimes to answer a question.<br />Sometimes to turn one into a project.</p><Link href="/about" className="text-link">A little more about me <span>↗</span></Link></div><span className="about-margin micro">LEARNING BY DOING.<br />AND OCCASIONALLY UNDOING.</span></section></Reveal>
    <Reveal><section className="section work-home"><SectionHeading number="02" label="THINGS I'VE BUILT" title="From “what if” to something real." href="/work" action="All work" /><Link href="/work/geo-copilot" className="featured-project"><ProjectVisual /><div className="featured-copy"><span className="eyebrow">01 / AI · GEO · AUTOMATION</span><h3>GEO Copilot <span aria-hidden="true">↗</span></h3><p>A system to help local businesses work on how they appear in AI recommendations.</p><div className="project-proof"><span className="status-dot" />Real project. Real client delivery.</div><span className="text-link">The problem, the build, the questions ↗</span></div></Link><ProjectList projects={projects.slice(1)} /></section></Reveal>
    <Reveal><section className="section lab-home"><SectionHeading number="03" label="EXPERIMENTS & DETOURS" title="The curiosity corner." href="/lab" action="Into the lab" /><p className="section-deck">Not everything here needs to become a startup.</p><ExperimentList /></section></Reveal>
    <Reveal><section className="section writing-home"><SectionHeading number="04" label="WRITING" title="Latest notes." href="/writing" action="The notebook" /><NoteList notes={notes.slice(0, 3)} /></section></Reveal>
    <aside className="closing-note"><span className="blue">✳</span><p>No grand plan.<br />Just a direction, and a lot of curiosity.</p><Link href="/now" className="text-link">What I’m up to now ↗</Link></aside>
  </main>;
}
