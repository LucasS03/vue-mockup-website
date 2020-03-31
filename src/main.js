import Vue from 'vue'
import App from './App.vue'
import router from './router'

// Material Design
import '@mdi/font/css/materialdesignicons.min.css'

// Toast
import Toast from "vue-toastification";
import "vue-toastification/dist/index.css";

// Bootstrap
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

// i18n
import i18n from './i18n'

Vue.config.productionTip = false

Vue.use(Toast)

new Vue({
  i18n,
  router,
  render: h => h(App)
}).$mount('#app')
