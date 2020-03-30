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
      <slide></slide>
    </section>

    <div class="container">
      <section class="new-section about" ref="about">
        <h3>ABOUT</h3>
        <about 
          :certificates="certificates"
          @showCertificates="showCertificates = true">
        </about>
      </section>

      <section class="new-section services" ref="services">
        <h3>SERVICES</h3>
        <services :services="services"></services>
      </section>
    </div>

    <section class="new-section contact" ref="contact">
      <h3>CONTACT</h3>
      <contact :social="social"></contact>
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
      services: [
        {
          id: 1,
          icon: require('@/assets/images/services/climbing.png'),
          photo: require('@/assets/images/services/climbing.jpg'),
          title: 'Climbing',
          alt: 'Climbing',
          description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt cupiditate numquam neque explicabo illo at assumenda quas ut.'
        },
        {
          id: 2,
          icon: require('@/assets/images/services/trail.png'),
          photo: require('@/assets/images/services/trail.jpg'),
          title: 'Trail',
          alt: 'Trail',
          description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt cupiditate numquam neque explicabo illo at assumenda quas ut.'
        },
        {
          id: 3,
          icon: require('@/assets/images/services/camp.png'),
          photo: require('@/assets/images/services/camp.jpg'),
          title: 'Camp',
          alt: 'Camp',
          description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt cupiditate numquam neque explicabo illo at assumenda quas ut.'
        },
        {
          id: 4,
          icon: require('@/assets/images/services/waterfall.png'),
          photo: require('@/assets/images/services/waterfall.jpg'),
          title: 'Waterfall',
          alt: 'Waterfall',
          description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt cupiditate numquam neque explicabo illo at assumenda quas ut.'
        }
      ],
      social: {
        mail: 'company@mail.com',
        address: 'Street company\'s adress, Nº 123, Your Country',
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
}
</script>

<style lang="scss">
$custom-green:  #28a745;
$custom-black: #343a40;
$custom-white: #ffffff;
$custom-grey:  #f6f6f6;

.home {
  background-color: $custom-grey;

  .trace {
    &::after { 
      content: "";
      display: block;
      width: 70px;
      height: 1px;
      margin: 5px auto;
      background-color: $custom-green;
    }
  }

  .new-section {
    margin-top: 30px;

    h3 {
      margin-bottom: 30px;
      @extend .trace;
    }
  }

  .modal-content {
    background-color: $custom-grey;
    padding: 10px;
    border-radius: 5px; 
    max-height: 400px;
    overflow-y: auto;

    @media(max-width: 576px) {
      min-width: 250px;
      max-width: 300px;
    }
    @media(min-width: 576px) {
      min-width: 350px;
      max-width: 450px;
    }
    @media(min-width: 960px) {
      min-width: 500px;
      max-width: 600px;
    }
    @media(min-width: 1200px) {
      min-width: 600px;
      max-width: 900px;
    }
    
    .modal-certificates {
      max-height: 60%;
      overflow-y: auto;

      .modal-list-certificates {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        text-align: left;

        .info {
          img {
            width: 70px;
            height: 70px;
            border-radius: 3px;
          }
        }
        // .date {

        // }
      }
    }
  }

  // .about {
  // }

  // .services {
  // }

  // .contact {
  // }
}
</style>