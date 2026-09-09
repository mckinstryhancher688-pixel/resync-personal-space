# Resync — a personal space

A quiet, editorial personal site. Built with Next.js App Router, TypeScript, React, Tailwind CSS and a small Framer Motion boundary. No CMS account, API key or database is required.

## Start locally

```powershell
cd 'D:\Driver\OneDrive\ドキュメント\ChatGPT\游戏\resync'
npm ci
npm run dev
```

Open http://127.0.0.1:3090. This project is isolated from the existing games in the parent directory.

```powershell
npm run lint
npm run typecheck
npm run build
node scripts/verify-export.mjs
```

`next build` emits a static website in `out/`. Host that directory on a static host with directory-index support and a custom 404 page. `npm start` serves the built site at http://127.0.0.1:3091; use `npm run dev` for local editing.

## Information architecture

- `/`: personal magazine cover, visual diary, short About, five projects, experiments and latest notes.
- `/work`: project index; `/work/[slug]`: problem, build and learning questions for each project.
- `/writing`: four sample notes; `/writing/[slug]`: readable article pages.
- `/now`: easily edited snapshot of current attention.
- `/lab`: expandable experiment ideas, explicitly marked as ideas rather than working demos.
- `/about`: personal context, provisional timeline and interests.
- Unknown URLs: custom 404.

## Edit the content

| File | What to change |
| --- | --- |
| `data/site.ts` | Name, location, GitHub/X/email links; replace `null` with real URLs |
| `data/photos.ts` | Central image paths, captions, alt text and proportions |
| `data/projects.ts` | Project descriptions, problem, build and learning |
| `data/writing.ts` | Note metadata and Markdown body |
| `data/now.ts` | Current activities, last-updated label and draft marker |
| `data/lab.ts` | Experiment ideas, status and questions |
| `data/about.ts` | Timeline and interests |
| `app/globals.css` | Layout, typography, colors and responsive breakpoints |

`lib/content.ts` is the asynchronous content boundary for a future CMS or Supabase integration. It currently reads local data. With static export, CMS reads happen at build time and content changes need another build. Do not add private credentials to client components.

`components/Markdown.tsx` supports a deliberately small Markdown subset: paragraphs, level-two headings, and blockquotes. Raw HTML is escaped by React. Replace this renderer with an MDX pipeline when full Markdown/MDX becomes useful; existing note data already separates metadata and body.

## Existing-site reuse

The earlier project at `D:\Driver\OneDrive\ドキュメント\ChatGPT\个人网站` was inspected as a reference. Its source and assets remain untouched. This version reuses five of its complete photos as preview imagery, keeps the content/UI separation, and replaces the earlier dark collage/card direction with an off-white editorial layout. The original Vinext deployment, backend scaffold, PDF files and credentials were not copied.

Optimized local WebP images are in `public/images` (about 842 KB total). Original working copies are in the ignored `source-images/` folder. Two old images with visible corruption were excluded. Image labels do not assert unconfirmed dates or travel destinations.

To regenerate images after replacing the originals, install `sharp` explicitly if your Next.js installation does not already include it, then run `node scripts/optimize-images.mjs`. Normal building does not require originals or regeneration.

## What is still a placeholder

- Photo authorship, personal captions and dates need confirmation; imagery is reused from the previous project.
- All four articles and their dates are sample drafts, with `noindex` on the draft detail pages.
- Project visuals are clearly labeled conceptual workflow illustrations, not screenshots of shipped software.
- Project learning statements are open questions, awaiting first-hand lessons and specific decisions.
- Now activities and timeline dates need a personal review.
- Lab entries are ideas, without fake demo buttons.
- GitHub, X and Email are non-clickable until real links are supplied.

## Five high-value replacements

1. 6–10 personal photos, including one strong cover image, with accurate captions.
2. A real GEO Copilot screenshot and one anonymized delivery story.
3. The actual current Now snapshot.
4. One complete personal article in your own words.
5. Real GitHub/X/email links and the repositories or demos you want to share.

## Small interactions and accessibility

Mobile navigation has an expanded state, closes after navigation, and supports Escape to return focus. Lab entries use native keyboard-accessible disclosures. Photos have alt text and reserved geometry; hover effects are optional. The footer's “still figuring it out.” button chooses a different short phrase and announces it through a live region. Reduced-motion preferences are respected, and the initial content is never hidden pending JavaScript.

The footer year is set during static generation, so rebuild at least annually. The hosting origin is set in `app/layout.tsx`; change it when using a custom domain. Social-preview metadata is present; no fabricated personal social image has been added.
