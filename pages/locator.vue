<template>
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
        <v-row>        
            <v-col v-for="x in 4" :key="x" cols="12" md="6" lg="6" xl="6" >
                <div class="shadow d-flex rounded-lg pa-2 position-relative" >
                    <div class="d-flex justify-content-center align-center foodImage">
                        <img src="/food.png" width="100">
                    </div>
                    <div>
                        <p class="foundation"><span class="content-x">Ihsan Multi Concept Nig. Ltd.</span></p>
                        <p><span class="text-green heading-x">Meal: </span> <NuxtLink to="https://www.google.com/search?tbm=isch&q=food: Pap and Momoi" target="_blank" class="underlined"><span class="content-x">Pap and Momoi</span></NuxtLink></p>
                        <p><span class="text-green heading-x">Address: </span><NuxtLink to="https://maps.google.com/?cid=14409576387546967387" target="_blank" class="underlined"> <span class="content-x">Kwangila Beside General Hospital</span></NuxtLink></p>                        
                        <div class="display-type">
                            <p><span color="#F5891B" class="heading-x ">Date: </span><span class="content-x">Today, 5pm</span></p>
                            <p class="d-none d-sm-flex"  style="margin:0px 8px; width:3px;background:#ccc; height:inherit"></p>
                            <p><span color="#F5891B" class="heading-x">Available Slot: </span><span class="content-x">10</span></p>
                        </div>
                        <v-btn size="small"   color="green" class="mx-auto d-inline-block my-1">Make Reservation</v-btn>
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
        <center>
            <a href="#" class="mt-5 d-block">Show More</a>
        </center>
    </div>
</template>
<script setup>

import Swal from 'sweetalert2'
definePageMeta({
    layout: "plain",
});
    const location = ref('');
    const overlay= ref({})
    const address =  ref('')
    const address_url =  ref('')
    const cords = ref([])
    const  center = ref({lat: 51.093048, lng: 6.842120})
    
    function setPlace(e) {        
        address_url.value = e.url
        address.value = e.formatted_address
        cords.value = {lat:e.geometry.location.lat(),long:e.geometry.location.lng()}
    }
    
    function searchLocation(){
        let $this = this
        if(this.location==''){
            Swal.fire("Enter a location or an address phrase")
            return false
        }

        //fetch data
    }

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
    .heading-x,.content-x{
        font-size: 0.9em;
    }
    .foodImage{
        position:absolute;
        bottom: 0;
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
</style>