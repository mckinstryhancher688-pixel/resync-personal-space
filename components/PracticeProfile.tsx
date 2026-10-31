export function PracticeProfile({ lang = 'en' }: { lang?: 'en' | 'zh' }) {
  const zh = lang === 'zh';
  const steps = zh ? [
    ['把问题说清楚', '从客户反馈或自己遇到的问题出发，明确谁在用、想完成什么、怎样算完成。'],
    ['让流程跑起来', '借助 AI 实现最小版本，先把资料、输入、输出和人工确认串在一起。'],
    ['亲自测试与取舍', '操作界面、检查结果、比较方案，根据反馈决定保留、调整或暂停什么。'],
    ['继续补技术底座', '学习 Python、SQL、Git 和统计，让自己逐步能解释数据、代码与验证方法。'],
  ] : [
    ['Define the problem', 'Start with client feedback or a problem I encounter. Specify the user, desired outcome and acceptance criteria.'],
    ['Build a working path', 'Use AI to implement a small version, connecting inputs, outputs and the points that need human confirmation.'],
    ['Test and make trade-offs', 'Operate the interface, inspect results and compare approaches. Decide what to keep, revise or pause.'],
    ['Build my foundations', 'Study Python, SQL, Git and statistics so I can increasingly explain the data, code and validation behind a tool.'],
  ];
  return <section className="practice-profile"><div className="shelf-heading"><div><p className="eyebrow">{zh ? '我的工作方式' : 'HOW I WORK'}</p><h2>{zh ? '把一个问题，推进到可检验的结果。' : 'Take a question to a result I can check.'}</h2></div></div><div className="practice-grid">{steps.map(([title, text], i) => <article key={title}><span className="micro">0{i + 1}</span><h3>{title}</h3><p>{text}</p></article>)}</div><p className="practice-boundary">{zh ? '需求、测试、方案选择与客户沟通由我参与推进；具体代码几乎全部由 AI 实现。项目技术栈说明系统使用了什么，不代表我已独立熟练掌握其中每项技术。' : 'I contribute requirements, testing, approach selection and client communication. AI has produced almost all implementation code. A project’s stack describes the system, not independent mastery of every technology.'}</p></section>;
}
