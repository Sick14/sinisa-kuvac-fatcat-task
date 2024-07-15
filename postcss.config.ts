import autoprefixer from 'autoprefixer';
import tailwindcss from 'tailwindcss';
import { UserConfig } from 'vite';

const config: UserConfig['css'] = {
  postcss: {
    plugins: [
      tailwindcss,
      autoprefixer,
    ],
  },
};

export default config;