<template>
    <div style="text-align:center">
      <h1><router-link to="/" style="color:black;text-decoration:none">Solar System</router-link></h1>
      
       <v-bottom-navigation grow height="2.5rem">

    <v-btn :value="activeBtn" style="color:#f0f068" class="button">
      <strong><router-link to="/" style="color:#f0f068">Sun</router-link></strong>
    </v-btn>

    <v-btn :value="activeBtn" style="color:#808080" class="button">
      <strong><router-link to="/" style="color:#808080">Mercury</router-link></strong>
    </v-btn>

    <v-btn :value="activeBtn" style="color:#F4593D" class="button">
      <strong><router-link to="/" style="color:#F4593D">Venus</router-link></strong>
    </v-btn>

    <v-btn :value="activeBtn" style="color:#72dbf2" class="button">
      <strong><router-link to="/" style="color:#72dbf2">Earth</router-link></strong>
    </v-btn>

    <v-btn :value="activeBtn" style="color:#f18400" class="button">
      <strong><router-link to="/" style="color:#f18400">Mars</router-link></strong>
    </v-btn>

    <v-btn :value="activeBtn" style="color:#ed7646" class="button">
      <strong><router-link to="/" style="color:#ed7646">Jupiter</router-link></strong>
    </v-btn>

    <v-btn :value="activeBtn" style="color:#CAC7A7" class="button">
      <strong><router-link to="/" style="color:#CAC7A7">Saturn</router-link></strong>
    </v-btn>

    <v-btn :value="activeBtn" style="color:#ADE7E9" class="button">
      <strong><router-link to="/" style="color:#ADE7E9">Uranus</router-link></strong>
    </v-btn>

    <v-btn :value="activeBtn" style="color:#2ED1D3" class="button">
      <strong><router-link to="/" style="color:#ADE7E9">Neptune</router-link></strong>
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