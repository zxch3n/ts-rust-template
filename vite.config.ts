import { defineConfig } from 'vite';
import path from 'path';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true,
      },
    },
  },
  plugins: [react()],
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/index.ts'),
      name: '[[repo]]',
      fileName: (format) => {
        if (format === 'es') {
          return '[[repo]].es.mjs';
        }

        return `[[repo]].${format}.js`;
      },
    },
    rollupOptions: {
      external: ['react'],
    },
  },
  // @ts-ignore
  test: {},
});
