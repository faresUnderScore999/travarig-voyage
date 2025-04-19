import { useLoginStore } from '~/stores/login'

export default defineNuxtRouteMiddleware((to, from) => {
  const userStore = useLoginStore()

  // Access the cookie in Nuxt 3 middleware
  const refreshToken = useCookie('refresh_token')

  if (refreshToken.value) {
    userStore.logedin = true
  }

  console.log('user loged = ' + userStore.logedin)
})
