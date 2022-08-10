import { defineConfig } from 'astro/config'
import solid from '@astrojs/solid-js'
import yaml from '@rollup/plugin-yaml'
import unocss from 'astro-uno'
import { presetUno, presetIcons, transformerVariantGroup } from 'unocss'

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [yaml()],
  },
  integrations: [
    solid(),
    unocss({
      include: ['src/**/*'],
      presets: [presetUno(), presetIcons()],
      transformers: [transformerVariantGroup()],
    }),
  ],
})
