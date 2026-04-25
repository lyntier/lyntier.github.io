<script setup lang="ts">
import type { MarkdownEnv } from '../types'
import { computed } from 'vue'
import { useMarkdown } from '../composables/markdown'

const { markdown } = useMarkdown()

const imports = import.meta.glob('../assets/blog/*.md', {
  query: '?raw',
  import: 'default',
  eager: true,
}) as Record<string, string>

const toc = Object.entries(imports).map(([name, md]) => {
  const trimmed = /\/blog\/(.*).md/.exec(name)?.[1]

  if (!trimmed)
    return undefined

  const env = {} as MarkdownEnv
  markdown.render(md, env)

  return {
    ...env,
    name: trimmed,
  }
}).filter(item => item !== undefined)

const sortedToc = computed(() => {
  return [...toc].sort((a, b) => {
    if (!a.frontmatter)
      return 1
    if (!b.frontmatter)
      return -1
    return b.frontmatter.date.getDate() - a.frontmatter.date.getDate()
  })
})
</script>

<template>
  <div>
    <div v-for="item in sortedToc" :key="item.name">
      {{ item.frontmatter.title }} - {{ item.frontmatter.date }}
    </div>
  </div>
</template>
