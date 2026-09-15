import {
  defineConfig,
  presetIcons,
  presetWind3,
  transformerVariantGroup,
} from 'unocss'

export default defineConfig({
  content: {
    pipeline: {
      include: ['src/**/*'],
    },
  },
  presets: [presetWind3(), presetIcons()],
  transformers: [transformerVariantGroup()],
  shortcuts: {
    'hide-br-on-small': 'lt-lg:[&_br]:hidden',
    'markdown-body':
      'whitespace-pre-wrap [&_ul]:(list-disc pl-6 mt-4 flex flex-col gap-3) [&_li]:print:break-inside-avoid-page [&_a]:(underline text-#666)',
  },
})
