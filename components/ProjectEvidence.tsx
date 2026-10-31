import Image from 'next/image';
import Link from 'next/link';
import { projectEvidence } from '@/data/project-evidence';

export function ProjectEvidence({ slug, lang = 'en' }: { slug: string; lang?: 'en' | 'zh' }) {
  const evidence = projectEvidence[slug];
  if (!evidence) return null;
  const zh = lang === 'zh';
  const copy = evidence[lang];
  return <section className="project-evidence" aria-label={zh ? '界面与实现记录' : 'Interface and implementation'}>
    <div className="evidence-heading"><span className="eyebrow">{zh ? '实际界面 / 当前阶段' : 'INTERFACE / CURRENT STAGE'}</span><span className="evidence-stage">{copy.stage}</span></div>
    {evidence.image && <figure className={`interface-figure ${slug === 'xuxiake-ai' ? 'phone-capture' : ''}`}><a href={evidence.image} target="_blank" rel="noreferrer" aria-label={zh ? '打开完整界面截图' : 'Open full interface screenshot'}><Image src={evidence.image} width={slug === 'xuxiake-ai' ? 432 : 1440} height={slug === 'xuxiake-ai' ? 621 : 1000} alt={copy.caption || ''} sizes="(max-width:700px) 90vw, 830px" /></a><figcaption>{copy.caption}</figcaption></figure>}
    <div className="tech-tags" aria-label={zh ? '项目技术栈' : 'Project technology stack'}>{evidence.stack.map(tag => <span key={tag}>{tag}</span>)}</div>
    <p>{copy.proof}</p>
    <div className="evidence-actions">{evidence.demo && <a className="text-link" href={evidence.demo} target="_blank" rel="noreferrer">{zh ? '打开操作演示 ↗' : 'Open interactive demo ↗'}</a>}{evidence.source && <a className="text-link" href={evidence.source} target="_blank" rel="noreferrer">{zh ? '查看源码与发布记录 ↗' : 'Source and release records ↗'}</a>}</div>
    <div className="evidence-next"><span>{zh ? '下一步' : 'NEXT'}</span><p>{copy.next}</p></div>
  </section>;
}

export function ProjectShelf({ lang = 'en' }: { lang?: 'en' | 'zh' }) {
  const zh = lang === 'zh';
  const entries = [
    { slug: 'geo-copilot', title: zh ? '搜见实验室' : 'Soujian Lab', text: zh ? '从品牌研究到内容审核与交付。' : 'From brand research to reviewed content.' },
    { slug: 'onework', title: 'OneWork', text: zh ? '让 AI 创作、协作过程和人工验收都看得见。' : 'Make AI creation and human acceptance visible.' },
    { slug: 'xuxiake-ai', title: zh ? '徐霞客 AI' : 'Xu Xiake AI', text: zh ? '把两个人的分歧，变成双方确认的行程。' : 'Turn two travellers’ differences into a shared plan.' },
  ];
  return <section id="projects" className="project-shelf" aria-label={zh ? '先看三个作品' : 'Start with three projects'}>
    <div className="shelf-heading"><div><p className="eyebrow">{zh ? '从实际界面开始' : 'START WITH THE INTERFACE'}</p><h2>{zh ? '这些东西，已经有了形状。' : 'Ideas you can actually look at.'}</h2></div><Link href={zh ? '/zh/work' : '/work'} className="text-link">{zh ? '全部项目 ↗' : 'All projects ↗'}</Link></div>
    <div className="shelf-grid">{entries.map(entry => { const evidence = projectEvidence[entry.slug]; return <article key={entry.slug} className="shelf-project"><Link href={`${zh ? '/zh' : ''}/work/${entry.slug}`}><div className={`shelf-image ${entry.slug === 'xuxiake-ai' ? 'phone-capture' : ''}`}><Image src={evidence.image!} width={entry.slug === 'xuxiake-ai' ? 432 : 1440} height={entry.slug === 'xuxiake-ai' ? 621 : 1000} alt={evidence[lang].caption || ''} sizes="(max-width:700px) 90vw, 30vw" /></div><p className="eyebrow">{evidence[lang].stage}</p><h3>{entry.title} <span>↗</span></h3><p>{entry.text}</p></Link><div className="shelf-action">{evidence.demo ? <a href={evidence.demo} target="_blank" rel="noreferrer">{zh ? '直接体验操作界面 ↗' : 'Try the interface ↗'}</a> : <Link href={`${zh ? '/zh' : ''}/work/${entry.slug}`}>{zh ? '看界面与项目记录 ↗' : 'See interface and project notes ↗'}</Link>}</div></article>; })}</div>
  </section>;
}
