import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { viteStaticCopy } from 'vite-plugin-static-copy';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import tailwindcss from 'tailwindcss';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    nodeResolve(),
    commonjs(),
    viteStaticCopy({
      targets: [
        {
          src: 'src/ink/*.ink',
          dest: 'ink'
        },
        {
          src: 'src/ink/*.json',
          dest: 'ink'
        },
        {
          src: 'src/game/shaders/*.glsl',
          dest: 'game/shaders'
        },
        {
          src: 'src/assets/ui/*.png',
          dest: 'assets/ui'
        },
        {
          src: 'src/assets/audio/*.mp3',
          dest: 'assets/audio'
        },
        {
          src: 'src/assets/items/*.png',
          dest: 'assets/items'
        },
        {
          src: 'src/assets/backgrounds/*.png',
          dest: 'assets/backgrounds'
        },
        {
          src: 'src/assets/characters/*.png',
          dest: 'assets/characters'
        }
      ]
    })
  ],
  css: {
    postcss: {
      plugins: [tailwindcss()],
    },
  },

  optimizeDeps: {
    include: ['inkjs']
  },
  build: {
    rollupOptions: {
      plugins: [commonjs()],
    },
    commonjsOptions: {
      include: [/inkjs/, /node_modules/]
    }
  },
  logLevel: 'info',
})
