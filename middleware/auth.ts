import { useUserStore } from '@/stores/userStore'
export default defineNuxtRouteMiddleware((to, from) => {
  const store = useUserStore()
 // const $api = useNuxtApp();
    // isAuthenticated() is an example method verifying if a user is authenticated        
      if (store.access_token == '') {         
        return navigateTo('/organizer_login')       
      } 
  })