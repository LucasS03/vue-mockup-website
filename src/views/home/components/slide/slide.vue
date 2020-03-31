<template>
  <div class="container-fluid h-100 p-0 bg-dark carousel-slide">
    <div id="slider" class="carousel slide" data-ride="carousel">
      <ol class="carousel-indicators">
        <li v-for="(s, id) in slides" :key="id" 
            data-target="#slider" 
            :data-slide-to="id" 
            :class="[id == 0 ? 'active' : '']">
        </li>
      </ol>
      <div class="carousel-inner">
        <div 
          v-for="(slide, id) in slides" :key="id + '-slide'" 
          :class="['carousel-item', !id ? 'active' : '']"
          :style="`height: ${height}px`">
          <img :src="slide.photo" :alt="slide.alt">
          <div class="carousel-caption d-none d-md-block">
            <h5>{{ slide.title }}</h5>
            <p>{{ slide.subtitle }}</p>
            <router-link class="btn btn-success py-2 px-3 mb-2" to="/">
              <!-- :to="`/your-route/${slide.id}`" -->
              {{ $t('button.show_more') }}
            </router-link>
          </div>
        </div>
      </div>
      <a class="carousel-control-prev" href="#slider" role="button" data-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
      </a>
      <a class="carousel-control-next" href="#slider" role="button" data-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    slides: {
      type: Array,
      required: true
    }
  },
  computed: {
    height: () => window.innerHeight,
  }
}
</script>

<style lang="scss">
</style>