export type ProjectEvidence = {
  stack: string[];
  image?: string;
  zh: { stage: string; proof: string; next: string; caption?: string };
  en: { stage: string; proof: string; next: string; caption?: string };
  demo?: string;
  source?: string;
};

// Curated public facts, checked 2026-10-31. Private archives and customer records are not shipped.
export const projectEvidence: Record<string, ProjectEvidence> = {
  'geo-copilot': {
    stack: ['Next.js', 'React', 'TypeScript', 'Supabase', 'Playwright'],
    image: '/images/projects/soujian-workspace.png', demo: 'https://geo.peiqirui.com/',
    zh: { stage: '可体验 · 虚构案例', proof: '主线有 10 位真实客户的工作经历。公开站可走通研究、监测、草稿、审核与导出演示；不连接客户数据。', next: '继续核对同口径采样与客户效果记录，完善研究到内容的反馈。', caption: '2026-10-31 · 公开演示工作台实拍，青禾家居为虚构客户。' },
    en: { stage: 'Try it · fictional case', proof: 'The main workflow grew through ten real client engagements. Its public demo connects research, monitoring, drafting, review and export using fictional data.', next: 'Strengthen comparable sampling and client outcome records, then improve the research-to-content feedback loop.', caption: '2026-10-31 · Actual public demo interface. Qinghe is a fictional client.' },
  },
  'research-lab': {
    stack: ['Next.js', 'TypeScript', 'Playwright', 'SQLite'], demo: 'https://geo.peiqirui.com/lab/',
    zh: { stage: '搜见实验室 · 研究模块', proof: '本地保留来源、调查快照、回答样本与写作 Brief，并有数据库和 Copilot 桥接验收记录。公开展示与 GEO 主线共用一个站点。', next: '持续记录采样口径与证据来源，区分品牌提及、来源引用和实际转化。' },
    en: { stage: 'Soujian Lab · research module', proof: 'The local app keeps sources, snapshots, answer samples and writing briefs, with database and Copilot bridge checks recorded. It shares the public showcase with the GEO project.', next: 'Keep sampling methods and provenance explicit; separate mentions, citations and actual conversions.' },
  },
  'xuxiake-ai': {
    stack: ['Next.js', 'TypeScript', 'Feizhu POI', 'Amap', 'Bailian'],
    image: '/images/projects/xuxiake-release.jpg', source: 'https://github.com/mckinstryhancher688-pixel/xuxiake-ai-hangzhou',
    zh: { stage: '已发布过 · 当前入口待复验', proof: '记录了双人偏好、硬约束、候选地点、路线解释与双方确认；10 月 24 日留有构建、浏览器和发布验收记录。本次访问原域名未成功。', next: '优先恢复稳定入口与 HTTPS，再向访客开放固定样例，控制地图和模型调用。', caption: '2026-10-24 · 发布验收截图，屏幕标注为非实时演示数据；不代表当前在线状态。' },
    en: { stage: 'Previously deployed · access needs rechecking', proof: 'Two-person preferences, constraints, places, route explanations and mutual confirmation are documented, with build, browser and release checks on October 24. The previous domain could not be reached in this review.', next: 'Restore stable access and HTTPS, then offer a bounded example with controlled map and model usage.', caption: '2026-10-24 · Release-check screenshot with non-live demo data. Not evidence of current availability.' },
  },
  onework: {
    stack: ['Next.js', 'React', 'TypeScript', 'SQLite', 'LLM API'],
    image: '/images/projects/onework-workspace.png',
    zh: { stage: '本地可运行 · 协作与交易原型', proof: '已覆盖需求整理、报价、协议、交付与人工验收。Agent Economy 有模型调用测试；CSV 计算与文件交付可本地执行，身份和资金仍为示例。', next: '先上线固定身份、模拟交易的体验版，再完善多人隔离、身份与调用额度。', caption: '2026-10-31 · 本地需求广场实拍，姓名、任务、预算与交易均为示例。' },
    en: { stage: 'Runs locally · collaboration prototype', proof: 'Covers requirements, quotes, agreements, delivery and human acceptance. Agent Economy has model-call tests and local CSV/file execution; identities and funds are simulated.', next: 'Start with fixed identities and simulated transactions before adding multi-user isolation, identity and usage limits.', caption: '2026-10-31 · Actual local marketplace interface. People, tasks, budgets and transactions are examples.' },
  },
  'personal-os': {
    stack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'shadcn/ui'],
    zh: { stage: '个人工作台 · 开发中', proof: '把项目、学习、比赛、求职和生活集中在同一界面；已有可运行页面。尚未确认持续自用。', next: '先用虚构日程和学习档案做展示，再通过日常使用验证哪些入口真正有用。' },
    en: { stage: 'Personal workspace · in development', proof: 'Brings projects, learning, competitions, job search and life into one running interface. Sustained personal use has not been confirmed.', next: 'Use fictional schedules and learning records for a showcase, then test usefulness through daily use.' },
  },
  atlas: {
    stack: ['Next.js', 'TypeScript', 'Leaflet', 'IndexedDB', 'JSZip'],
    zh: { stage: '本地地图工具 · 开发中', proof: '支持多次到访、照片、时间回看与含照片的 ZIP 备份恢复；途经与真实游玩分开统计。尚未确认持续自用。', next: '优先制作虚构足迹的公开体验版；照片和记录留在访客浏览器，提供清楚的备份说明。' },
    en: { stage: 'Local map tool · in development', proof: 'Supports repeat visits, photos, timeline playback and ZIP backup/restore including images. Transit and actual visits are counted separately. Sustained personal use is unconfirmed.', next: 'Publish a fictional journey first, keeping visitor photos and records in their browser with clear backup guidance.' },
  },
};
