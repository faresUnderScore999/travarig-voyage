import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

import * as Icons from '@element-plus/icons-vue'

export default defineNuxtPlugin(nuxtApp => {
  nuxtApp.vueApp.use(ElementPlus) // Register Element Plus globally

  // Register each icon globally
  for (const [key, component] of Object.entries(Icons)) {
    nuxtApp.vueApp.component(key, component)
  }
})
