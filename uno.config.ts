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
})
