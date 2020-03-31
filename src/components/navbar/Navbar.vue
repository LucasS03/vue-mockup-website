<template>
  <div class="container-fluid fixed-top p-0 menu">
    <nav 
      :class="[scrolled ? 'bg-dark navbar-dark custom-shadow' : 'navbar-dark', 'navbar navbar-expand-lg']">
      <router-link class="navbar-brand" to="/">
        {{ $t('company') }}
      </router-link>

      <!-- TODO: on click, set background dark -->
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav ml-auto">
        
          <li id="home" class="nav-item active" @click="link('home')">
            <span class="nav-link">{{ $t('title.home') }}</span>
          </li>

          <li id="about" class="nav-item" @click="link('about')">
            <span class="nav-link">{{ $t('title.about') }}</span>
          </li>

          <li id="services" class="nav-item" @click="link('services')">
            <span class="nav-link">{{ $t('title.services') }}</span>
          </li>

          <li id="contact" class="nav-item" @click="link('contact')">
            <span class="nav-link">{{ $t('title.contact') }}</span>
          </li>

          <li class="nav-item">
            <div class="dropdown nav-link">
              <button class="dropdown-toggle" type="button" id="language" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <img :src="iconLanguage" alt="language">
              </button>
              <div class="dropdown-menu dropdown-menu-right" aria-labelledby="language">
                <span class="dropdown-item" href="#" @click="selectLanguage('en', 'united-kingdom')">
                  <img src="@/assets/images/icons/united-kingdom.png" alt="Language United Kingdom">
                  ENGLISH
                </span>
                <span class="dropdown-item" href="#" @click="selectLanguage('pt_BR', 'brazil')">
                  <img src="@/assets/images/icons/brazil.png" alt="Language Brasil">
                  PORTUGUESE
                </span>
              </div>
            </div>
          </li>

        </ul>
      </div>
    </nav>
  </div>
</template>

<script>
import { debounce } from '@/util.js'

export default {
  name: 'Navbar',

  data () {
    return {
      scrolled: false,
      iconLanguage: require('@/assets/images/icons/united-kingdom.png')
    };
  },

  methods: {
    link(item) {
      window.scrollTo({ 
        top: this.$root.refs[item].getBoundingClientRect().top + window.scrollY - 70, 
        behavior: 'smooth' 
      });
    },
    handleScroll () {
      // background navbar
      this.scrolled = window.scrollY > 40;

      // item navbar active with slide animation
      Object.keys(this.$root.refs).forEach(i => {
        if(this.$root.refs[i].getBoundingClientRect().top < window.innerHeight-(window.innerHeight/2)){
          document.getElementsByClassName('nav-item').forEach(k => k.classList.remove('active'))
          document.getElementById(i).classList.add("active")
        }
      })
    },
    selectLanguage(language, icon) {
      this.$i18n.locale = language
      this.iconLanguage = require(`@/assets/images/icons/${icon}.png`)
    }
  },

  created () {
    window.addEventListener('scroll', this.handleScroll);
  },

  destroyed () {
    window.removeEventListener('scroll', this.handleScroll);
  }
}
</script>

<style lang="scss">
$custom-green:  #28a745;
$custom-black: #343a40;
$custom-white: #ffffff;
$custom-grey:  #f6f6f6;

.menu {
  
  .custom-shadow {
    box-shadow: 0 0px 10px #252525;
  }

  nav {
    transition: all 0.7s ease;
    
    .navbar-toggler, 
    .dropdown button {
      &:focus, 
      &:active {
        outline: none;
        box-shadow: none;
      }
    }

    .nav-item {
      font-size: 14px;
      text-align: left;
      cursor: pointer;

      span {
        user-select: none;
      }
    }

    .dropdown {
      button {
        background-color: rgba(0,0,0,0);
        border: none;
        color: $custom-white;

        img {
          height: 20px;
          width: 20px;
        }
      }
      .dropdown-menu .dropdown-item {
        color: $custom-black;
        padding: 5px;
        &:active {
          background-color: rgba(0,0,0,0);
        }

        img {
          height: 20px;
          width: 20px;
        }
      }
    }
  }
}
</style>