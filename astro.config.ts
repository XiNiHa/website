import { defineConfig } from 'astro/config'
import solid from '@astrojs/solid-js'
import yaml from '@rollup/plugin-yaml'
import unocss from 'unocss/astro'

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [yaml()],
  },
  integrations: [solid(), unocss()],
})
