import type { Metadata } from 'next';
import { Intro } from '@/components/Intro';
import { ExperimentList } from '@/components/ExperimentList';
import { zhExperiments } from '@/data/zh';
export const metadata: Metadata = { title: '实验室', description: '一些小实验、没完成的想法，以及因为好奇才动手做的东西。', openGraph: { locale: 'zh_CN' } };
export default function ChineseLab() { return <main id="main" lang="zh-CN" className="shell interior"><Intro lang="zh-CN" index="04" title="实验室" description="一些小实验、没完成的想法，以及因为好奇才动手做的东西。" aside="暂时不需要商业计划" /><p className="draft-notice">先当作一块草稿板。点开条目，可以看到背后的问题；等有东西可试时，再放进可交互的 Demo。</p><ExperimentList experiments={zhExperiments} labels={{ question: '想继续追问 →', note: '一条实验记录 · 可交互 Demo 还在路上。' }} /><p className="interior-end">这里的东西，不一定都要变成创业项目。<br />有时，“我想知道……”就够了。</p></main>; }
