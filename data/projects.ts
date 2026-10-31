export type Project = {
  slug: string;
  number: string;
  name: string;
  category: string;
  status: string;
  description: string;
  problem: string;
  built: string;
  role: string;
  learning: string;
  parts?: { name: string; description: string }[];
  featured?: boolean;
};

export const projects: Project[] = [
  {
    slug: 'geo-copilot', number: '01', name: 'Soujian Lab',
    category: 'AI · GEO · Client work', status: '10 client engagements · intake paused', featured: true,
    description: 'A GEO project connecting brand research, AI search monitoring and content delivery, shaped through work with ten real clients.',
    problem: 'Local businesses needed a practical way to organize their facts, create useful content and check how they appear in AI recommendations.',
    built: 'A workspace for client information, titles, articles, review and delivery. Its supporting tools cover customer website packages and image/video production. Soujian Lab presents Copilot and Research Lab through a fictional interactive case. The real business systems remain local.',
    role: 'I defined requirements, tested outputs, chose approaches from feedback, refined the workflow and spoke with clients. AI produced almost all of the implementation code.',
    learning: 'Platform rules changed, so we stopped taking new clients. I still want clearer evidence of what helped each client, beyond what the system generated.',
    parts: [
      { name: 'Site Builder', description: 'Generates customer website packages from client configurations. A tool within the GEO work, not a separate product line.' },
      { name: 'Image & Video Workspace', description: 'Turns local materials into graphics and short videos, with a task queue for content production.' },
    ],
  },
  {
    slug: 'research-lab', number: '02', name: 'Research Lab',
    category: 'AI search · Monitoring', status: 'Research module · shared Soujian showcase',
    description: 'A separate place to investigate public sources and sample Doubao answers.',
    problem: 'A single AI answer says little about where a recommendation came from or whether it can be repeated.',
    built: 'A research tool that keeps sources, investigation snapshots and sampling results. Local tests checked the database and a bridge to GEO Copilot; ongoing live sampling has not yet been confirmed.',
    role: 'I framed the monitoring questions, tested workflows and reviewed the results. AI handled most of the code implementation.',
    learning: 'Traceable sources and repeatable sampling matter more than one impressive answer.',
  },
  {
    slug: 'xuxiake-ai', number: '03', name: 'Xu Xiake AI',
    category: 'AI · Travel · Product', status: 'Release recorded · public access needs rechecking',
    description: 'Two travel companions, one route they can both agree on.',
    problem: 'Two people may want different things from a trip. A useful planner has to explain trade-offs instead of silently choosing for them.',
    built: 'A two-person preference and constraint flow that combines Feizhu place candidates, Amap routes and AI explanations. Browser testing is recorded; I have not yet used it as my own travel tool.',
    role: 'I shaped the negotiation flow, tested the experience and chose revisions from the results. AI wrote almost all implementation code.',
    learning: 'The hardest part is making it clear why a stop was removed, replaced or kept.',
  },
  {
    slug: 'onework', number: '04', name: 'OneWork',
    category: 'AI agents · Collaboration', status: 'Prototype · transactions simulated',
    description: 'An experiment in assigning, quoting and accepting AI-assisted work.',
    problem: 'If an agent can help people coordinate work, who authorizes the action and who checks the outcome?',
    built: 'A prototype covering requirements, quotes, mutual agreement, delivery checks and human acceptance. Its Agent Economy module has real model-call tests and local CSV/file execution. Identities and funds are simulated; this is not a live marketplace.',
    role: 'I set the product questions, tested the flow and reviewed decisions. AI handled almost all code implementation.',
    learning: 'A convincing demo is only the beginning of a trustworthy transaction workflow.',
  },
  {
    slug: 'personal-os', number: '05', name: 'Personal OS',
    category: 'Personal software · Organization', status: 'In development · not yet used personally',
    description: 'A home for projects, learning, competitions and the moving pieces of life.',
    problem: 'Important plans and unfinished ideas end up scattered across too many places.',
    built: 'A running personal workspace with pages for projects, study, competitions, job search and daily life. It is still in development and I have not started using it myself.',
    role: 'I chose what should be collected, checked the interface and iterated on the structure with AI-assisted implementation.',
    learning: 'The real test is whether I return to it when there is no reason to demo it.',
  },
  {
    slug: 'atlas', number: '06', name: 'Atlas — My World Footprints',
    category: 'Travel · Personal software', status: 'In development · not yet used personally',
    description: 'A map for remembering places through visits, photos and time.',
    problem: 'A list of destinations loses the small details that make a trip feel like mine.',
    built: 'A travel map with visited places, photos, a timeline and ZIP backup. Local acceptance screenshots exist; I have not started using it myself.',
    role: 'I shaped and checked the experience; AI produced most of the implementation code.',
    learning: 'A personal map becomes meaningful only after real memories keep accumulating in it.',
  },
];
