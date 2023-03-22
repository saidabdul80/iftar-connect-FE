<template>
    <Loader color="#2196F3" ></Loader>   
    <nav>
            <NuxtLink to="/" :class="[(route.name=='/'?'nav-link activeRoute':''),'nav-link ']">Home</NuxtLink>
            <NuxtLink to="/locator"  :class="[(route.name=='locator'?'nav-link activeRoute':''),'nav-link ']">Iftar Locator</NuxtLink>
            <NuxtLink to="/organizer" :class="[(route.name=='organizer'?'nav-link activeRoute':''),'nav-link ']">Organizer Page</NuxtLink>            
            <v-menu>
                <template v-slot:activator="{ props }">
                    <v-btn color="transparent" class="text-orange elevation-0 underlined" v-bind="props" >More</v-btn>
                </template>
                <v-list>
                    <v-list-item value="About Us" to="/about">
                        <v-list-item-title>About Us</v-list-item-title>
                    </v-list-item>
                    <v-list-item value="Sponsor" to="/sponsors"> 
                        <v-list-item-title>Sponsor</v-list-item-title>
                    </v-list-item>
                    <v-list-item value="Terms & Conditions" to="/terms">
                        <v-list-item-title>Terms & Conditions</v-list-item-title>
                    </v-list-item>
                </v-list>
                </v-menu>
        </nav> 
    <slot />    
</template>
<script setup>
    const route = useRoute()
</script>