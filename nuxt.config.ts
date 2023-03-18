import formatRelativeWithOptions from "date-fns/esm/fp/formatRelativeWithOptions";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({  
  ssr:false,
  runtimeConfig: {
    // The private keys which are only available server-sirde
    apiSecret: '123',
    // Keys within public are also exposed client-side
    public: {
      BASE_URL: 'https://app.ngscha.ni.gov.ng/api/v1'
    },
    pages: true,
  },
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
