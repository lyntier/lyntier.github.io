<script setup lang="ts">
const props = defineProps<{
  to: string
}>()
</script>

<template>
  <RouterLink :to="props.to" class="text-center">
    <slot />
  </RouterLink>
</template>

<style scoped>
a:hover,
a.router-link-active {
  color: var(--ctp-mocha-base);
  background-color: var(--ctp-mocha-flamingo);
}
</style>
