<template>
<v-card border="0" class="w-100 shadow-2 mh-100">
    <v-layout  style="height:100%;" class="overflow-y-auto">
      <v-navigation-drawer border="0" class="w-100  bg-white position-relative " theme="blue"  permanent>
        <div class="mt-10 ps-10 d-flex" style="height:8.7vh;">            
            <img src="/logo.png" class="border-4 d-inline-block">  
            <v-spacer></v-spacer> 
            <v-btn class="d-inline-block d-md-none me-10" @click="global.showNavBar = !global.showNavBar " color="blue elevation-0"><v-icon icon="mdi-menu"></v-icon></v-btn>        
        </div>    
        <v-list style="height:84vh" class="px-0 overflow-y-auto mt-2" density="compact" nav>            
            <v-list-item style="color:#9E9E9E;" class="my-0"  @click.stop="menu.dashboard = !menu.dashboard" append-icon="mdi-chevron-down round-0"  active-color="none" prepend-icon="mdi-view-dashboard" title="Dashboard" value="Dashboard"></v-list-item>            
            <v-expand-transition class="py-0" group tag="v-list">
                <div class="transitX bg-grey-lighten-5" v-show="menu.dashboard">
                    <v-list-item to="/" class="ps-5 my-0 border-0"  active-color="blue" prepend-icon="mdi-chevron-right" title="Home" value="Home"></v-list-item>
                    <v-list-item to="/dashboard/dashboard" class="ps-5 my-0 border-0"  active-color="blue" prepend-icon="mdi-chevron-right" title="General Dashboard" value="General Dashboard"></v-list-item>
                </div>            
            </v-expand-transition>            
            <v-list-item style="color:#9E9E9E;" class="my-0"  @click.stop="menu.enrolment = !menu.enrolment" append-icon="mdi-chevron-down round-0"  active-color="blue" prepend-icon="mdi-forum" title="Enrolment" value="Enrolment"></v-list-item>                
            <v-expand-transition class="py-0" group tag="v-list">
                <div class="transitX  bg-grey-lighten-5" v-show="menu.enrolment">
                    <v-list-item to="/enrolment/all-enrollees" prepend-icon="mdi-chevron-right"  title="All Enrollees" value="All Enrollees" class="ps-5 my-0 border-0" active-color="blue"></v-list-item>
                    <v-list-item to="/enrolment/idcard-by-provider" prepend-icon="mdi-chevron-right"  title="ID Card by Provider" value="ID Card by Provider" class="ps-5 my-0 border-0" active-color="blue"></v-list-item>
                    <v-list-item to="/enrolment/enrolment-approval" prepend-icon="mdi-chevron-right"  title="Enrolment Approval" value="Enrolment Approval" class="ps-5 my-0 border-0" active-color="blue"></v-list-item>
                    <v-list-item to="/enrolment/enrolment-slip-print" prepend-icon="mdi-chevron-right"  title="Bulk Enrolment Slip" value="Bulk Enrolment Slip" class="ps-5 my-0 border-0" active-color="blue"></v-list-item>
                    <v-list-item to="/enrolment/enrollees-by-provide" prepend-icon="mdi-chevron-right" title="Enrollees By LGA | Ward&amp; Providertitle" value="Enrollees By LGA | Ward&amp; Provider" class="ps-5 my-0 border-0" active-color="blue"></v-list-item>
                    <v-list-item to="/enrolment/bhcpf-enrollees" prepend-icon="mdi-chevron-right"  title="BHCPF Enrollees" value="BHCPF Enrollees" class="ps-5 my-0 border-0" active-color="blue"></v-list-item>                    
                    <v-list-item to="/enrolment/upload" prepend-icon="mdi-chevron-right"  title="Upload" value="Upload" class="ps-5 my-0 border-0" active-color="blue"></v-list-item>                    
                </div> 
            </v-expand-transition>                       
            <v-list-item style="color:#9E9E9E;" class="my-0" to="/manage-providers"  active-color="blue" prepend-icon="mdi-home-city-outline" title="Manage Providers" value="Manage Providers"></v-list-item>
            <v-list-item style="color:#9E9E9E;" class="my-0" to="/manage-users" active-color="blue" prepend-icon="mdi-account-group" title="Manage Users" value="Manage Users"></v-list-item>                        
            <v-list-item style="color:#9E9E9E;" class="my-0"  @click.stop="menu.capitation = !menu.capitation" append-icon="mdi-chevron-down round-0"  active-color="blue" prepend-icon="mdi-card-multiple" title="Capitation" value="Capitation"></v-list-item>
            <v-expand-transition class="py-0" group tag="v-list">
                <div class="transitX ps-5 bg-grey-lighten-5" v-show="menu.capitation">  
                    <v-list-item to="/capitation/generate-capitation" prepend-icon="mdi-chevron-right" class="ps-5 my-0 border-0" active-color="blue" value="Generate Capitation" title="Generate Capitation"></v-list-item>
                    <v-list-item to="/capitation/approve-capitation" prepend-icon="mdi-chevron-right" class="ps-5 my-0 border-0" active-color="blue" value="Approve Capitation" title="Approve Capitation" ></v-list-item>
                    <v-list-item to="/capitation/capitation-payment" prepend-icon="mdi-chevron-right" class="ps-5 my-0 border-0" active-color="blue" value="Capitation Payment" title="Capitation Payment"></v-list-item>
                </div>
            </v-expand-transition>
            <v-list-item style="color:#9E9E9E;" class="my-0"  @click.stop="menu.premium = !menu.premium" append-icon="mdi-chevron-down round-0"  active-color="blue" prepend-icon="mdi-cards-playing" title="Premium" value="Premium"></v-list-item>
            <v-expand-transition class="py-0" group tag="v-list">
                <div class="transitX ps-5 bg-grey-lighten-5" v-show="menu.premium">            
                    <v-list-item to="/premium/expiration-report" prepend-icon="mdi-chevron-right" class="ps-5 my-0 border-0" active-color="blue" value="Expiration Report" title="Expiration Report"></v-list-item>
                </div> 
            </v-expand-transition>
            
            <v-list-item style="color:#9E9E9E;" class="my-0"  @click.stop="menu.settings = !menu.settings" append-icon="mdi-chevron-down round-0"  active-color="blue" prepend-icon="mdi-application-cog-outline" title="Settings" value="Settings"></v-list-item>            
            <v-expand-transition class="py-0" group tag="v-list">
                <div class="transitX ps-5 bg-grey-lighten-5" v-show="menu.settings">
                    <v-list-item to="/premium/bed_configurations" prepend-icon="mdi-chevron-right" class="ps-5 my-0 border-0" active-color="blue" value="BED Configurations" title="BED Configurations"></v-list-item>
                </div> 
            </v-expand-transition>           
            <div class="d-flex justify-center">

                <v-btn class="mt-10 mx-auto w-75" color="blue">Logout</v-btn>

            </div>            
        </v-list>

<!--     <template v-slot:append>
          <div class="pa-2">
            <v-btn block>
              Logout
            </v-btn>
          </div>
        </template> -->
        <!-- <v-main style="height: 400px"></v-main> -->
    </v-navigation-drawer>
    </v-layout>
  </v-card>
</template>

<script setup>
    import { useGlobalData } from '@/stores/globalData'
    const global = useGlobalData()
    
    const menu = reactive({
        dashboard:false,
        enrolment:false,
        premium:false,
        settings:false,
        capitation:false
    })

</script>

<style scoped>

position: relative;
.transitX ps-5 bg-grey-lighten-5{
    transition: all 0.4s ease-in-out;
}
.my-0{
    margin-top: 0 !important;
    margin-bottom: 0 !important;
}
</style>
