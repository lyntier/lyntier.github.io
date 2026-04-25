import { loadAll } from '@tsparticles/all'

import { tsParticles } from '@tsparticles/engine'
import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import routes from './routes'

import 'virtual:uno.css'
import './style.css'

const app = createApp(App)

const router = createRouter({
  history: createWebHistory(),
  routes,
})

app.use(router)

app.mount('#app')

const imgUrl = new URL('./assets/petal.png', import.meta.url)

async function loadParticles() {
  await loadAll(tsParticles)

  await tsParticles.load({
    id: 'tsparticles',
    options: {
      fullscreen: {
        enable: false,
      },
      particles: {
        move: {
          enable: true,
          speed: 6,
          direction: 135,
          angle: 20,
        },
        number: {
          value: 15,
        },
        size: {
          value: 5,
          animation: {
            enable: true,
            startValue: 'min',
            destroy: 'none',
            speed: 16,
            sync: true,
          },
        },
        roll: {
          darken: {
            enable: true,
            value: 25,
          },
          enable: true,
          speed: {
            min: 5,
            max: 15,
          },
        },
        shape: {
          type: 'image',
          options: {
            image: {
              src: imgUrl.toString(),
              width: 20,
              height: 20,
            },
          },
        },
        rotate: {
          value: {
            min: 0,
            max: 360,
          },
          direction: 'random',
          animation: {
            enable: true,
            speed: 30,
          },
        },
        tilt: {
          direction: 'random',
          enable: true,
          value: {
            min: 0,
            max: 360,
          },
          animation: {
            enable: true,
            speed: 30,
          },
        },
        wobble: {
          distance: 30,
          enable: true,
          speed: {
            min: -7,
            max: 7,
          },
        },
      },
    },
  })
}

loadParticles()
