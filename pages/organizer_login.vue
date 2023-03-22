<template>    
    <v-row justify="center">
      <v-dialog size="large" v-model="dialog" persistent width="auto" >
        <!-- <template v-slot:activator="{ props }"><v-btn> Open Dialog</v-btn></template> -->
        <v-form @submit.prevent ref="loginForm">
        <v-card style="min-width: 350px;" class="pa-4">
          <v-card-title class="text-h5">
           Enter Login Credentials
          </v-card-title>
            <p v-if="showError" class="text-center text-red bg-red-lighten-5">Invalid Credentials</p>
          <v-card-text>
            <v-text-field color="green" variant="underlined" :rules="rules.name" v-model="phone_number" class="mb-4" label="Phone Number"  hide-details="auto"></v-text-field>
            <v-text-field color="green" variant="underlined" type="password" :rules="rules.name" v-model="password" class="mb-4" label="Phone Number"  hide-details="auto"></v-text-field>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="green-darken-1" variant="text" @click="back()">Cancel</v-btn>
            <v-btn color="green-darken-1" type="submit" variant="text" @click="login()">Login</v-btn>
          </v-card-actions>
        </v-card>
        </v-form>
      </v-dialog>
    </v-row>

</template>

<script setup>
import axios from 'axios';
import { useUserStore } from '@/stores/userStore'
const loginForm = ref(null)
const phone_number = ref('')
const password = ref('')
const dialog = ref(true)
const showError = ref(false)
const store = useUserStore()
const rules ={
      name: [
        (value) => {
          if (value) return true
          return 'This Field Required'
        },
      ]   
    }
    definePageMeta({
        layout: "home",
    });
    store.isLoading = false   
    async function  login(){
        showError.value = false
        store.isLoading = true   
        let res = await axios.post(store.baseUrl+'/organizers/login',{phone_number:phone_number.value,password:password.value})
        store.isLoading = false   
        if(res.data.error){
            showError.value =true
            return false
        }             
        //console.log(res.data)
        store.access_token = res.data.responseBody.accessToken
        store.user = res.data.responseBody.user
        navigateTo('/setup_meal')        
    }
    function back(){
        navigateTo('/organizer')
    }
    /* const { LoggedIn } = useOrganizerLogin()  
    LoggedIn */
</script>