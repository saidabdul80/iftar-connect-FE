<template>
    <Loader color="#2196F3" ></Loader>                     
    <div class="majorContainer" id="majorContainer">
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
        <img class="logo" src="/iftarConnect.png">
        
        <div class="innerContainer">                
            <slot>    </slot>
        </div>    
    </div>
</template>
<script setup>
    const route = useRoute()
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Oxygen:wght@300;400;700&display=swap');
body{
    font-family: 'Oxygen', sans-serif;
}
.logo{
    width: 60%;
    margin: 20% 0px 10px;
}
.majorContainer{
    padding:12%;
    background-image:url('/regularTopbg.png') ;
    height: 100vh;
    width: 100%;
    /* background-position-y: -90px;
    */
    background-position-x:-25px; 
    background-color: rgba(255,255,255,0.77);
    background-blend-mode: lighten; 
    background-size:120% ;
}

@media only screen and (min-device-width: 320px) and (max-device-width: 440px)  {
    nav .nav-link{    
        font-size: 0.8em !important;
    }
    .nav-link:not(:last-child)::after{  
        content: " | ";
        display: inline-block;
        width: 2px;
        margin:0px 2px;        
        height: inherit;        
      }
   .majorContainer{    
    
    }
  }
@media only screen and (min-device-width: 440px) and (max-device-width: 500px) {
 
/*     .majorContainer{    
        background-position-y: -255px;
        background-position-x:63%;    
        background-size:180% ;
    } */
}

/* (320x480) Smartphone, Portrait */
@media only screen and (device-width: 320px) and (orientation: portrait) {
 
}

/* (320x480) Smartphone, Landscape */
@media only screen and (device-width: 480px) and (orientation: landscape) {

}

/* (480x800) Android */
@media only screen and (min-device-width: 501px) and (max-device-width: 778px) {
    .majorContainer{    
        /* background-position-y: -360px;
        background-position-x:63%;    
        background-size:180% ; */
    }
}

/* (640x960) iPhone 4 & 4S */
@media only screen and (min-device-width: 779px) and (max-device-width: 2048px) {
    
    .innerContainer{
        margin-top:20px;
        padding:30px;
        background: rgba(255, 255, 255, 0.4);
        box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
        

    }
    .logo{
        width: 300px;
        margin: 0px 15%;
    }
    .majorContainer{ 
        padding: 7% 12% 0px 12%;   
        background-position-y: -87px;
        background-position-x: 63%;
        background-size: 80%;
    }
}
nav{
    position: absolute;
    top:10px;
}
nav .nav-link{
    font-family: Oxygen;
    color:orange;
    margin:2px 5px;
    font-weight: bold;
    cursor: pointer;
}
nav .nav-link:hover{
    color:#555;
}

.activeRoute{
    color:#555 !important;
}
a,p,div,span{
    font-family: Oxygen;
}

</style>