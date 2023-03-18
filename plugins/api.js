
import Swal from 'sweetalert2/dist/sweetalert2.js'
import 'sweetalert2/src/sweetalert2.scss'
import { useUserStore } from '@/stores/userStore'
import { useEndpointRoutesStore } from '@/stores/endpoints'
import { differenceInSeconds } from 'date-fns'

import axios from 'axios'
export default defineNuxtPlugin(nuxtApp => {  
    const userStore = useUserStore() 
    const ep = useEndpointRoutesStore() 
    const  headers ={
        Authorization:"Bearer "+userStore.access_token,
        Accept: 'application/json', 
        'Content-Type': 'application/json' 
    }
    let baseUrl = 'https://app.ngscha.ni.gov.ng/api/v1'
    let api = {
        login: async function(data=null){                         
            userStore.isLoading = true               
                const { data: response, error } = await useAsyncData('response', () => $fetch( `${baseUrl}${ep.LOGIN}`, {
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
                    userStore.refresh_token =  response.value.refreshAcessToken
                    userStore.logedInTime = Date.now();
                    await navigateTo('/');        
                    this.showAlert("Login successful")    
                    //return true;                 
                   // console.log(userStore)
                }else{
                    this.showAlert(response.value.responseBody,'warning')    
                }                
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
        postData: async function(url="",method,data={},type=true){ 
            userStore.isLoading = true                           
                const { data: response } = await axios({
                    url:`${baseUrl}${url}`,                     
                    method: method,                    
                    body: data,                                      
                    headers:headers                
                })  
                userStore.isLoading = false       
                
                if(response.data?.error){
                    await userStore.isAuthenticated()                    
                    this.showAlert(response.data?.responsebody,'error')    
                }
                if(type){
                    return response.value
                }              

                this.showAlert(response.value,'success')
            },
        getData:async function(url="",data={}){ 
            userStore.isLoading = true               
            return useAsyncData('response', () => $fetch( `${url}`, {
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