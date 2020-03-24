<template>
  <div class="container-fluid fixed-top p-0 menu">
    <!-- TODO: Alter color with scroll -->
    <nav 
      :class="[scrolled ? 'bg-dark navbar-dark custom-shadow' : 'navbar-dark', 'navbar navbar-expand-lg']">
      <router-link class="navbar-brand" to="/">
        YOUR COMPANY
      </router-link>

      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav ml-auto">
        
          <li class="nav-item active">
            <router-link class="nav-link" to="/">HOME</router-link>
          </li>

          <li class="nav-item">
            <router-link class="nav-link" to="/">ABOUT</router-link>
          </li>

          <li class="nav-item dropdown">
            <router-link 
              id="navbarDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
              class="nav-link dropdown-toggle"
              to="/">
              SERVICES
            </router-link>
            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
              <a class="dropdown-item" href="#">WEBSITES</a>
              <a class="dropdown-item" href="#">APPS</a>
              <div class="dropdown-divider"></div>
              <a class="dropdown-item" href="#">CONSULTING</a>
            </div>
          </li>

          <li class="nav-item">
            <router-link class="nav-link" to="/">CONTACT</router-link>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'Navbar',

  data () {
    return {
      scrolled: false
    };
  },

  methods: {
    handleScroll () {
      this.scrolled = window.scrollY > 40;
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
    }
  }
}
</style>