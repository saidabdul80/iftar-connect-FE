import Swal from 'sweetalert2'
const { $api } = useNuxtApp()
import axios from 'axios'
import { useUserStore } from '@/stores/userStore'
export const useOrganizerLogin = async () =>{
    const userStore = useUserStore()
    const res = await Swal.fire({
    title: 'Enter Crendentials',
    html:
      '<input id="swal-input1" class="swal2-input mb-3" placeholder="Phone Number">' +
      '<input id="swal-input2" class="swal2-input" placeholder="Password">',
    showCancelButton: true,
    confirmButtonText: 'Look up',
    showLoaderOnConfirm: true,
    preConfirm: async () => {
      
   /*    let phone_numberx = document.getElementById('swal-input1').value
      let passwordx = document.getElementById('swal-input2').value         
      if(passwordx =='' ||  phone_numberx ==''){
        Swal.showValidationMessage(
          `All Fields Required`
        )
      }  */
      console.log(userStore,'0000000')
     return axios.post('/organizers/login',{phone_number:phone_numberx,password:passwordx}).then(res=>{
         if(res.error){
           Swal.showValidationMessage(res.responseBody)
         }             
         console.log(res)
         userStore.access_token = res.responseBody.accessToken
         return true; 
     })
    },
    allowOutsideClick: false
    })/* .then(async (result) => {
        if (result.isConfirmed) {
            navigateTo("/setup_meal",{ replace: true })        
        }else{
           await navigateTo("/organizer", { replace: true })
        }
    }) */

    console.log(res)
}