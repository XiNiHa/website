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
      presets: [presetUno(), presetIcons()],
      transformers: [transformerVariantGroup()],
      /*
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
      */
    }),
  ],
})
