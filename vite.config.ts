import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import fs from 'node:fs';
import path from 'node:path';
import { defineConfig, type Plugin } from 'vite';
import { SITE_IMAGES, localImagePath } from './scripts/image-manifest.mjs';

const cacheSiteImagesPlugin = (): Plugin => ({
  name: 'cache-site-images',
  enforce: 'pre',
  transform(code, id) {
    if (!id.includes('/src/')) return null;

    let transformed = code;
    for (const image of SITE_IMAGES) {
      const cachedFile = path.resolve('public/images/site', image.file);

      // The prebuild cache is best-effort. Only point the application to the
      // local asset when the file was actually downloaded; otherwise preserve
      // the original remote URL so component-level fallbacks can still work.
      if (!fs.existsSync(cachedFile)) continue;

      transformed = transformed.split(image.source).join(localImagePath(image.file));
    }

    return transformed === code ? null : { code: transformed, map: null };
  },
});

export default defineConfig(() => ({
  plugins: [cacheSiteImagesPlugin(), react(), tailwindcss()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, '.'),
    },
  },
  build: {
    target: 'es2020',
    cssCodeSplit: true,
    sourcemap: false,
    rollupOptions: {
      output: {
        manualChunks: {
          react: ['react', 'react-dom'],
          motion: ['motion/react'],
          icons: ['lucide-react'],
        },
      },
    },
  },
  server: {
    // HMR can be disabled in AI Studio via DISABLE_HMR to reduce file-watching overhead.
    hmr: process.env.DISABLE_HMR !== 'true',
    watch: process.env.DISABLE_HMR === 'true' ? null : {},
  },
}));
