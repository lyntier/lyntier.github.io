<script setup lang="ts">
</script>

<template>
  <div>
    <nav class="h-10 line-height-10 list-none flex [&>*]:flex-grow [&>.router-link-active]:bg-blue [&>.router-link-active]:text-white [&>:hover]:bg-blue-600 [&>:hover]:text-white">
      <RouterLink to="/">
        Home
      </RouterLink>
      <RouterLink to="/blog">
        Blog
      </RouterLink>
      <RouterLink to="/games">
        Games
      </RouterLink>
    </nav>
    <RouterView v-slot="{ Component }">
      <Transition mode="out-in">
        <template v-if="Component">
          <KeepAlive>
            <Suspense>
              <!-- main content -->
              <component :is="Component" />

              <!-- loading state -->
              <template #fallback>
                Loading...
              </template>
            </Suspense>
          </KeepAlive>
        </template>
      </Transition>
    </RouterView>
  </div>
</template>
