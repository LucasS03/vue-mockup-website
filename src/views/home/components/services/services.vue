<template>
  <div class="services">
     <div class="row m-0">
      <div v-for="service in services" :key="service.id" 
        class="card-service mb-3 col-12 col-sm-6 col-md-6 col-lg-3 col-xl-3">
        <div class="content d-flex flex-column align-items-center justify-content-center">
          <div class="info">
            <img :src="service.icon" alt="camp">
            <h5>{{ service.title }}</h5>
            <p>{{ service.description }}</p>
          </div>
          <div class="bg" :style="`background-image: url(${service.photo})`"></div>
        </div>
      </div>
     </div>
  </div>
</template>

<script>
export default {
  props: {
    services: {
      type: Array,
      required: true
    }
  }
}
</script>

<style lang="scss">
</style>