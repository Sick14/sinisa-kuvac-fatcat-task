import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import autoprefixer from 'autoprefixer';
import tailwindcss from 'tailwindcss';

export default defineConfig({
    css: {
        postcss: {
          plugins: [
            tailwindcss,
            autoprefixer,
          ],
        },
      },
    plugins: [react()],
    define: {
        __CWD__: JSON.stringify(process.cwd()),
    },
});
