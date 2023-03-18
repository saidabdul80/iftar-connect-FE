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
        <v-text-field color="green" variant="underlined" :rules="rules.name" v-model="number"  class="mb-4" label="Contact Number"  hide-details="auto"></v-text-field>
        <div class="d-flex justify-content-center flex-column align-center">
            <v-btn type="submit" @click="login()" class="w-50 bg-green text-white mb-3  px-10" size="x-large">Submit</v-btn>
            <v-btn type="submit" @click="organizerPage()" class="underlined bg-white elevation-0  px-10" size="x-large">Goto Organizer's Page</v-btn>            
        </div>
    </v-form>
</template>

<script setup>
import Swal from 'sweetalert2'
    const { $api } = useNuxtApp()
  const name = ref('')
  const address = ref('')
  const number = ref()
  const loginForm = ref(null)
  
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
        Swal.fire({
        title: 'Enter Contact Address',
        input: 'text',        
        showCancelButton: true,
        confirmButtonText: 'Look up',
        showLoaderOnConfirm: true,
        preConfirm: async (login) => {
            let res  = await $api.postData('http://iftarconnect.com',{phone_number:login})
            throw new Error(res.responseBody)
            if(res.error){
            }
            return true;
        },
        //allowOutsideClick: () => !Swal.isLoading()
        }).then((result) => {
        if (result.isConfirmed) {
            Swal.fire('Checked Passed')
            navigateTo('meal')
        }
        })

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
    async function login(){    
      if(await validate()){
        $api.login({nicare_code:name.value, location:location.value});
      }
      console.log(validate())
    }

</script>
