import { createServer } from 'node:http';
import { readFile, stat, readdir } from 'node:fs/promises';
import { resolve, join, extname, sep } from 'node:path';
const root = resolve('out');
// Next's Windows static export nests segment payloads; browsers request dotted names.
// Resolve only existing export files, without changing the deployed output.
const segmentAliases = new Map();
for (const entry of await readdir(root, { recursive: true })) {
  const normalized = entry.replaceAll('\\', '/');
  const start = normalized.indexOf('__next.');
  if (start >= 0 && normalized.endsWith('.txt')) {
    const alias = normalized.slice(0, start) + normalized.slice(start).replaceAll('/', '.');
    segmentAliases.set('/' + alias, resolve(root, entry));
  }
}
const types = { '.html': 'text/html; charset=utf-8', '.css': 'text/css', '.js': 'text/javascript', '.json': 'application/json', '.txt': 'text/plain', '.png': 'image/png', '.jpg': 'image/jpeg', '.jpeg': 'image/jpeg', '.webp': 'image/webp', '.svg': 'image/svg+xml', '.ico': 'image/x-icon' };
await stat(join(root, 'index.html')).catch(() => { throw new Error('Run npm run build before npm start.'); });
createServer(async (request, response) => {
  try {
    const pathname = decodeURIComponent(new URL(request.url, 'http://localhost').pathname);
    let file = segmentAliases.get(pathname) || resolve(root, '.' + pathname);
    if (file !== root && !file.startsWith(root + sep)) { response.writeHead(403); response.end(); return; }
    let status = 200;
    try { if ((await stat(file)).isDirectory()) file = join(file, 'index.html'); await stat(file); }
    catch { file = join(root, '404.html'); status = 404; }
    const body = await readFile(file);
    response.writeHead(status, { 'Content-Type': types[extname(file)] || 'application/octet-stream', 'Cache-Control': 'no-cache' });
    response.end(request.method === 'HEAD' ? undefined : body);
  } catch { response.writeHead(400); response.end('Invalid request'); }
}).listen(3091, '127.0.0.1', () => console.log('Resync production preview: http://127.0.0.1:3091'));
