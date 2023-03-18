<template>
    <v-form @submit.prevent ref="saveMealForm">
        <v-text-field color="green" variant="underlined" :rules="rules.name" v-model="meal.name" class="mb-4" label="Name/Organization/Foundation"  hide-details="auto"></v-text-field>
        <!-- <v-text-field color="green" variant="underlined" :rules="rules.name" v-model="location"  class="mb-4" label="State/City"  hide-details="auto"></v-text-field> -->
        <div class="s-text-field mb-4" >
            <GMapAutocomplete aria-placeholder="" :value="meal.address" class="pa-0" @place_changed="setPlace"></GMapAutocomplete>               
            <label :style="meal.address!=''?{'font-size':'10px','top':'2px'}:{'top':'12px'}" class="label">Address</label>
        </div>
        <v-text-field color="green" variant="underlined" :rules="rules.name" v-model="meal.number"  class="mb-4" label="Contact Number"  hide-details="auto"></v-text-field>
        <v-text-field color="green" variant="underlined" :rules="rules.name" v-model="meal.slot"  class="mb-4" label="Slots"  hide-details="auto"></v-text-field>
        <div class="d-flex">
            <v-btn @click="today()" size="small" :disabled="disable_date" color="green" class=" me-2">Today</v-btn>
            <v-btn @click="dateRange()" :disabled="!disable_date" size="small" color="green" class="" >Range</v-btn>
        </div>
        <div class="d-flex mt-3 mb-4">            
            <v-text-field :disabled="disable_date" type="date" color="green" variant="underlined" :rules="rules.name" v-model="meal.from"  class="mb-4 me-4" label="From"  hide-details="auto"></v-text-field>
            <v-text-field :disabled="disable_date" type="date" color="green" variant="underlined" :rules="rules.name" v-model="meal.to"  class="mb-4" label="To"  hide-details="auto"></v-text-field>
        </div>
        <div class="d-flex justify-content-center flex-column align-center">
            <v-btn v-if="!update" type="submit" @click="saveMeal()" class="w-50 bg-green text-white mb-3  px-10" size="x-large">Submit</v-btn>
            <v-btn v-else type="submit" @click="saveMeal()" class="bg-green text-white mb-3 px-10" size="x-large">Update</v-btn>            
        </div>
    </v-form>
</template>
<script setup>  
const props = defineProps({
        meal:{
            name:'',
            number:'',
            address:'',
            slot:0,
            address_url:'',
            cords:'',
            from:'',
            to:''
        },
        update:{
            type:Boolean,
            default:function(){
                return false
            }
        }      
    })  
    const meal =  props.meal

  const saveMealForm = ref(null)
  const disable_date = ref(false)
  const emit= defineEmits(["saveEvent"])
    function today(){        
        meal.from = useToday()
        meal.to = useToday()
        disable_date.value = true
    }

    function dateRange(){
        disable_date.value = false
    }

    function setPlace(e) {        
        meal.address_url.value = e.url
        meal.address.value = e.formatted_address
        meal.cords.value = {lat: e.geometry.location.lat(), long:e.geometry.location.lng()}
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
    async function saveMeal(){    
        /* if(await validate()){
            $api.saveMeal({nicare_code:name.value, location:location.value});
        } */
        emit('saveEvent',meal)
      //console.log(validate())
    }

</script>
