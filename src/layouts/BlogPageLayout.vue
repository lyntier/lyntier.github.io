<script setup lang="ts">
import type { MarkdownEnv } from '../types'
import { useRoute } from 'vue-router'
import { useMarkdown } from '../composables/markdown'

const { markdown } = useMarkdown()
const route = useRoute()

const md = (await import(`../assets/blog/${route.params.page}.md?raw`)).default

const env = {} as MarkdownEnv

const rendered = markdown.render(md, env)

const imageUrl = new URL(`../assets/blog/${route.params.page}.png`, import.meta.url)

function goUp() {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}
</script>

<template>
  <div class="pt-5 text-left">
    <div class="pt-5 pb-5" :style="{ background: `linear-gradient(0deg, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.3)), url(${imageUrl})` }">
      <div>
        <h1 class="line-height-12 w-lg mt-0 mb-0 ml-48">
          {{ env.frontmatter.title }}
        </h1>
        <h2 class="w-md m-auto pt-8">
          {{ env.frontmatter.description }}
        </h2>
      </div>
    </div>
    <div class="w-2xl m-auto pl-5 pt-5 italic font-600">
      Written on {{ env.frontmatter.date.toLocaleDateString() }}.
    </div>
    <div class="w-2xl m-auto pl-5 pr-5 pb-5 [&_p]:(pt-4 pb-2) [&_em]:text-rose-3" v-html="rendered" />
    <div class="w-10 h-10 i-carbon:arrow-up bg-blue m-auto mb-16 cursor-pointer" @click="goUp" />
  </div>
</template>
