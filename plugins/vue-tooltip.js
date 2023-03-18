import Swal from 'sweetalert2'
import VTooltip from 'v-tooltip'
export default defineNuxtPlugin(nuxtApp => {    
     nuxtApp.vueApp.use(VTooltip)
})
  