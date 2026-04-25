import type { MarkdownItEnv } from '@mdit-vue/types'

export type MarkdownEnv = MarkdownItEnv & {
  frontmatter: {
    title: string
    description: string
    date: Date
  }
}
