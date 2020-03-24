<template>
  <div id="app">
    
    <Navbar></Navbar>

    <router-view/>

    <Footer></Footer>

  </div>
</template>

<script>
import Footer from '@/components/footer/Footer'
import Navbar from '@/components/navbar/Navbar'

export default {
  components: {
    Footer,
    Navbar
  }
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Baloo+Da+2&display=swap');

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  font-family: 'Baloo Da 2', cursive;
}
</style>
