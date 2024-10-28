// @ts-check
import { defineConfig } from 'astro/config';

import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  base: '/', // Ajusta según sea necesario para tu entorno de despliegue
  integrations: [tailwind()],
  vite: {
    mode: 'development'
  }
});