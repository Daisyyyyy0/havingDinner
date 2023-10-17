import { createApp } from 'vue'
import { createPinia } from 'pinia'

import './style.css'
import App from './App.vue'
import router from './router'

import isMobile from './utils/isMobile'
import Vue3Marquee from 'vue3-marquee'
import ElementPlus from 'element-plus'
import i18n from './utils/i18n'


const app = createApp(App).mount('#app')

app.use(createPinia())
app.use(router)
app.use(i18n)
app.use(isMobile)
app.use(Vue3Marquee)
app.use(ElementPlus)