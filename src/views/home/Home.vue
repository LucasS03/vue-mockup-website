<template>
  <div class="home">

    <sh-modal v-model="showCertificates">
      <div class="modal-content">
        <div class="modal-certificates">
          <div 
            class="modal-list-certificates mb-2" 
            v-for="(c, index) in certificates" 
            :key="index + '-certificate-modal'">

            <div class="info text-truncate">
              <img :src="c.photo" :alt="c.alt">
              <span>{{ c.title }}</span>
            </div>
            <div class="date ml-2">
              <span>{{ c.date | date }}</span>
            </div>

          </div>
        </div>
      </div>
    </sh-modal>

    <section ref="home">
      <slide :slides="slides"></slide>
    </section>

    <div class="container">
      <section class="new-section about" ref="about">
        <h3>{{ $t('title.about') }}</h3>
        <about 
          :certificates="certificates"
          @showCertificates="showCertificates = true">
        </about>
      </section>

      <section class="new-section services" ref="services">
        <h3>{{ $t('title.services') }}</h3>
        <services :services="services"></services>
      </section>
    </div>

    <section class="new-section contact" ref="contact">
      <h3>{{ $t('title.contact') }}</h3>
      <contact :social="social" :contact="contact"></contact>
    </section>

  </div>
</template>

<script>
import slide from './components/slide/slide'
import about from './components/about/about'
import services from './components/services/services'
import contact from './components/contact/contact'
import ShModal from '@/components/modal/Modal'

export default {
  name: 'Home',

  components: {
    slide,
    about,
    services, 
    contact,
    ShModal
  },

  data() {
    return {
      showCertificates: false,
      certificates: [
        { 
          id: 1, 
          photo: require('@/assets/images/about/certificate.png'), 
          alt: 'certificate 1',
          title: 'Certificate One',
          date: new Date().toISOString()
        },
        { 
          id: 2, 
          photo: require('@/assets/images/about/certificate.png'), 
          alt: 'certificate 1',
          title: 'Certificate Two',
          date: new Date().toISOString()
        }
      ],
      contact: {
        mail: 'company@mail.com',
        address: 'Company\'s adress, Nº 123, Brazil',
      },
      social: {
        whatsapp: 'https://api.whatsapp.com/send?phone=5500900000000&text=I%20contacted%20you%20through%20your%20website',
        facebook: 'https://facebook.com/',
        twitter: 'https://twitter.com/',
        instagram: 'https://instagram.com/',
        pinterest: 'https://pinterest.com/',
        youtube: 'https://youtube.com/'
      }
    }
  },

  filters: {
    date(data) {
      let date = new Date(data)
      return date.getFullYear()
    }
  },

  mounted() {
    this.$root.refs = this.$refs
  },

  computed: {
    /*
    ** these attributes must be in data(), they are here to demonstrate i18n!
    */
    slides() {
      return [
        {
          id: 1,
          photo: require('@/assets/images/carousel/1.jpeg'),
          alt: this.$t('subtitle.slide.lighthouse'),
          title: this.$t('subtitle.slide.lighthouse'),
          subtitle: this.$t('text.slide.lighthouse')
        },
        {
          id: 2,
          photo: require('@/assets/images/carousel/2.jpg'),
          alt: this.$t('subtitle.slide.mountains'),
          title: this.$t('subtitle.slide.mountains'),
          subtitle: this.$t('text.slide.mountains')
        },
        {
          id: 3,
          photo: require('@/assets/images/carousel/3.jpeg'),
          alt: this.$t('subtitle.slide.beaches'),
          title: this.$t('subtitle.slide.beaches'),
          subtitle: this.$t('text.slide.beaches')
        }
      ]
    },
    services() {
      return [
        {
          id: 1,
          icon: require('@/assets/images/services/climbing.png'),
          photo: require('@/assets/images/services/climbing.jpg'),
          title: this.$t('subtitle.services.climbing'),
          alt: this.$t('subtitle.services.climbing'),
          description: this.$t('text.services.climbing'),
        },
        {
          id: 2,
          icon: require('@/assets/images/services/trail.png'),
          photo: require('@/assets/images/services/trail.jpg'),
          title: this.$t('subtitle.services.trail'),
          alt: this.$t('subtitle.services.trail'),
          description: this.$t('text.services.trail')
        },
        {
          id: 3,
          icon: require('@/assets/images/services/camp.png'),
          photo: require('@/assets/images/services/camp.jpg'),
          title: this.$t('subtitle.services.camp'),
          alt: this.$t('subtitle.services.camp'),
          description: this.$t('text.services.camp')
        },
        {
          id: 4,
          icon: require('@/assets/images/services/waterfall.png'),
          photo: require('@/assets/images/services/waterfall.jpg'),
          title: this.$t('subtitle.services.waterfall'),
          alt: this.$t('subtitle.services.waterfall'),
          description: this.$t('text.services.waterfall')
        }
      ]
    }
  }
}
</script>

<style lang="scss">
</style>