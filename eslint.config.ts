import antfu from '@antfu/eslint-config'

export default antfu({
  formatters: {
    html: true,
    markdown: 'prettier',
    css: true,
  },
})
