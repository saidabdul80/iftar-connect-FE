<template>
  <Loader color="#2196F3" ></Loader>
  <div style="height:100vh;position:relative;">
  <header >
      <div class="headerContent">
          <center>
              <img src="/iftarConnect.png" class="iftarLogo">
              <h6 class="title">
                  <span>It was narrated from Zaid bin Khalid Al-Juhani that the Messenger of Allah (ﷺ) said:</span>
                  <span>“Whoever gives food for a fasting person to break his fast, he will have a reward 
                      like theirs, without that detracting from their reward in the slightest.”</span>
              </h6>
              <div>
                  <v-btn to="/locator" width="240" size="x-large" class="mt-10 text-white" color="#F5891B">Locate free Iftar</v-btn>
              </div>
              <v-btn width="240" size="x-large" class="mt-5 text-white" color="green">Organize Iftar</v-btn>
          </center>
      </div>
  </header>   
  <footer></footer>
  </div>
</template>
<script setup>
   definePageMeta({
    layout: "home",
  });
</script>
<style>
  .title{
      font-size: 1em;
      margin-top: 5px;
  }
  .title span:first-child{
      color:#F5891B;
  }
  .title span:last-child{
      color:#888;
  }
  /* (320x480) iPhone (Original, 3G, 3GS) */
  .headerContent{
      position: absolute;
      top: 55%;
      padding: 0px 40px;
      min-width: 320px;
  }
  header{
      display: flex;
      justify-content: center !important;
      position: relative;
      margin-bottom: 82px;
  }
  footer{
      position: absolute;
      bottom: 0px;
      height: 30vh;
      background-image: url("/downbg.png");                
      width: 100%;
      z-index: -1;
      background-size: contain;
      background-position-y: bottom;
      /*
      background-position-x: 0px; */
  }
  .iftarLogo{
          border-style: none;
          width: 200px;
          height: 32.07px;                     
      } 
  @media only screen and (min-device-width: 320px) and (max-device-width: 440px)  {
      header{
          background-image: url("/topbg-small.png");        
          height: 65vh;
          width: 100%;
          background-size: contain;
          background-position-y: -92px;
          background-position-x: 0px;
      }   
      .headerContent{
          position: absolute;
          top: 45%;
          padding: 0px 40px;
          min-width: 320px;
      }
      
  }
@media only screen and (min-device-width: 440px) and (max-device-width: 500px) {
  .iftarLogo{        
      border-style: none;
      width: 230px;
      height: 37.07px;          
  }
 
  header{
      background-image: url("/topbg-small.png");        
      height: 65vh;
      width: 100%;
      background-size: contain;
      background-position-y: -95px;
      background-position-x: 0px;
  }
}

/* (320x480) Smartphone, Portrait */
@media only screen and (device-width: 320px) and (orientation: portrait) {
  header{
      background-image: url("/topbg-small.png");        
      height: 65vh;
      width: 100%;
      background-size: contain;
      background-position-y: -55px;
      background-position-x: 0px;
  }
}

/* (320x480) Smartphone, Landscape */
@media only screen and (device-width: 480px) and (orientation: landscape) {
  header{
      background-image: url("/topbg-small.png");        
      height: 65vh;
      width: 100%;
      background-size: contain;
      background-position-y: -55px;
      background-position-x: 0px;
  }
}

/* (480x800) Android */
@media only screen and (min-device-width: 501px) and (max-device-width: 778px) {
  .title{
      font-size: 1.1em;
  }
  .iftarLogo{
          border-style: none;
          width: 270px;
          height: 44.07px;  
          margin-bottom: 5px;                   
      } 
  .headerContent{
      background: rgba(255, 255, 255, 0.4);
      box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
      position: absolute;
      z-index: 2;
      top: 45%;
      width: 80%;        
      padding: 25px 40px;
      border-radius: 7px;
      min-width: 320px;
  }
  header{
      display: flex;
      justify-content: center !important;
      position: relative;
      background-image: url("/topbg.png");        
      height: 64vh;
      width: 100%;
      background-size: cover;
      background-position-y: -131px;
      background-position-x: 0px;
  }
  footer{
      position: absolute;
      bottom: 0px;
      height: 30vh;
      background-image: url("/downbg.png");                
      width: 100%;
      background-size: cover !important;
      background-position-y: bottom;
      /*
      background-position-x: 0px; */
  }
}

/* (640x960) iPhone 4 & 4S */
@media only screen and (min-device-width: 779px) and (max-device-width: 2048px) {
  .title{
      font-size: 1.4em;
  }
  header{
      background-image: url("/topbg.png");        
      height: 64vh;
      width: 100%;
      background-position-y: 61%;
      background-position-x: 0px;
      background-size: cover;
  }
  footer{
      position: absolute;
      bottom: 0px;
      height: 64vh;
      background-image: url("/downbg.png");                
      width: 100%;
      background-size: cover;
      background-position-y: bottom;
  }
  .headerContent{
      background: rgba(255, 255, 255, 0.9);
      box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
      position: absolute;
      z-index: 2;
      top: 40%;
      padding: 30px 40px;
      border-radius: 8px;
      width: 70%;
      min-width: 320px;
  }
  
}


/* (720x1280) Galaxy Nexus, WXGA */
@media only screen and (min-device-width: 720px) and (max-device-width: 1280px) {
  /* insert styles here */
}

/* (720x1280) Galaxy Nexus, Landscape */
@media only screen and (min-device-width: 720px) and (max-device-width: 1280px) and (orientation: landscape) {
  /* insert styles here */
}

/* (1024x768) iPad 1 & 2, XGA */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
  /* insert styles here */
}

/* (768x1024) iPad 1 & 2, Portrait */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) and (orientation: portrait) {
  /* insert styles here */
}

/* (1024x768) iPad 1 & 2, Landscape */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) and (orientation: landscape) {
  /* insert styles here */
}

/* (2048x1536) iPad 3 */
@media only screen and (min-device-width: 1536px) and (max-device-width: 2048px) {
  /* insert styles here */
}

/* (1280x720) Galaxy Note 2, WXGA */
@media only screen and (min-device-width: 720px) and (max-device-width: 1280px) {
  /* insert styles here */
}

/* (1366x768) WXGA Display */
@media  screen and (max-width: 1366px) {
  /* insert styles here */
}

/* (1280x1024) SXGA Display */
@media  screen and (max-width: 1280px) {
  /* insert styles here */
}

/* (1440x900) WXGA+ Display */
@media  screen and (max-width: 1440px) {
  /* insert styles here */
}

/* (1680x1050) WSXGA+ Display */
@media  screen and (max-width: 1680px) {
  /* insert styles here */
}

/* (1920x1080) Full HD Display */
@media  screen and (max-width: 1920px) {
  /* insert styles here */
}

/* (1600x900) HD+ Display */
@media  screen and (max-width: 1600px) {
  /* insert styles here */
}
</style>