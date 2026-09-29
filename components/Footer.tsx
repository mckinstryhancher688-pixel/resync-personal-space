'use client';
import { useState } from 'react';
import Link from 'next/link';
import { SocialLinks } from './SocialLinks';
import { usePathname } from 'next/navigation';
const thoughts = ['Built because I was curious.', 'Probably overthinking something.', 'Ask more questions.', 'A small thing is still a thing.', 'Go outside. Bring a question.'];
export function Footer({ year }: { year: number }) {
  const pathname = usePathname();
  const isZh = pathname === '/zh' || pathname.startsWith('/zh/');
  const [thought, setThought] = useState('');
  const zhThoughts = ['因为好奇，所以做了。', '可能又在想太多。', '多问几个为什么。', '小小的东西也算数。', '出去走走，带上一个问题。'];
  return <footer lang={isZh ? 'zh-CN' : 'en'} className="footer shell">
    <div className="footer-top"><div><Link href={isZh ? '/zh' : '/'} className="footer-name">Resync</Link><p>{isZh ? <>中国，长沙<br />边做，边学，边想。</> : <>Changsha, China<br />Building, learning, thinking.</>}</p></div><div className="footer-aside"><SocialLinks lang={isZh ? 'zh' : 'en'} /><span className="micro">{isZh ? '一个人的数字空间，仍在持续生长。' : 'A personal space. An ongoing draft.'}</span></div></div>
    <div className="footer-bottom"><span>© {year} Resync</span><div className="easter-egg"><span role="status">{thought}</span><button onClick={() => { const phrases = isZh ? zhThoughts : thoughts; const options = phrases.filter(item => item !== thought); setThought(options[Math.floor(Math.random() * options.length)]); }}>{isZh ? '还在慢慢摸索。' : 'still figuring it out.'}</button></div><a href="#top" className="back-top">{isZh ? '回到顶部 ↑' : 'Back to top ↑'}</a></div>
  </footer>;
}
