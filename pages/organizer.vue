<template>

    <center>
        <h1 class="text-green mt-2 mb-8">Become an Organizer</h1>
    </center>
    <v-form @submit.prevent ref="loginForm">
        <v-text-field color="green" variant="underlined" :rules="rules.name" v-model="name" class="mb-4" label="Name/Organization/Foundation"  hide-details="auto"></v-text-field>
        <!-- <v-text-field color="green" variant="underlined" :rules="rules.name" v-model="location"  class="mb-4" label="State/City"  hide-details="auto"></v-text-field> -->
        <div class="s-text-field mb-4" >
                <GMapAutocomplete :rules="rules.name" aria-placeholder="" class="pa-0" @place_changed="setPlace"></GMapAutocomplete>               
                <label :style="address!=''?{'font-size':'10px','top':'2px'}:{'top':'12px'}" class="label">Address</label>
        </div>
        <v-text-field color="green" variant="underlined" :rules="rules.name" v-model="phone_number"  class="mb-4" label="Contact Number"  hide-details="auto"></v-text-field>
        <v-text-field color="green" variant="underlined" :rules="rules.name" v-model="password" class="mb-4" label="Password"  hide-details="auto"></v-text-field>
        <div class="d-flex justify-content-center flex-column align-center">
            <v-btn type="submit" @click="submit()" class="w-50 bg-green text-white mb-3  px-10" size="x-large">Submit</v-btn>
          </div>
        </v-form>        
        <div class="d-flex justify-content-center flex-column align-center">
        <v-btn type="submit" @click="organizerPage()" class="underlined bg-white elevation-0  px-10" size="x-large">Goto Organizer's Page</v-btn>                    
        </div>
</template>

<script setup>
import Swal from 'sweetalert2'
    const { $api } = useNuxtApp()
  const name = ref('')
  const address = ref('')
  const phone_number = ref()
  const loginForm = ref(null)
  const password = ref('');
  definePageMeta({
    layout: "plain",
  });
  
    const address_url =  ref('')
    const cords = ref([])
    const  center = ref({lat: 51.093048, lng: 6.842120})
    
    function setPlace(e) {        
        address_url.value = e.url
        address.value = e.formatted_address
        cords.value = {lat: e.geometry.location.lat(), long:e.geometry.location.lng()}
    }
    function organizerPage(){      
      return navigateTo('/setup_meal')       
    }
  const rules ={
      name: [
        (value) => {
          if (value) return true
          return 'This Field Required'
        },
      ]   
    }
    //const clocation = ref('')
    async function validate () {      
      const { valid } = await loginForm.value.validate()
      if (valid){        
        return true
      } 
      return false
    }
    async function submit(){    
      if(await validate()){
        let res  = await $api.postData('/organizers','POST',{phone_number:phone_number.value,name:name.value,address:address.value, password:password.value})
            if(res.error){
                Swal.fire('something went wrong, please try again')
                return false
            }        
            await Swal.fire({
              title: 'Created Successfully!',
              text: ' Please Login with registered Phone Number and Password'})
            return navigateTo('/setup_meal') 
            
      }
      console.log(validate())
    }

</script>
