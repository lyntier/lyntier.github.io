import BlogLayout from './layouts/BlogLayout.vue'
import BlogPageLayout from './layouts/BlogPageLayout.vue'
import GameLayout from './layouts/GameLayout.vue'
import GamePageLayout from './layouts/GamePageLayout.vue'
import HomeLayout from './layouts/HomeLayout.vue'

export default [
  {
    path: '/',
    component: HomeLayout,
  },
  {
    path: '/blog',
    children: [
      {
        path: '',
        component: BlogLayout,
      },
      {
        path: ':page',
        component: BlogPageLayout,
      },
    ],
  },
  {
    path: '/games',
    children: [
      {
        path: '',
        component: GameLayout,
      },
      {
        path: ':game',
        component: GamePageLayout,
      },
    ],
  },
]
