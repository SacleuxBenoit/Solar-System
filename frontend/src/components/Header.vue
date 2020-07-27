<template>
    <div style="text-align:center">
      <h1>Solar System</h1>
       <v-bottom-navigation grow height="2.5rem">
    <v-btn :value="activeBtn" style="color:#f0f068" class="button">
      <strong style="color:#f0f068"><router-link to="/">Soleil</router-link></strong>
    </v-btn>

    <v-btn :value="activeBtn" style="color:#808080" class="button">
      <strong style="color:#808080"><router-link to="/">Mercure</router-link></strong>
    </v-btn>

    <v-btn :value="activeBtn" style="color:#F4593D" class="button">
      <strong style="color:#F4593D"><router-link to="/">Venus</router-link></strong>
    </v-btn>

    <v-btn :value="activeBtn" style="color:#72dbf2" class="button">
      <strong style="color:#72dbf2"><router-link to="/">Terre</router-link></strong>
    </v-btn>

    <v-btn :value="activeBtn" style="color:#f18400" class="button">
      <strong style="color:#f18400"><router-link to="/">Mars</router-link></strong>
    </v-btn>
    <v-btn :value="activeBtn" style="color:#ed7646" class="button">
      <strong style="color:#ed7646"><router-link to="/">Jupiter</router-link></strong>
    </v-btn>
    <v-btn :value="activeBtn" style="color:#CAC7A7" class="button">
      <strong style="color:#CAC7A7"><router-link to="/">Saturne</router-link></strong>
    </v-btn>
    <v-btn :value="activeBtn" style="color:#ADE7E9" class="button">
      <strong style="color:#ADE7E9"><router-link to="/">Uranus</router-link></strong>
    </v-btn>
    <v-btn :value="activeBtn" style="color:#2ED1D3" class="button">
      <strong style="color:#ADE7E9"><router-link to="/">Neptune</router-link></strong>
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