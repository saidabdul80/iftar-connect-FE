import { useUserStore } from '@/stores/userStore'
export default defineNuxtRouteMiddleware(async (to, from) => {
  const store = useUserStore()
 // const $api = useNuxtApp();
    // isAuthenticated() is an example method verifying if a user is authenticated        
    if (await store.isAuthenticated() == false) {
      return navigateTo('/login')
    } 
  })