<template>
    <v-btn v-if="store.beneficiary_access_token != '' " @click="showReservations()" size="small" style="padding:6px;width: 28px !important;height:28px !important; border-radius:20px; position:absolute;top:60px;right: 60px;font-size: 0.8em;" class="bg-orange text-white d-flex justify-center align-center">{{ store.beneficiary?.reservation_ids?.length }}</v-btn>
    <v-dialog size="large" v-model="dialog3" persistent width="auto" >
        <!-- <template v-slot:activator="{ props }"><v-btn> Open Dialog</v-btn></template> -->       
        <v-card style="min-width: 350px;" class="pa-4">
          <v-card-title class="text-h5">
           All today's Reservation
          </v-card-title>          
          <v-card-text>
            <v-table density="compact" fixed-header> 
                <thead>
                <tr>
                    <th class="text-left">S/N</th>
                    <th class="text-left">Organizer</th>            
                    <th class="text-left">Meal Type</th>  
                    <th class="text-left">Landmark</th>                                
                    <th class="text-left">Address</th>            
                </tr>
                </thead>
                <tbody>
                    <tr v-for="(item,i) in reservations" :key="item.id">
                        <td>{{ i+1 }}</td>
                        <td>{{ item.organizer.name }}</td>
                        <td>{{ item.meal_type }}</td>
                        <td>{{ item.landmark }}</td>                        
                        <td><a :href="item.address_url" target="_blank" class="underlined text-orange">{{ item.address }} </a></td>
                    </tr>
                </tbody>
            </v-table>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="green-darken-1" variant="text" @click="dialog3= false">Close</v-btn>            
          </v-card-actions>
        </v-card>        
      </v-dialog>
    <v-row >        
        <v-col cols="12" md="6" lg="6" xl="6">
            <!-- <v-text-field color="green" variant="underlined" v-model="location"  label="Location" ></v-text-field>         -->
            <div class="s-text-field">
                <GMapAutocomplete class="pa-0" @place_changed="setPlace"></GMapAutocomplete>               
                <label :style="address!=''?{'font-size':'10px','top':'3.5px'}:{'top':'12px'}" class="label">Address</label>
            </div>
        </v-col>
        <v-col cols="12" md="6" lg="6" xl="6">
           <v-btn @click="searchLocation()" class="me-2 mt-2" color="green">Search Location</v-btn>        <!--
           <v-btn @click="nearestLocation()" color="green"><v-icon icon="mdi-crosshairs-gps"></v-icon> Nearest to you</v-btn>         -->
        </v-col>
    </v-row>
    <div class="mt-7">
        <div v-show="store.isLoading === false">
            <v-row v-if="meals.length >0">        
                <v-col v-for="(meal,x) in meals" :key="x" cols="12"  lg="6" xl="6" >
                    <div class="shadow d-flex rounded-lg pa-2 position-relative" >
                        <div class="d-flex justify-content-center align-center foodImage">
                            <img src="/food.png" width="100">
                        </div>
                        <div>
                            <p class="foundation"><span class="content-x">{{ meal.organizer.name }}</span></p>
                            <p><span class="text-green heading-x">Meal: </span> <NuxtLink :to="'https://www.google.com/search?tbm=isch&q=food:'+meal.meal_type" target="_blank" class="underlined"><span class="content-x">{{meal.meal_type}}</span></NuxtLink></p>
                            <p><span class="text-green heading-x">Location: </span><span> {{meal.landmark}}</span></p>
                            <p><span class="text-green heading-x">Address: </span><NuxtLink :to="meal.address_url" target="_blank" class="underlined"> <span class="content-x">{{ meal.address.slice(0,40) }}...</span></NuxtLink></p>                        
                            <div class="display-type">
                                <p><span color="#F5891B" class="heading-x ">Date: Today </span><span class="content-x">{{ tConvert(meal?.time_slot) }}</span></p>
                                <p class="d-none d-sm-flex"  style="margin:0px 8px; width:3px;background:#ccc; height:inherit"></p>
                                <p><span color="#F5891B" class="heading-x">Available Slot: </span><span class="content-x">{{ meal.maximum_capacity - meal.total_reservations }}</span></p>
                            </div>
                            <div class="d-flex align-center">
                                <v-btn v-if="store.beneficiary?.reservation_ids?.includes(meal.id)" :disabled="true" size="small" color="green"  class="mx-auto d-inline-block my-1">Reserved for {{ store.beneficiary.phone_number }}</v-btn>
                                <v-btn v-else  size="small" color="green" @click="makeReservation(meal.id)" class="mx-auto d-inline-block my-1">Make Reservation</v-btn>

                                <v-spacer></v-spacer>
                                <div>
                                    <span class="distance-away" v-if="meal?.distance" ><b>{{ parseInt(meal.distance) }}km away </b></span>                             
                                </div>
                            </div>
                        </div>
                    </div>
                <!--   <v-card class="shadow d-flex d-sm-none rounded-lg pt-2 pb-3 elevation-0 position-relative" >                                      
                        <div class="d-flex justify-content-center align-items-center">                        
                            <img src="/food.png" style="width:60px;">                        
                        </div>
                        <center>
                            <div>
                                <v-btn   color="white" class="elevation-0 text-orange d-flex" >Show Details
                                    <v-overlay activator="parent" location-strategy="connected" scroll-strategy="block">
                                <div class="elevation-4 bg-white pa-3 rounded-lg mx-auto d-inline-block">
                                    <center>
                                        <p><span class="text-green heading-x">By: </span><span class="content-x">Foundation</span></p>
                                        <p><span class="text-green heading-x">Meal: </span><span class="content-x">Pap and Momoi</span></p>
                                        <p><span class="text-green heading-x">Address: </span><span class="content-x">Kwangila Beside General Hospital</span></p>
                                        <div class="d-inline-flex text-center">                                
                                            <p><span color="#F5891B" class="heading-x">Date: </span><span class="content-x">Today, 5pm</span></p>
                                            <p  style="margin:0px 8px; width:3px;background:#ccc; height:inherit"></p>
                                            <p><span color="#F5891B" class="heading-x">Available Slot: </span><span class="content-x">10</span></p>
                                        </div>
                                    </center>
                                </div>
                        </v-overlay>
                                </v-btn>
                                <v-btn size="small"   color="green" class="mt-3 ms-3">Make Reservation</v-btn>
                            </div>                        
                        </center>                                    
                        
                    </v-card> -->
                </v-col>
            </v-row>
            <div v-else class="fs1 d-flex justify-center text-grey text-center pa-6" >
                We could not find iftar dinner or ensure your GPS is turned-on 
            </div>
            <center>
                <a href="#" class="mt-5 d-block">Show More</a>
            </center>
        </div>
        <div v-show="store.isLoading == true"  class="fs1 text-grey text-center pa-6" >
            Fetching...
        </div>
    </div>
</template>
<script setup>

import Swal from 'sweetalert2'
import { useUserStore } from '@/stores/userStore';
import axios from 'axios';
    definePageMeta({
        layout: "plain",
    });
    const loading =ref(true)
    const dialog3 = ref(false)
    const location = ref('');
    const overlay= ref({})
    const address =  ref('')
    const address_url =  ref('')
    const cords = ref([])
    const  center = ref({lat: 51.093048, lng: 6.842120})
    const {$api} = useNuxtApp()
    const store = useUserStore()
    function setPlace(e) {        
        address_url.value = e.url
        address.value = e.formatted_address
        cords.value = {lat:e.geometry.location.lat(),long:e.geometry.location.lng()}
    }
    const meals = ref([])
    const reservations = ref([])
    function tConvert (time) {
        // Check correct time format and split into components
        time = time.toString ().match (/^([01]\d|2[0-3])(:)([0-5]\d)(:[0-5]\d)?$/) || [time];

        if (time.length > 1) { // If time format correct
            time = time.slice (1);  // Remove full string match value
            time[5] = +time[0] < 12 ? 'AM' : 'PM'; // Set AM/PM
            time[0] = +time[0] % 12 || 12; // Adjust hours
        }
        return time.join (''); // return adjusted time or original string
        }
    async function searchLocation(){
        let $this = this
        if(this.address==''){
            Swal.fire("Enter a location or an address phrase")
            return false
        }
        searchMeal(cords.value.long,cords.value.lat)
        //fetch data
    }
    //store.beneficiary.reservation_ids =[];
    async function  login(){
        showError.value = false
        store.isLoading = true   
        return await Swal.fire({
                    title: 'Enter Your Phone Number',
                    html:
                    '<input id="swal-input1" class="swal2-input mb-3" placeholder="Phone Number">' ,      
                    showCancelButton: true,
                    confirmButtonText: 'Look up',
                    showLoaderOnConfirm: true,
                    preConfirm: async () => {
                    
                        let phone_numberx = document.getElementById('swal-input1').value
                        if(phone_numberx ==''){
                        Swal.showValidationMessage(`Invalid Phone Number`)      
                        }else{
                           
                            try{

                                return axios.get(store.baseUrl+'/beneficiaries/'+phone_numberx).then(res=>{
                                    if(res.error){
                                    Swal.showValidationMessage(res.responseBody)
                                }             
                                store.beneficiary_access_token = res.data.responseBody.accessToken
                                store.beneficiary = res.data.responseBody.user
                                store.access_token = ''
                                return true; 
                                })                    
                            }catch(e){
                                console.log(e)
                            }
                        }
                },
                allowOutsideClick: false
                }).then(async (result) => {
                    if (result.isConfirmed) {
                    return true
                    }else{
                        store.isLoading = false 
                    return false
                    }
                })            
    }

    async function makeReservation(meal_id, logins=false){        
        if(store.beneficiary_access_token == '' && logins == false){
            if(await login()){
                await reserve(meal_id)
            }
        }else{
            await reserve(meal_id)
        }
    }    
    store.resetStore()
    async  function reserve(meal_id){
        try{                    
            store.isLoading = true
            let res  = await $api.postData('/reservations','POST',{meal_id:meal_id},'/locator', true, false);
                if(!res.error){                    
                    store.beneficiary.reservation_ids.push(meal_id)
                    //console.log(res, meals)
                    store.isLoading = false 
                }else{
                    if(res.status == 409){
                        Swal.fire(res.responseBody.message)
                        store.beneficiary.reservation_ids.push(meal_id)                                                
                    }else{
                        Swal.fire(res.responseBody)
                    }
                //    alert('try again')
                }
        }catch(e){
            console.log(e)
        }
    }
    async function searchMeal(longitude='',latitude=''){
        let params = '';
        if(longitude != '' ){
            params = longitude+'/'+latitude
        }
        let res  = await $api.postData('/meals/'+params,'GET',{},'/locator');
            if(!res.error){
                meals.value = res.responseBody
                //console.log(res, meals)
            }
    }

    const successCallback = (position) => {
        console.log(position);
        searchMeal(position.coords.longitude, position.coords.latitude)
        };

        const errorCallback = (error) => {
        console.log(error);
        };

        navigator.geolocation.getCurrentPosition(
            successCallback,
            errorCallback,
            {
            enableHighAccuracy: true,
            timeout: 10000,
            }
        );
    
    let $this = this
    async function nearestLocation(){
        //fetch data
        Swal.fire(
            {
                title: 'Ensure to Allow GPS from you browser',
                text:'your location will be taken to find nearest iftar',                
                showCancelButton: true,
                confirmButtonText: 'Ok',                
                cancelButtonText: 'Cancel',                
            }).then(async(result)=>{
                if (result.isConfirmed) {
                    getLocation()                                        
                }

            })
    }
    
    function getLocation() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(showPosition,(err)=>{console.log(err)},{enableHighAccuracy: true, maximumAge: 10000});
        } else { 
            x.innerHTML = "Geolocation is not supported by this browser.";
        }
        }

        async function showPosition(position) {        
        try{                
           overlay.value =   position
             console.log(position)
         }catch(e){
             console.log(e)
         } 
        }
    const lableTag = computed(()=>{
        return address.value === ''?'12px':'-12px'
    })
    //getLocation()
    async function showReservations(){
        let res  = await $api.postData('/reservations','GET',{},'/locator',true,false);
            if(!res.error){
                reservations.value = res.responseBody    
                dialog3.value = true            
            }else{
                Swal.fire('something went wrong');
            }
    }
</script>

<style scoped>

.shadow{
    box-shadow:  rgba(0, 0, 0, 0.2) -4px 0px 25px -6px !important;
}
.foundation{
    color:#F5891B !important;
    font-size: 0.9em;
    font-size: 1.16em !important;
    font-weight: bold;
}
.heading-x{
    color:#F5891B;
    font-weight: bold !important;
}
.display-type{
    display: flex;
}
.overlay{
    width: 100%;
    height: 0%;
    background:rgba(0, 0, 0, 0.4);
    border-radius: 8px;
    position: absolute;
    top:0;
    padding:10px;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all .4s;
    opacity: 0;    
}
.overlayAnimation{
    animation: overlayAnim .3s ease-in-out forwards;
}
.underlined{
    text-decoration: underline;
    color:#F5891B;
    font-weight: lighter;
}

@media only screen and (min-device-width: 320px) and (max-device-width: 440px)  {
    .distance-away{
        font-size: 0.8em !important;
    }
    .heading-x,.content-x{
        font-size: 0.9em;
    }
    .foodImage{
        position:absolute;
        bottom: 25px;
        right: 0;
    }
    .display-type{
    display: block;
        }
}
@keyframes overlayAnim{
    from{
        height: 0%;
        opacity: 0;
    }

    to{
        opacity:1;
        height: 100%;
    }
}
.fs1{
    font-size: 1.1em;
    font-weight: bold;
}
</style>