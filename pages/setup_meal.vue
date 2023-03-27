<template>
    <v-dialog size="large" v-model="dialog2" persistent width="auto" >
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
                    <th class="text-left">Phone Numbers</th>                               
                </tr>
                </thead>
                <tbody>
                    <tr v-for="(item,i) in reservations" :key="item.id">
                        <td>{{ i+1 }}</td>
                        <td>{{ item.beneficiary_phone_number }}</td>
                    </tr>
                </tbody>
            </v-table>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="green-darken-1" variant="text" @click="dialog2= false">Close</v-btn>            
          </v-card-actions>
        </v-card>        
      </v-dialog>
    <v-btn @click="newMeal()" color="green">Create Meal</v-btn>
     <v-dialog v-model="dialog" persistent max-width="540px" min-width="300px" width="90%">
        <template v-maximum_capacity:activator="{ props }">
        </template>
        <v-card>
            <v-card-title class="position-relative">
                <center>
                    <h3 class="text-green mt-2 mb-8" style="text-transform: uppercase;">{{ title }} IFTAR MEAL</h3>
                </center>
            </v-card-title>
            <v-card-text class="pb-0 position-relative">
                <Meal :meal="meal" :update="update" @saveEvent="mealFunc($event)"></Meal>
                <v-btn style="position:absolute;right:10px;bottom: 10px;" color="green-darken-1" variant="text" @click="dialog= false">Close</v-btn>                        
            </v-card-text>            
        </v-card>
    </v-dialog> 
    <v-table density="compact" fixed-header> 
        <thead>
        <tr>
            <th class="text-left">S/N</th>          
            <th class="text-left">Meal</th>
            <th>Action</th>
        </tr>
        </thead>
        <tbody>
            <tr v-for="(item, i) in meals" :key="item.name">
                <td>{{ i+1 }}</td>
                <td >                
                    <v-row style="    overflow: auto;height: 102px;">                                            
                        <v-col cols="6"  md="4" lg="2" xl="1" v-for="key in Object.keys(item)"  :key="key" v-show="visibleColumn.includes(key)" >
                            <div ><b class="text-left">{{ key.replaceAll('_',' ') }}</b></div>
                            <p v-if="key == 'address_url'"><a :href="item[key]" class="underlined text-orange">View Address</a></p>
                            <p v-else>{{ item[key] }}</p>
                        </v-col>                   
                    </v-row>
                </td>
                <td>                    
                <v-btn @click="showReservers(item.id)" size="small" class="px-0 text-white mx-1 mt-2" color="orange"><v-icon icon="mdi-book"></v-icon> </v-btn><br>
                <v-btn @click="onEdit(item)" size="small" class="px-0 text-white mx-1 mt-2" color="orange"><v-icon icon="mdi-text-box-edit-outline"></v-icon> </v-btn><br>
                <v-btn @click="onDelete(item)" size="small" class="px-0 text-white mx-1 mt-2" color="orange"><v-icon icon="mdi-delete"></v-icon></v-btn><br>
                </td>
            </tr>
        </tbody>
    </v-table>
</template>

<script setup>
import Swal from 'sweetalert2';
import { useUserStore } from '@/stores/userStore';
const {$api } = useNuxtApp()
  definePageMeta({
    layout: "plain",
    middleware:'auth'
  });
  const visibleColumn = ref([
        'meal_type',
        'phone_number',
        'address',
        'landmark',
        'address_url',
        'start_date',
        'end_date',
        'time_slot',
        'maximum_capacity',
  ])
  const dialog = ref(false)
  const dialog2 = ref(false)

  const update = ref(false)
  const title = ref('Setup')
  const reservations = ref([])
  const meals = ref([
        {
            meal_type:'Moi moi and Pap',
            phone_number:'080994957',
            address:'Minna, Niger',
            maximum_capacity:10,
            address_url:'#',
            longitude:0.00,
            latitude:0.00,
            landmark:'',
            start_date:useToday(),
            end_date:useToday()
        }
    ])
  const emptyMeal = {
            meal_type:'',
            phone_number:'',
            address:'',
            maximum_capacity:0,
            address_url:'',
            logitude:'',
            latitude:'',
            time_slot:'',
            start_date:useToday(),
            end_date:useToday()
    }
    const store = useUserStore()
  let meal = reactive(emptyMeal)

    function onEdit(item){
        this.meal = reactive(item)
        update.value = true
        title.value = 'Update'
        dialog.value = true
    }
    function onDelete(){

    }
    function newMeal(){
        update.value = false
        title.value = 'Setup'
        dialog.value = true
        meal = reactive(emptyMeal)
    }

   async function showReservers(meal_id){
        let res  = await $api.postData('/organizers/reservations/'+meal_id,'GET',{},'/organizer_login');
            if(!res.error){
                dialog2.value = true                
                reservations.value =  res.responseBody
                
            }
    }
    async function mealFunc(e){       
        /* alert(2)
        console.log(JSON.stringify(e), 293823923923889)  */
        try{
            if(update.value){
                let res  = await $api.postData('/meals','PATCH',e,'/organizer_login');
                if(!res.error){
                    dialog.value = false                
                    meals.value.unshift(res.responseBody);
                    await Swal.fire('Meal Updated')
                    location.reload();
                }
            }else{

                let res  = await $api.postData('/meals','POST',e,'/organizer_login');
                if(!res.error){
                    dialog.value = false                
                    meals.value.unshift(res.responseBody);
                    Swal.fire('Meal Created')
                }
            }
        }catch(e){
            console.log(e)
        }

    }
    
    let res  = await $api.postData('/organizers/meals','GET',{},'/organizer_login');
    if(!res.error){
        meals.value =res.responseBody.data
        //console.log(res, meals)
    }
    onMounted(async ()=>{        
    })
</script>
<style >
#majorContainer.majorContainer{
    padding: 12% 2% !important;
    }
</style>