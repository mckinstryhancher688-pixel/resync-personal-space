import type { Project } from './projects';
import type { Note } from './writing';
import type { Photo } from './photos';

// 中文内容独立维护；保留 slug 以便中英文项目互相对应，但文案互不共享。
export const zhProjects: Project[] = [
  { slug: 'geo-copilot', number: '01', name: 'GEO Copilot', category: 'AI · GEO · 自动化', status: '真实客户交付', featured: true,
    description: '把一个关于 AI 搜索的问题，做成当地商家真正能用的工作流。',
    problem: '本地商家需要一种更实际的方法，理解并改善自己在 AI 推荐中的呈现。',
    built: '一套实际运行的 GEO 内容生成、审计、去重、发布和效果检查系统。它已经用于真实客户交付，不是课程作业。',
    learning: '我一直在追问：怎样才能让一个 AI 工作流在演示结束后仍然有用？' },
  { slug: 'geo-audit-retrieval', number: '02', name: 'GEO Audit / Retrieval', category: 'AI 搜索 · 评估', status: '项目记录',
    description: '进一步检查 AI 搜索找到了什么、遗漏了什么，以及它为何这样推荐。',
    problem: '只看 AI 的回答，不足以判断一家企业的信息底座是否可靠，也解释不了它为何被检索到。',
    built: '用于检查企业信息基础、检索、排序和内容表现的一组工具。',
    learning: '一个还没想清楚的问题：除了“被提到”，好的评估还应该衡量什么？' },
  { slug: 'boss-recruitment-assistant', number: '03', name: 'Boss 招聘辅助工具', category: 'AI · HR', status: '本地工具',
    description: '把所学专业和正在尝试的工具，接在一起的一次小实践。',
    problem: '筛选候选人时常常要反复核对关键词，而经历背后的含义很容易被漏掉。',
    built: '一个用于 Boss 直聘候选人筛选的本地辅助工具，结合关键词过滤与语义排序，帮助人进行复核。',
    learning: '软件可以怎样辅助 HR 判断，而不悄悄取代判断？' },
  { slug: 'storefront-generator', number: '04', name: '门头效果图生成器', category: 'AI 图像 · 工具', status: '小工具',
    description: '把一个门头改造的想法，快速变成能看见的效果图。',
    problem: '店主可能已经有了招牌的新想法，却没有一个简单的方法先看看它会是什么样。',
    built: '一个用 AI 图像快速生成商家门头概念图的小工具。',
    learning: '还在探索，怎样让用户更快得到第一张有用的图。' },
  { slug: 'ai-vocabulary', number: '05', name: 'AI 词汇卡', category: '学习工具', status: '个人项目',
    description: '让陌生的 AI 与计算机术语，变得稍微熟悉一点。',
    problem: '学习 AI 时，总会反复遇到计算机科学里的新词。',
    built: '一个围绕 AI 和计算机科学词汇展开的小型学习项目。',
    learning: '一个持续中的问题：第一次解释之后，什么能帮人真正记住一个新词？' },
];

export const zhNotes: Note[] = [
  { slug: 'ai-recommendations', title: 'AI 推荐，真的客观吗？', category: 'AI 与互联网', date: '2026-09-01', readTime: '约 2 分钟', draft: true, excerpt: '一次推荐，取决于一个系统能看见什么。', body: '## 一个值得继续追问的问题\n\n当 AI 推荐一家商家时，我们看到的究竟是什么？是对质量的判断，是现有信息的映照，还是两者都有？\n\n做 GEO 工具时，这成了一个值得研究的问题。用户看到的回答只是表面，背后还有检索选择、缺失的上下文，以及我们未必看得见的评估过程。\n\n## 我想验证什么\n\n一个可行的下一步，是在不同系统里问同一个问题，记录来源，并区分哪些内容被检索到、哪些最终进入了推荐。\n\n被提及是一种信号，但不是全部。' },
  { slug: 'hr-as-software', title: '当 HR 变成软件，会发生什么？', category: 'HR 与组织', date: '2026-08-28', readTime: '约 2 分钟', draft: true, excerpt: '效率比判断更容易被衡量。', body: '## 人与系统之间\n\n一边学 HR，一边做 AI 工具，会让两种思路并排出现：一种关心人如何工作，另一种关心流程的哪些部分可以变成软件。\n\n关键词过滤很好描述，判断一段经历是否相关却困难得多。一个排序结果看起来很精确，也可能漏掉重要背景。\n\n## 需要想清楚的边界\n\n我想探索的是帮助人复核判断的工具，而不是把分数直接当成决定。界面应该保留哪些上下文？又应该拒绝把什么过度简化？' },
  { slug: 'building-before-knowing', title: '还没完全搞懂，就先动手做', category: '做东西这件事', date: '2026-08-20', readTime: '约 2 分钟', draft: true, excerpt: '有时，一个粗糙的第一版能提出更好的问题。', body: '## 从很小的东西开始\n\n我们很容易等到一个想法完全清晰再行动。但一个小小的可用版本，往往能暴露计划阶段看不到的问题。\n\n第一版不必惊艳，只要能让一个假设变得可见：这个流程能省下一步重复操作吗？别人不听解释也能看懂吗？\n\n## 把过程记下来\n\n我想继续练习记录那些让我改变想法的时刻。做完一个功能当然有用，记下上一版为何行不通也一样有用。' },
  { slug: 'singapore-august-2026', title: '新加坡，2026 年 8 月', category: '出门看看', date: '2026-08-15', readTime: '草稿', draft: true, excerpt: '为照片、零碎观察和绕远一点的路留一页空白。', body: '## 等一个真实故事\n\n这是一篇示例旅行笔记。日期和标题都是占位内容，不代表已确认的旅行记录。\n\n之后可以换成真实照片、实际走过的路线，以及还记得的细节：一条街、一段对话、一个后来又回去的地方。\n\n这里没有为了填满页面而编造行程或经历。' },
];

export const zhPhotos: Photo[] = [
  { id: 'mountain-hero', src: '/images/mountain-air.webp', alt: '暮色中的山峦、湖泊与远处城市', caption: '暂时离开屏幕', note: '去陌生的地方走走', shape: 'wide' },
  { id: 'desk', src: '/images/desk-notes.webp', alt: '摆着电脑和日常物件的安静桌面', caption: '一个小想法', note: '桌面、念头，以及一个开始', shape: 'desk' },
  { id: 'bookshop', src: '/images/studio-space.webp', alt: '有木制飞机装置和读者的明亮书店', caption: '书页之间', note: '再多一个故事的位置', shape: 'tall' },
  { id: 'gallery', src: '/images/gallery-light.webp', alt: '俯瞰城市的户外画架', caption: '换个角度看看', note: '留一点思考的空间', shape: 'landscape' },
  { id: 'shop', src: '/images/street-corner.webp', alt: '小店里陈列的衣物、鞋和相机', caption: '身边的东西', note: '绕远一点回家', shape: 'small' },
];

export const zhNow = {
  updated: '2026 年 9 月', isDraft: true,
  introduction: '一张关于最近注意力去向的小快照，随时可能变化。',
  items: [
    { label: '正在做', title: '更顺手的 GEO 评估流程', text: '把检索、内容检查和有用的反馈接起来，让整个流程更容易使用。' },
    { label: '正在学', title: 'AI 系统、Python 与 HR', text: '继续追技术问题，同时把人和组织留在视野里。' },
    { label: '在想', title: 'AI 如何改变组织', text: '不只是哪些任务变快了，还有决策和责任如何变化。' },
    { label: '在读', title: '给下一本好书留个位置', text: '等待读书清单里有真实内容时，再把它放到这里。' },
    { label: '在试', title: '更公开地写作', text: '把还没成形的问题写成短笔记，也允许它暂时不完整。' },
  ],
};

export const zhExperiments = [
  { id: 'voice', number: '001', title: '和一个想法聊聊', category: 'AI 语音', status: '草图阶段', description: '一个用来边说边想的语音界面，会是什么感觉？', question: '助手能不能先接住一个念头，而不是急着给出答案？', mark: 'wave' },
  { id: 'retrieval', number: '002', title: '同一个问题，不同的答案', category: '检索测试', status: '待探索', description: '记录 AI 搜索找到了什么，又把什么留在了视野之外。', question: '只改几个词，会让检索结果变化多少？', mark: 'dots' },
  { id: 'prompts', number: '003', title: '拆开一个 Prompt', category: '提示词实验', status: '草图阶段', description: '每次只改一条指令，也把有意思的错误留下来。', question: '提示词里究竟哪些部分改变了结果？', mark: 'asterisk' },
];

export const zhTimeline = [
  { year: '2026', title: '想法开始走进真实场景。', items: ['开始做 AI 和 GEO 工具。', '参与本地商家的真实项目交付。', '把 HR 专业兴趣和动手做 AI 项目连在一起。'], draft: true },
  { year: '更早', title: '有很多问题，没有刻意安排的起点。', items: ['学习人力资源管理。', '持续关注产品、历史和人们如何组织协作。', '也给值得记录的生活留些位置。'], draft: false },
];

export const zhInterests = ['历史', '足球', '动漫', '旅行', 'AI', '随手做点东西'];
