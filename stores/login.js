// stores/login.js
import { defineStore } from 'pinia'

export const useLoginStore = defineStore('login', {
    state: () => ({
      logedin: false,
      user:{}
    }),
    actions: {
      login(loginForm) {
        this.logedin=true
        this.user = Object.assign({}, loginForm)
        console.log(this.user)
      },
      logout(){
        this.logedin=false
      }
    },
  })
  