import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import * as Icons from '@element-plus/icons-vue'

export default defineNuxtPlugin(nuxtApp => {
  // Register Element Plus globally
  nuxtApp.vueApp.use(ElementPlus)

  // Register each icon globally
  for (const [key, component] of Object.entries(Icons)) {
    nuxtApp.vueApp.component(key, component)
  }

  // Provide a simple ID provider for SSR
  let currentId = 0;
  nuxtApp.provide('idProvider', {
    generateId() {
      return `id-${currentId++}`;
    }
  });
})
