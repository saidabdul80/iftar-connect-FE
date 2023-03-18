export const useEndpointRoutesStore = defineStore('endpointRoutes', {
    state: () => ({ 
        LOGIN:'/auth',
        LOGOUT:'/logout',        
        REFRESH_TOKEN:'/auth/auth-refresh',
    }),   
})