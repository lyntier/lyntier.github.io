<script setup lang="ts">
import NavItem from './components/NavItem.vue'
</script>

<template>
  <div>
    <nav class="flex h-10 [&>*]:(flex-grow line-height-10)">
      <NavItem to="/">
        Home
      </NavItem>
      <NavItem to="/blog">
        Blog
      </NavItem>
      <NavItem to="/games">
        Games
      </NavItem>
    </nav>
    <RouterView v-slot="{ Component }">
      <template v-if="Component">
        <Suspense>
          <component :is="Component" class="max-w-2xl m-auto" />
          <template #fallback>
            Loading...
          </template>
        </Suspense>
      </template>
    </RouterView>
  </div>
</template>
