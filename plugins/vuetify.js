// plugins/vuetify.js
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import * as labs from 'vuetify/labs/components'
export default defineNuxtPlugin(nuxtApp => {
  const vuetify = createVuetify({
    ssr: false,    
    directives,
    components: {
        ...labs,...components,
      },
      defaults: {
        VDataTable: {
          fixedHeader: true,
          noDataText: 'Results not found',
        },
      },
  })
   nuxtApp.vueApp.use(vuetify)
})
