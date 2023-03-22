
import Swal from 'sweetalert2/dist/sweetalert2.js'
import 'sweetalert2/src/sweetalert2.scss'
import { useUserStore } from '@/stores/userStore'
import { useEndpointRoutesStore } from '@/stores/endpoints'
import { differenceInSeconds } from 'date-fns'
import VueGoogleMaps from '@fawmi/vue-google-maps'

import axios from 'axios'
export default defineNuxtPlugin(nuxtApp => {  
    const userStore = useUserStore()     
    const ep = useEndpointRoutesStore()     
    const  headers ={
        Authorization:"Bearer "+userStore.access_token,
        Accept: 'application/json', 
        'Content-type': 'application/x-www-form-urlencoded'
    } 
    let baseUrl = 'https://api.iftarconnect.com/api/v1'
    let api = {
        login: async function(url,data={}){                         
                 userStore.isLoading = true               
                const { data: response, error } = await useAsyncData('response', () => $fetch( `${baseUrl}${url}`, {
                    method: 'post',                    
                    body: data,                       
                }));  
                userStore.isLoading = false  
                    
                if(error?.hasOwnProperty('value')){
                    if(error.value?.status == undefined) {
                    this.showAlert("no internet connection");                                   
                    return false;}
                }
                
                if(!response.value?.error){                    
                    userStore.access_token = response.value.accessToken                    
                    userStore.user = response.value.user                    
                }else{
                    //this.showAlert(response.value.responseBody,'warning')    
                }                
                return response.value;
            },
        refreshTokenFunc: async function(){
            let response = await this.postData(ep.REFRESH_TOKEN,{refresh_token: userStore.refresh_token})
            if(!response.value?.error){                    
                userStore.access_token = response.value.accessToken
                userStore.refresh_token =  response.value.refreshAcessToken
                userStore.logedInTime = Date.now();                                
                return true;                 
            }else{
                this.showAlert('session expired','warning')    
                await navigateTo('/login');        
                return false
            }
        },
        postData: async function(url="",method,data=null,redir,type=true,forOrganizer= true){             
            headers.Authorization = "Bearer "+userStore.access_token
            if(!forOrganizer){
                headers.Authorization ="Bearer "+userStore.beneficiary_access_token
            }
                userStore.isLoading = true                              
                const { data: response } = await axios({
                    url:`${userStore.baseUrl}${url}`,                     
                    method: method,                    
                    data: data,                                      
                    headers:headers                
                })  
                userStore.isLoading = false       
                
                if(response.data?.error){
                   //await userStore.isAuthenticated()                    
                   if(response.data.status == 401){
                    navigateTo(redir)
                   }
                   this.showAlert(response.data?.responsebody,'error')    
                }
                if(type){                    
                    return response
                }              

                this.showAlert(response.value,'success')
            },
        getData:async function(url="",data={}){ 
            userStore.isLoading = true               
            return useAsyncData('response', () => $fetch( `${userStore.baseUrl}${url}`, {
                    method: 'GET',                    
                   // body: data,   
                    //headers:headers                                   
                })).then(res=>{
                    userStore.isLoading = false                              
                   // console.log(res.data.value.data?.responseBody,res.data.value.data)
                    return res.data.value.data?.responseBody;

                }) 
                /* return response.value      */                           
            },
        showAlert: function(msg="",icon='success'){
                const Toast = Swal.mixin({
                    toast: true,
                    position: 'top-end',
                    showConfirmButton: false,
                    timer: 3000,
                    timerProgressBar: true,
                    didOpen: (toast) => {
                      toast.addEventListener('mouseenter', Swal.stopTimer)
                      toast.addEventListener('mouseleave', Swal.resumeTimer)
                    }
                  })
                  
                  Toast.fire({
                    icon: icon,
                    title: msg
                  })
            }                        

        }
    
        return {
        provide: {
            api:api,           
        }
        }
})