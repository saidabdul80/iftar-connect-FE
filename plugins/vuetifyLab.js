// plugins/vuetify.js
import { createVuetify } from 'vuetify'

import * as labs from 'vuetify/labs/components'
export default defineNuxtPlugin(nuxtApp => {
  const vuetifyLab = createVuetify({
    ssr: true,
    components: {
        ...labs,
      },
      defaults: {
        VDataTable: {
          fixedHeader: true,
          noDataText: 'Results not found',
        },
      },
  })
   //nuxtApp.vueApp.use(vuetifyLab)
})
