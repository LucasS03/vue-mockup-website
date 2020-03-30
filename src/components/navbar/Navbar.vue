<template>
  <div class="container-fluid fixed-top p-0 menu">
    <nav 
      :class="[scrolled ? 'bg-dark navbar-dark custom-shadow' : 'navbar-dark', 'navbar navbar-expand-lg']">
      <router-link class="navbar-brand" to="/">
        YOUR COMPANY
      </router-link>

      <!-- TODO: on click, set background dark -->
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav ml-auto">
        
          <li id="home" class="nav-item active" @click="link('home')">
            <span class="nav-link">HOME</span>
          </li>

          <li id="about" class="nav-item" @click="link('about')">
            <span class="nav-link">ABOUT</span>
          </li>

          <li id="services" class="nav-item" @click="link('services')">
            <span class="nav-link">SERVICES</span>
          </li>

          <li id="contact" class="nav-item" @click="link('contact')">
            <span class="nav-link">CONTACT</span>
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
      scrolled: false
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
.menu {
  
  .custom-shadow {
    box-shadow: 0 0px 10px #252525;
  }

  nav {
    transition: all 0.7s ease;
    
    .navbar-toggler {
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
  }
}
</style>