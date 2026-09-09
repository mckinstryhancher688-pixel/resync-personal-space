import sharp from 'sharp';
import { mkdir } from 'node:fs/promises';
await mkdir('public/images', { recursive: true });
for (const name of ['mountain-air', 'desk-notes', 'gallery-light', 'street-corner', 'studio-space']) {
  const result = await sharp(`source-images/${name}.jpg`).rotate().resize({ width: 1400, height: 1600, fit: 'inside', withoutEnlargement: true }).webp({ quality: 82 }).toFile(`public/images/${name}.webp`);
  console.log(`${name}: ${result.width} × ${result.height}, ${Math.round(result.size / 1024)} KB`);
}
