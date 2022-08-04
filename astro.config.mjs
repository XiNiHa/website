import { defineConfig } from 'astro/config'
import solid from '@astrojs/solid-js'
import yaml from '@rollup/plugin-yaml'
import unocss from 'unocss/vite'
import { presetUno, presetIcons, transformerVariantGroup } from 'unocss'

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [
      yaml(),
      unocss({
        presets: [presetUno(), presetIcons()],
        transformers: [transformerVariantGroup()],
        extractors: [
          {
            extract: ({ code }) =>
              new Set(
                code
                  .split(/[(\s'"`;=)]|(?:\\")+/g)
                  .filter(v =>
                    /(?!\d|-{2}|-\d)[a-zA-Z0-9\u00A0-\uFFFF-_:%-?]/.test(v)
                  )
              ),
          },
        ],
      }),
    ],
  },
  integrations: [solid()],
})
