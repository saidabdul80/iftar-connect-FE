// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({  
  ssr:false,
  target:'static',
 
  /* generate: {
    routes: [
      '/index',
      '/about',
      '/locator',
      '/meal',
      '/organizer_login',
      '/setup_meal',
      '/sponsors',
      '/terms',
    ]
  } */
  typescript: {
        shim: false
      }, 
      css: [
        'vuetify/lib/styles/main.sass',
        '@mdi/font/css/materialdesignicons.min.css',
        '~/assets/css/styles.css'
      ],      
      build: {
        transpile: ['vuetify','api','geoMap'],
      }, 
      vite: {
        
        define: {
          'process.env.DEBUG': true,
        },
        build: {
          chunkSizeWarningLimit: 1600,
        },
      
      },      
      modules: [        
        '@pinia/nuxt',
        '@pinia-plugin-persistedstate/nuxt'
      ],
      pinia: {
        autoImports: [
          // automatically imports `defineStore`
          'defineStore', // import { defineStore } from 'pinia'
          ['defineStore', 'definePiniaStore'], // import { defineStore as definePiniaStore } from 'pinia'
        ],
      }     
}) 
