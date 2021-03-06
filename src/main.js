import { createApp } from 'vue'
import { createI18n } from 'vue-i18n'
import App from './App.vue'
import en from './locales/en.json'

const i18n = createI18n({
  globalInjection: true,
  legacy: false,
  locale: 'en',
  messages: {
    en
  }
})

createApp(App).use(i18n).mount('#app')
