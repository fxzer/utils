import antfu from '@antfu/eslint-config'

export default antfu({
  formatters: true,
  typescript: {
    overrides: {
      'ts/ban-ts-comment': 'off',
      'ts/prefer-ts-expect-error': 'off',
    },
  },
})
