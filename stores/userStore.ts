import { differenceInSeconds } from 'date-fns'
import { useEndpointRoutesStore } from '@/stores/endpoints'
import axios from 'axios';
export const useUserStore = defineStore('userAuth', {
    state: () => ({         
        user:{},     
        beneficiary:{},   
        access_token:'',
        beneficiary_access_token:'',
        refresh_token:'',
        logedInTime:'2015-02-01 01:02:00',
        token_expires:'',
        isLoading:false,        
        geoKey: "cc6c646a1177408d958cc9ac9a31bc81",
        baseUrl: 'https://api.iftarconnect.com/api/v1'
    }),
    persist: true,
    getters: {
        
    },
    actions: {
        isAuthenticated (){                    
            ///const config = useRuntimeConfig();            
            if(this.$state.refresh_token == ''){
                return false
            }                     
        },
      
        increment() {
        
        },
    },

})