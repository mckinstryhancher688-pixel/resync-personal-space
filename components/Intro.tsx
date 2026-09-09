export function Intro({ index, title, description, aside }: { index: string; title: string; description: string; aside?: string }) {
  return <section className="page-intro"><div className="eyebrow"><span>{index} / RESYNC</span>{aside && <span>{aside}</span>}</div><h1>{title}<span className="blue">.</span></h1><p>{description}</p></section>;
}
