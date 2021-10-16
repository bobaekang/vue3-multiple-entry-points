import { createApp } from 'vue'
import './index.css'

const buildTarget = import.meta.env.VITE_BUILD_TARGET || 'app'
const rootComponent = (() => {
  if (buildTarget === 'app') return import('./App.vue')
  if (buildTarget === 'test') return import('./Test.vue')
})()

createApp(rootComponent).mount('#app')
