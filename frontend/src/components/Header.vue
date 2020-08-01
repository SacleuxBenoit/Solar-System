<template>
    <div style="text-align:center">
      <h1 class="content"><router-link to="/" style="color:white;text-decoration:none">Solar System</router-link></h1>
      
       <v-bottom-navigation grow height="2.24rem">

    <v-btn :value="activeBtn" style="background-color: rgb(34, 32, 32)" class="button">
      <strong><router-link to="/sun" style="color:#f0f068">Sun</router-link></strong>
    </v-btn>

    <v-btn :value="activeBtn" style="background-color: rgb(34, 32, 32)" class="button">
      <strong><router-link to="/mercury" style="color:#808080">Mercury</router-link></strong>
    </v-btn>

    <v-btn :value="activeBtn" style="background-color: rgb(34, 32, 32)" class="button">
      <strong><router-link to="/venus" style="color:#F4593D">Venus</router-link></strong>
    </v-btn>

    <v-btn :value="activeBtn" style="background-color: rgb(34, 32, 32)" class="button">
      <strong><router-link to="/earth" style="color:#72dbf2">Earth</router-link></strong>
    </v-btn>

    <v-btn :value="activeBtn" style="background-color: rgb(34, 32, 32)" class="button">
      <strong><router-link to="/mars" style="color:#f18400">Mars</router-link></strong>
    </v-btn>

    <v-btn :value="activeBtn" style="background-color: rgb(34, 32, 32)" class="button">
      <strong><router-link to="/jupiter" style="color:#ed7646">Jupiter</router-link></strong>
    </v-btn>

    <v-btn :value="activeBtn" style="background-color: rgb(34, 32, 32)" class="button">
      <strong><router-link to="/saturn" style="color:#CAC7A7">Saturn</router-link></strong>
    </v-btn>

    <v-btn :value="activeBtn" style="background-color: rgb(34, 32, 32)" class="button">
      <strong><router-link to="/uranus" style="color:#ADE7E9">Uranus</router-link></strong>
    </v-btn>

    <v-btn :value="activeBtn" style="background-color: rgb(34, 32, 32)" class="button">
      <strong><router-link to="/neptune" style="color:#ADE7E9">Neptune</router-link></strong>
    </v-btn>

  </v-bottom-navigation>
    </div>
</template>

<script>
export default {
    
}
</script>

<style>

</style>