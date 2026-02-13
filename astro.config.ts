import { defineConfig } from 'astro/config'
import solid from '@astrojs/solid-js'
import yaml from '@rollup/plugin-yaml'
import unocss from 'unocss/astro'
import { presetWind3, presetIcons, transformerVariantGroup } from 'unocss'

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [yaml()],
  },
  integrations: [
    solid(),
    unocss({
      content: {
        pipeline: {
          include: ['src/**/*'],
        },
      },
      presets: [presetWind3(), presetIcons()],
      transformers: [transformerVariantGroup()],
    }),
  ],
})
