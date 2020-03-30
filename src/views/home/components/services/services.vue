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
$custom-green:  #28a745;
$custom-black: #343a40;
$custom-white: #ffffff;
$custom-grey:  #f6f6f6;

.services {
  .card-service {
    padding: 0 10px;

    .content {
      padding: 20px 10px;
      background-color: $custom-white;
      border-radius: 3px;
      box-shadow: 0 0 10px rgba($color: $custom-black, $alpha: 0.4);
      cursor: default;
      
      .info {
        transition: all .5s;
      }
      .bg {
        display: block;
        position: absolute;
        border-radius: 5px;
        width: 0%;
        height: 0%;
        background-size: cover;
        background-position: center;
        transition: all .3s;
      }
      &:hover {
        .info {
          transform: translateZ(80px) scale(0.8);
        }
        .bg {
          width: 90%;
          height: 99%;
        }
      }
    }
  }
}
</style>