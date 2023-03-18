import { differenceInSeconds } from 'date-fns'
import { useEndpointRoutesStore } from '@/stores/endpoints'
import axios from 'axios';
export const useUserStore = defineStore('userAuth', {
    state: () => ({         
        user:{},        
        access_token:'',
        refresh_token:'',
        logedInTime:'2015-02-01 01:02:00',
        token_expires:'',
        isLoading:false,        
        geoKey: "cc6c646a1177408d958cc9ac9a31bc81"
    }),
    persist: true,
    getters: {
        
    },
    actions: {
        async isAuthenticated (){                    
            const config = useRuntimeConfig();
            /*             const $api = await useNuxtApp()    
            return await $api.refreshTokenFunc()
            /*  */    
            const ep = useEndpointRoutesStore();              
            if(this.$state.refresh_token == ''){
                return false
            }
            if(differenceInSeconds(Date.now(),new Date(this.$state.logedInTime + (5*60*60*1000))) > 0){                                
                let res = await axios.post( config.public.BASE_URL+ep.REFRESH_TOKEN,{refreshAcessToken:this.$state.refresh_token})                                
                if(res?.status == 200){
                    if(res.data?.error){
                        return false;
                    }
                    this.$state.logedInTime = Date.now()                 
                    this.$state.access_token = res.data.accessToken                    
                    //this.$state.refresh_token =  res.data.refreshAcessToken
                    return true;
                }
                return false
                //update access_token and return true if refreshed else return false
                //if()
            } 
          
        },
      
        increment() {
        
        },
    },

})