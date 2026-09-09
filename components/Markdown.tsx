// Deliberately small, safe Markdown subset. Swap at this boundary for an MDX renderer.
// Raw HTML is rendered as text, never executed.
export function Markdown({ source }: { source: string }) {
  return <div className="prose">{source.split(/\n\s*\n/).map((block, i) => block.startsWith('## ') ? <h2 key={i}>{block.slice(3)}</h2> : block.startsWith('> ') ? <blockquote key={i}>{block.slice(2)}</blockquote> : <p key={i}>{block}</p>)}</div>;
}
