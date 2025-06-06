import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { viteStaticCopy } from 'vite-plugin-static-copy';
import path from 'path';

export default defineConfig({
  plugins: [
    react(),

    // ✅ Copy prebuilt index.html from public → dist/404.html
    viteStaticCopy({
      targets: [
        {
          src: path.resolve(__dirname, 'public/index.html'),
          dest: '.', // goes into dist/
          rename: '404.html'
        }
      ]
    })
  ],

  // ✅ GitHub Pages base path
  base: '/padel-breeze/',

  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    }
  },

  build: {
    outDir: 'dist',
    emptyOutDir: true,
  },
});
