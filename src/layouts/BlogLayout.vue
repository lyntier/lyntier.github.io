<script setup lang="ts">
import type { MarkdownEnv } from '../types'
import { computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useMarkdown } from '../composables/markdown'

const { markdown } = useMarkdown()
const router = useRouter()

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

function getImageUrl(name: string) {
  return new URL(`../assets/blog/${name}.png`, import.meta.url)
}
function goToPage(name: string) {
  router.push(`/blog/${name}`)
}
</script>

<template>
  <div class="p-10 ">
    <div
      v-for="item in sortedToc"
      :key="item.name"
      class="h-70 mt-10 p-5 cursor-pointer hover:scale-105 transition-transform duration-200"
      :style="{ background: `linear-gradient(0deg, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.3)), url(${getImageUrl(item.name)})` }"
      @click="goToPage(item.name)"
    >
      <div class="w-xl m-auto text-left">
        <h1 class="mb-4">
          {{ item.frontmatter.title }}
        </h1>
        <h2>
          {{ item.frontmatter.description }}
        </h2>
        <p class="text-white pt-5">
          {{ item.frontmatter.date.toLocaleDateString() }}
        </p>
      </div>
    </div>
  </div>
</template>
