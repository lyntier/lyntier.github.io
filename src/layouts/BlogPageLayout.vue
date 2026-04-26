<script setup lang="ts">
import type { MarkdownEnv } from '../types'
import { useRoute, useRouter } from 'vue-router'
import { useMarkdown } from '../composables/markdown'

const route = useRoute()
const router = useRouter()
const { markdown } = useMarkdown()

const md = (await import(`../assets/blog/${route.params.page}.md?raw`)).default

const env = {} as MarkdownEnv

const rendered = markdown.render(md, env)

function goUp() {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

function goBack() {
  router.push('/blog')
}
</script>

<template>
  <div class="pt-5 text-left">
    <div class="mt-5 pb-5 pl-2 pt-2 bg-[var(--ctp-mocha-flamingo)]">
      <div>
        <div class="absolute bg-[var(--ctp-mocha-base)]">
          <div class="w-16 h-16 i-basil-arrow-left-solid cursor-pointer text-[var(--ctp-mocha-flamingo)]" @click="goBack" />
        </div>
        <h1 class="mt-0 mb-0 ml-20">
          {{ env.frontmatter.title }}
        </h1>
        <h2 class="ml-8 pt-8">
          {{ env.frontmatter.description }}
        </h2>
      </div>
    </div>
    <div class="m-auto pl-5 pt-5 italic font-600">
      <span>Written on {{ env.frontmatter.date.toLocaleDateString() }}.</span>
    </div>
    <div class=" m-auto p-5 pt-0">
      <div class="[&_em]:text-[var(--ctp-mocha-flamingo)] [&_p]:(pt-4 pb-2)" v-html="rendered" />
    </div>
    <div class="w-10 h-10 i-basil-arrow-up-solid text-[var(--ctp-mocha-flamingo)] m-auto mb-16 cursor-pointer" @click="goUp" />
  </div>
</template>
