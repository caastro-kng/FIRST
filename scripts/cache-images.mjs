import { mkdir, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { SITE_IMAGES } from './image-manifest.mjs';

const OUTPUT_DIR = path.resolve('public/images/site');
await mkdir(OUTPUT_DIR, { recursive: true });

const download = async ({ file, source }) => {
  try {
    const response = await fetch(source, {
      headers: { 'user-agent': 'Mozilla/5.0 FIRST educational website build' },
      signal: AbortSignal.timeout(15000),
    });

    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    const buffer = Buffer.from(await response.arrayBuffer());
    if (buffer.length < 1024) throw new Error('arquivo recebido é pequeno demais');

    await writeFile(path.join(OUTPUT_DIR, file), buffer);
    console.log(`✓ ${file} (${Math.round(buffer.length / 1024)} KB)`);
  } catch (error) {
    console.warn(`⚠ ${file}: não foi possível armazenar localmente (${error.message}). O fallback externo continuará disponível.`);
  }
};

await Promise.all(SITE_IMAGES.map(download));
