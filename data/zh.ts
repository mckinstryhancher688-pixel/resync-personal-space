import type { Project } from './projects';
import type { Note } from './writing';
import type { Photo } from './photos';

// 中文内容独立维护；保留 slug 以便中英文项目互相对应，但文案互不共享。
export const zhProjects: Project[] = [
  {
    slug: 'geo-copilot', number: '01', name: 'GEO Copilot',
    category: 'AI · GEO · 客户项目', status: '服务过 10 位客户 · 暂停接新客', featured: true,
    description: '从真实客户工作里长出的一套 GEO 流程；公开可见的目前仍是主系统 Demo。',
    problem: '本地商家需要更实际的办法整理自身信息、制作内容，并检查在 AI 推荐中如何被呈现。',
    built: '围绕客户资料、标题、文章、审核和交付建立工作台。Site Builder 负责客户网站包，图文视频工作台支撑内容制作。当前只有主 GEO 的 Demo 上线，完整流程并非公开运营产品。',
    role: '我主要提需求、操作测试、检验结果、根据反馈选择方案并调整流程，也与客户沟通；具体代码几乎全部由 AI 实现。',
    learning: '平台规则变化后，我们暂停接收新客户。比起生成了多少内容，我更想把每位客户真正得到什么核对清楚。',
    parts: [
      { name: 'Site Builder', description: '根据客户配置生成网站包，是 GEO 客户工作的辅助工具，不单独算一条产品主线。' },
      { name: '图文视频工作台', description: '处理本地素材，制作图文和短视频，并管理内容任务。' },
    ],
  },
  {
    slug: 'research-lab', number: '02', name: 'Research Lab',
    category: 'AI 搜索 · 调查监测', status: '研究工具 · 有离线验收记录',
    description: '把公开来源、豆包回答和采样结果放在一起查的独立工具。',
    problem: '只看一次 AI 回答，很难知道推荐从哪里来，也难判断它能否重复出现。',
    built: '保存来源、调查快照和采样结果的研究工具。本机测试核对过数据库及与 GEO Copilot 的桥接；持续线上采样的现状仍待确认。',
    role: '我提出监测问题、测试流程并审看结果；代码实现主要由 AI 完成。',
    learning: '比一次看起来漂亮的回答更重要的是：来源能追溯，采样能重复。',
  },
  {
    slug: 'xuxiake-ai', number: '03', name: '徐霞客 AI',
    category: 'AI · 旅行 · 产品', status: '开发中 · 有浏览器测试记录',
    description: '让两名旅行搭子一起决定行程，而不是由系统替他们拍板。',
    problem: '两个人的旅行偏好和硬性条件可能冲突，规划工具需要解释取舍。',
    built: '把两人的偏好与约束、飞猪地点候选、高德路线和 AI 解释接成协商流程。资料记录了浏览器测试；项目仍在开发，我还没有把它当作自己的旅行工具使用。',
    role: '我设计协商流程、测试体验并根据结果选择修改方向；具体代码几乎全部由 AI 完成。',
    learning: '比“生成一条路线”更难的是说清楚：为什么删掉、替换或保留某一站。',
  },
  {
    slug: 'onework', number: '04', name: '一起做 OneWork',
    category: 'AI Agent · 协作', status: '原型 · 交易仍为模拟',
    description: '试着让 AI 参与发单、报价、交付和验收。',
    problem: '当 Agent 帮人协调工作时，谁来授权、谁来验收、出了问题由谁负责？',
    built: '发单、报价、交付和验收原型，测试过真实模型调用；订单、交易对手和资金仍是模拟。',
    role: '我提出产品问题、测试流程并审看方案；具体代码几乎全部由 AI 完成。',
    learning: '一个能演示的流程，距离可信的真实交易还差很多验证。',
  },
  {
    slug: 'personal-os', number: '05', name: 'Personal OS 个人工作台',
    category: '个人软件 · 整理', status: '开发中 · 尚未自己使用',
    description: '给项目、学习、比赛、求职和生活留一个共同入口。',
    problem: '重要计划和没做完的想法散落在太多地方。',
    built: '已经有可运行页面的个人工作台，集中项目、学习、比赛、求职和生活记录。目前仍在开发，我还没有自己使用。',
    role: '我决定要收什么、怎么组织，检查界面并持续调整；实现主要由 AI 辅助完成。',
    learning: '它是否有用，要看没有演示需求的时候，我会不会继续打开它。',
  },
  {
    slug: 'atlas', number: '06', name: 'Atlas 我的世界足迹',
    category: '旅行 · 个人软件', status: '开发中 · 尚未自己使用',
    description: '把到过的地方、照片和时间，慢慢留在一张地图上。',
    problem: '只有目的地清单，很容易丢失一段旅行真正属于自己的细节。',
    built: '支持到访记录、照片、时间回看和 ZIP 备份的旅行地图。本地有验收截图，但我还没有自己使用。',
    role: '我提出并检查使用体验；具体代码主要由 AI 完成。',
    learning: '一张个人地图真正有意思，是在真实记忆不断加入之后。',
  },
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
  { id: 'boss', number: '001', title: 'BOSS 招聘辅助工具', category: 'AI · HR', status: '历史本地工具', description: '用关键词与语义线索辅助查看候选人资料的本地工具。', question: '软件怎样帮招聘者看清上下文，而不是替人做决定？', note: '历史小项目，并非已部署的招聘决策系统。', mark: 'dots' },
  { id: 'storefront', number: '002', title: '门头效果图生成器', category: 'AI 图像 · 小工具', status: '可用的小工具', description: '快速生成门头概念图，让店铺想法先变得可见。', question: '能不能在长设计说明之前，先拿到一张有用的参考图？', note: '生成的是概念图，不是已由客户验收的最终设计。', mark: 'asterisk' },
  { id: 'muse', number: '003', title: 'Muse 远程电脑桥', category: '远程桌面 · 实验', status: '部分流程已测试', description: '用 Python 和 PowerShell 从远端读取 Windows 桌面。', question: '远程操作的可靠性与权限边界应该怎样建立？', note: '读屏和截图测过；点击、键入尚未完整验收。', mark: 'wave' },
  { id: 'beichen', number: '004', title: '北辰知识图谱', category: '知识管理 · 原型', status: '基础部分已完成', description: '把个人知识组织成图谱的独立应用实验。', question: '图谱应该帮助我看到哪些普通文件夹看不到的联系？', note: '登录和数据库基础已完成；知识编辑、交互图谱和 AI 功能还在后续阶段。', mark: 'dots' },
  { id: 'games', number: '005', title: '3D 与游戏草稿', category: 'Three.js · 玩法', status: '可展示原型', description: '一个实验仓库里的 FPS、足球、地球和城市等交互场景。', question: '一个交互场景在成为完整游戏之前，可以先表达什么？', note: '这是多个作品原型的合集，不重复算成多款商业产品。', mark: 'asterisk' },
  { id: 'wechat', number: '006', title: '公众号 GEO 写作 Demo', category: '内容 · Demo', status: '单页演示', description: '生成 GEO 标题、文章草稿和封面提示词的小页面。', question: '生成的内容真正发布之前，还需要核对什么？', note: '尚无完整检索、事实核验或自动发布流程。', mark: 'wave' },
];

export const zhTimeline = [
  { year: '2026', title: '想法开始走进真实场景。', items: ['开始做 AI 和 GEO 工具。', '参与本地商家的真实项目交付。', '把 HR 专业兴趣和动手做 AI 项目连在一起。'], draft: true },
  { year: '更早', title: '有很多问题，没有刻意安排的起点。', items: ['学习人力资源管理。', '持续关注产品、历史和人们如何组织协作。', '也给值得记录的生活留些位置。'], draft: false },
];

export const zhInterests = ['历史', '足球', '动漫', '旅行', 'AI', '随手做点东西'];
