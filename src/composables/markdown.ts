import { frontmatterPlugin } from '@mdit-vue/plugin-frontmatter'
import MarkdownIt from 'markdown-it'

export function useMarkdown() {
  const markdown = MarkdownIt({ html: true })
    .use(frontmatterPlugin)

  return { markdown }
}
