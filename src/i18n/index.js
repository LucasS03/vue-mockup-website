import Vue from 'vue'
import VueI18n from 'vue-i18n'

import pt_BR from './languages/pt_BR.lang'
import en from './languages/en.lang'

Vue.use(VueI18n)

const i18n = new VueI18n({
  locale: 'en',
  fallbackLocale: 'en',
  messages: {
    pt_BR,
    en
  }
})

export default i18n