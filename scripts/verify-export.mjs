import assert from 'node:assert/strict';
import { readFileSync, existsSync } from 'node:fs';
import { resolve, join } from 'node:path';

const root = resolve('out');
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? '';
const projectSlugs = ['geo-copilot', 'research-lab', 'xuxiake-ai', 'onework', 'personal-os', 'atlas'];
const noteSlugs = ['ai-recommendations', 'hr-as-software', 'building-before-knowing', 'singapore-august-2026'];
const routes = [
  '/', '/work/', '/writing/', '/now/', '/lab/', '/about/',
  ...projectSlugs.map(slug => `/work/${slug}/`),
  ...noteSlugs.map(slug => `/writing/${slug}/`),
  '/zh/', '/zh/work/', '/zh/writing/', '/zh/now/', '/zh/lab/', '/zh/about/',
  ...projectSlugs.map(slug => `/zh/work/${slug}/`),
  ...noteSlugs.map(slug => `/zh/writing/${slug}/`),
];
let checkedLinks = 0;
for (const route of routes) {
  const file = join(root, route, 'index.html');
  assert.ok(existsSync(file), `Missing exported route: ${route}`);
  const html = readFileSync(file, 'utf8');
  assert.match(html, /<title>[^<]+<\/title>/, `Missing title: ${route}`);
  assert.match(html, /<meta name="description"/, `Missing description: ${route}`);
  assert.match(html, /<meta property="og:title"/, `Missing OpenGraph: ${route}`);
  assert.match(html, /id="main"/, `Missing main anchor: ${route}`);
  if ((route.startsWith('/writing/') && route !== '/writing/') || (route.startsWith('/zh/writing/') && route !== '/zh/writing/')) assert.match(html, /noindex/, `Sample note should not be indexed: ${route}`);
  for (const match of html.matchAll(/(?:href|src)="(\/[^"?#]*)(?:[?#][^"]*)?"/g)) {
    let path = decodeURIComponent(match[1]);
    if (path.startsWith('//')) continue;
    if (basePath) assert.ok(path === basePath || path.startsWith(basePath + '/'), 'Missing base path in ' + path + ' from ' + route);
    if (basePath && (path === basePath || path.startsWith(basePath + '/'))) path = path.slice(basePath.length) || '/';
    const target = join(root, path);
    assert.ok(existsSync(target) || existsSync(join(target, 'index.html')), `Broken asset/link ${path} from ${route}`);
    checkedLinks++;
  }
}
assert.ok(existsSync(join(root, '404.html')), 'Missing custom 404');
assert.ok(!existsSync(join(root, 'photos')), 'Original photos must not ship');
console.log(`PASS: ${routes.length} pages; ${checkedLinks} internal links/assets; metadata; draft noindex; custom 404; no original-image payload.`);




