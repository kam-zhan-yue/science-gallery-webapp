import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { viteStaticCopy } from 'vite-plugin-static-copy';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';

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
        }
      ]
    })
  ],
  optimizeDeps: {
    include: ['inkjs']
  },
  build: {
    rollupOptions: {
      plugins: [commonjs()]
    },
    commonjsOptions: {
      include: [/inkjs/, /node_modules/]
    }
  },
  logLevel: 'info',
})
