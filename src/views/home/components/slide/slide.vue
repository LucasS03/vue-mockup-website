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
              VIEW MORE
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
  data() {
    return {
      slides: [
        {
          id: 1,
          photo: require('@/assets/images/carousel/1.jpeg'),
          alt: 'Lighthouse',
          title: 'Lighthouse',
          subtitle: 'Find the most fantastic around the world'
        },
        {
          id: 2,
          photo: require('@/assets/images/carousel/2.jpg'),
          alt: 'Mountains',
          title: 'Mountains',
          subtitle: 'Discover the best mountains to climb'
        },
        {
          id: 3,
          photo: require('@/assets/images/carousel/3.jpeg'),
          alt: 'Beaches',
          title: 'Beaches',
          subtitle: 'The best beaches in the world'
        }
      ]
    }
  },
  computed: {
    height: () => window.innerHeight
  }
}
</script>

<style lang="scss">
.carousel-slide {
  height: 100%;

  .carousel {
    .carousel-indicators li {
      width: 10px;
      height: 10px;
      border-radius: 100%;
    }
    .carousel-inner {
      .carousel-item {
        width: 100%;
        img {
          // TODO: correct width from the last slide to the first and vice versa
          object-fit: cover !important;
        }
      }
    }
  }
}
</style>