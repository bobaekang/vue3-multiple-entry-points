import { createApp } from 'vue'
import './index.css'

const BUILD_TARGETS = {
  app: './App.vue',
  test: './Test.vue',
}

const path = BUILD_TARGETS[import.meta.env.VITE_BUILD_TARGET] || './App.vue'

import(`${path}`).then(({ default: App }) => createApp(App).mount('#app'))
