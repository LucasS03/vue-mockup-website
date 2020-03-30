import Vue from 'vue'
import App from './App.vue'
import router from './router'

// Material Design
import '@mdi/font/css/materialdesignicons.min.css'

// Vue Toastfication
import Toast from "vue-toastification";
import "vue-toastification/dist/index.css";

// Bootstrap
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

// Jquery
import jQuery from 'jquery'
global.jQuery = jQuery
global.$ = jQuery
window.$ = jQuery
window.JQuery = jQuery

Vue.config.productionTip = false

Vue.use(Toast)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
