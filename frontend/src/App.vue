<template>
  <div>
    <Header />
    <Footer />
    <router-view />
  </div>
</template>

<script>
import Header from './components/Header'
import Footer from './components/Footer'

export default {

  components: {
    Header,
    Footer
  },

  data: () => ({
    //
  })
};
</script>
