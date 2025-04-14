// stores/login.js
import { defineStore } from 'pinia'

export const navigationStore = defineStore('navigation', {
    state: () => ({
      page: 'Home',
     
    }),
    actions: {
      changePageTo(Npage) {
        this.page=Npage
        console.log('new page ='+this.page)    
      },
    },
  })
  