<template>
     <v-dialog v-model="dialog" persistent max-width="540px" min-width="300px" width="90%">
        <template v-slot:activator="{ props }">
            <v-btn @click="newMeal()" color="green" v-bind="props">Create Meal</v-btn>
        </template>
        <v-card>
            <v-card-title>
                <center>
                    <h1 class="text-green mt-2 mb-8">{{ title }} Iftar Meal</h1>
                </center>
            </v-card-title>
            <v-card-text>
                <Meal :meal="meal" :update="update" @saveEvent="mealFunc"></Meal>
            </v-card-text>
        </v-card>
    </v-dialog> 
    <v-table>
    <thead>
      <tr>
        <th class="text-left">S/N</th>
        <th class="text-left">Name</th>
        <th class="text-left">Number</th>
        <th class="text-left">Address</th>
        <th class="text-left">Slot</th>
        <th class="text-left">address Link</th>
        <th class="text-left">Date</th>
        <th class="text-left">#</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(item,i) in meals" :key="item.name">
        <td>{{ i+1 }}</td>
        <td>{{ item.name }}</td>
        <td>{{ item.number }}</td>
        <td>{{ item.address }}</td>
        <td>{{ item.slot }}</td>
        <td><NuxtLink :to="item.address_url" target="_blank" class="underlined">Open</NuxtLink></td>
        <td>From: {{ item.from  }} | To: {{ item.to }} </td>
        <td>
            <v-btn @click="onEdit(item)" size="small" class="text-white mx-2" color="orange"><v-icon icon="edit"></v-icon> Edit</v-btn>
            <v-btn @click="onDelete(item)" size="small" class="text-white mx-2" color="orange"><v-icon icon="trash"></v-icon>x</v-btn>
        </td>
      </tr>
    </tbody>
  </v-table>
</template>

<script setup>
  definePageMeta({
    layout: "plain",
  });
  const dialog = ref(false)
  const update = ref(false)
  const title = ref('Setup')
  const emptyMeal = {
            name:'',
            number:'',
            address:'',
            slot:0,
            address_url:'',
            cords:'',
            from:useToday(),
            to:useToday()
    }
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
        meal = reactive(emptyMeal)
    }
    function mealFunc(e){
        console.log(e)
        dialog.value = false
    }
    const meals = reactive([
        {
            name:'Moi moi and Pap',
            number:'080994957',
            address:'Minna, Niger',
            slot:10,
            address_url:'https://',
            cords:{},
            from:useToday(),
            to:useToday()
        }
    ])
</script>
