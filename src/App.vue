<template>
  <div id="app">
    <Navbar></Navbar>
    <router-view/>
  </div>
</template>

<script>
import Navbar from '@/components/navbar/Navbar'

export default {
  components: {
    Navbar
  }
}
</script>

<style lang="scss">
</style>
