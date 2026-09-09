'use client';
import { useState } from 'react';
import Link from 'next/link';
import { SocialLinks } from './SocialLinks';
const thoughts = ['Built because I was curious.', 'Probably overthinking something.', 'Ask more questions.', 'A small thing is still a thing.', 'Go outside. Bring a question.'];
export function Footer({ year }: { year: number }) {
  const [thought, setThought] = useState('');
  return <footer className="footer shell">
    <div className="footer-top"><div><Link href="/" className="footer-name">Resync</Link><p>Changsha, China<br />Building, learning, thinking.</p></div><div className="footer-aside"><SocialLinks /><span className="micro">A personal space. An ongoing draft.</span></div></div>
    <div className="footer-bottom"><span>© {year} Resync</span><div className="easter-egg"><span role="status">{thought}</span><button onClick={() => { const options = thoughts.filter(item => item !== thought); setThought(options[Math.floor(Math.random() * options.length)]); }}>still figuring it out.</button></div><a href="#top" className="back-top">Back to top ↑</a></div>
  </footer>;
}
