import assert from 'node:assert/strict';
import { readFileSync, existsSync } from 'node:fs';
import { resolve, join } from 'node:path';

const root = resolve('out');
const routes = ['/', '/work/', '/writing/', '/now/', '/lab/', '/about/', '/work/geo-copilot/', '/work/geo-audit-retrieval/', '/work/boss-recruitment-assistant/', '/work/storefront-generator/', '/work/ai-vocabulary/', '/writing/ai-recommendations/', '/writing/hr-as-software/', '/writing/building-before-knowing/', '/writing/singapore-august-2026/'];
let checkedLinks = 0;
for (const route of routes) {
  const file = join(root, route, 'index.html');
  assert.ok(existsSync(file), `Missing exported route: ${route}`);
  const html = readFileSync(file, 'utf8');
  assert.match(html, /<title>[^<]+<\/title>/, `Missing title: ${route}`);
  assert.match(html, /<meta name="description"/, `Missing description: ${route}`);
  assert.match(html, /<meta property="og:title"/, `Missing OpenGraph: ${route}`);
  assert.match(html, /id="main"/, `Missing main anchor: ${route}`);
  if (route.startsWith('/writing/') && route !== '/writing/') assert.match(html, /noindex/, `Sample note should not be indexed: ${route}`);
  for (const match of html.matchAll(/(?:href|src)="(\/[^"?#]*)(?:[?#][^"]*)?"/g)) {
    const path = decodeURIComponent(match[1]);
    if (path.startsWith('//')) continue;
    const target = join(root, path);
    assert.ok(existsSync(target) || existsSync(join(target, 'index.html')), `Broken asset/link ${path} from ${route}`);
    checkedLinks++;
  }
}
assert.ok(existsSync(join(root, '404.html')), 'Missing custom 404');
assert.ok(!existsSync(join(root, 'photos')), 'Original photos must not ship');
console.log(`PASS: ${routes.length} pages; ${checkedLinks} internal links/assets; metadata; draft noindex; custom 404; no original-image payload.`);
