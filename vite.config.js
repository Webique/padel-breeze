import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { viteStaticCopy } from 'vite-plugin-static-copy';
import path from 'path';

export default defineConfig({
  plugins: [
    react(),

    // Copies index.html → 404.html during build
    viteStaticCopy({
      targets: [
        {
          src: path.resolve(__dirname, 'dist/index.html'),
          dest: '', // copy to dist/
          rename: '404.html'
        }
      ]
    })
  ],

  // Set the base path to match GitHub Pages URL
  base: '/padel-breeze/',

  // Optional: resolve aliases
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    }
  },

  // Optional: ensure build output directory is clean
  build: {
    outDir: 'dist',
    emptyOutDir: true,
  },
});
