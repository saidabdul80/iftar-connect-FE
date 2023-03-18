import VueGoogleMaps from '@fawmi/vue-google-maps'
export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.use(VueGoogleMaps, {
    load: {
        key: 'AIzaSyAxL1QToG6tMe7HaZJQcBLRcNW1wnBfbgc',
        language: 'en',
        libraries: "places" 
    },
  })  
})