import { defineConfig } from 'astro/config'
import solid from '@astrojs/solid-js'
import unocss from 'unocss/vite'
import { presetUno, presetIcons, transformerVariantGroup } from 'unocss'

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [
      unocss({
        presets: [presetUno(), presetIcons()],
        transformers: [transformerVariantGroup()],
      }),
    ],
  },
  integrations: [solid()],
})
