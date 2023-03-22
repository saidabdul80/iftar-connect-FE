<template>
    <v-form @submit.prevent ref="saveMealForm">
        <v-text-field color="green" variant="underlined" :rules="rules.name" v-model="meal.meal_type" class="mb-3" label="Meal Type"  hide-details="auto"></v-text-field>
        <!-- <v-text-field color="green" variant="underlined" :rules="rules.name" v-model="location"  class="mb-3" label="State/City"  hide-details="auto"></v-text-field> -->
        <div class="s-text-field mb-3" >
            <GMapAutocomplete aria-placeholder="" :value="meal.address" class="pa-0" @place_changed="setPlace"></GMapAutocomplete>               
            <label :style="meal.address!=''?{'font-size':'10px','top':'2px'}:{'top':'12px'}" class="label">Address</label>
        </div>
        <v-text-field color="green" variant="underlined" :rules="rules.name" v-model="meal.landmark"  class="mb-3" label="Landmark"  hide-details="auto"></v-text-field>
        <v-text-field color="green" variant="underlined"  v-model="meal.phone_number"  class="mb-3" label="Contact Number"  hide-details="auto"></v-text-field>
        <v-text-field color="green" variant="underlined" :rules="rules.name" v-model="meal.maximum_capacity"  class="mb-3" label="Slots"  hide-details="auto"></v-text-field>
        <v-text-field color="green" variant="underlined" type="time" :rules="rules.name" v-model="meal.time_slot"  class="mb-3" label="Time Slot"  hide-details="auto"></v-text-field>
        <div class="d-flex">
            <v-btn @click="today()" size="small" :disabled="disable_date" color="green" class=" me-2">Today</v-btn>
            <v-btn @click="dateRange()" :disabled="!disable_date" size="small" color="green" class="" >Range</v-btn>
        </div>
        <div class="d-flex mt-3 mb-3">            
            <v-text-field :disabled="disable_date" type="date" color="green" variant="underlined" :rules="rules.name" v-model="meal.start_date"  class="mb-3 me-4" label="start_date"  hide-details="auto"></v-text-field>
            <v-text-field :disabled="disable_date" type="date" color="green" variant="underlined" :rules="rules.name" v-model="meal.end_date"  class="mb-3" label="end_date"  hide-details="auto"></v-text-field>
        </div>
        <div class="d-flex justify-content-center flex-column align-center">
            <v-btn v-if="!update" type="submit" @click="saveMeal()" class="w-50 bg-green text-white mb-3  px-10" size="x-large">Submit</v-btn>
            <v-btn v-else type="submit" @click="saveMeal()" class="bg-green text-white mb-3 px-10" size="x-large">Update</v-btn>            
        </div>
    </v-form>
    <v-dialog v-model="dialog2" width="auto">
        <v-card>         
            <v-card-text class="pa-6 d-flex align-center" style="max-width:400px">
                <v-icon size="large" color="orange" class="me-2" icon="mdi-information"></v-icon><br>
                <p class="text-h6">No Internet </p>
                <v-btn color="green" class="ms-2" @click="reload()">Reload</v-btn>
            </v-card-text>
        </v-card>
    </v-dialog>
</template>
<script setup>   
import Swal from 'sweetalert2';
const props = defineProps({
        meal:{
            meal_type:'',
            phone_number:'',
            address:'',
            maximum_capacity:0,
            address_url:'',
            longitude:'',
            latitude:'',
            time_slot:'',
            landmark:'',
            start_date:useToday(),
            end_date:useToday()
        },
        update:{
            type:Boolean,
            default:function(){
                return false
            }
        }      
    })  
    const meal =  props.meal
const dialog2 = ref(false)
  const saveMealForm = ref(null)
  const disable_date = ref(false)
  const emit= defineEmits(["saveEvent"])
    function today(){        
        meal.start_date = useToday()
        meal.end_date = useToday()
        disable_date.value = true
    }

    function dateRange(){
        disable_date.value = false
    }

    function setPlace(e) {                
        meal.address_url = e.url
        meal.address = e.formatted_address
        meal.latitude = e.geometry.location.lat()
        meal.longitude = e.geometry.location.lng()
    }
   
  const rules ={
      name: [
        (value) => {
          if (value) return true
          return 'This Field Required'
        },
      ]   
    }
    //const clocation = ref('')
    async function validate () {      
      const { valid } = await saveMealForm.value.validate()
      if (valid){        
        return true
      } 
      return false
    }

    function reload(){
        location.reload()
    }
    async function saveMeal(){    
        if(await validate()){           
            if(meal.latitude == ''){
                dialog2.value = true
            }
            emit('saveEvent',meal)
        } 
      //console.log(validate())
    }

</script>
