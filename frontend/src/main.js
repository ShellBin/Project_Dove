import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import ArcoVue from '@arco-design/web-vue'
import ArcoVueIcon from '@arco-design/web-vue/es/icon'
import '@arco-themes/vue-yuka-liveset/css/arco.css'

import './assets/main.css'


const app = createApp(App)
app.use(router)
app.use(ArcoVue)
app.use(ArcoVueIcon)

app.mount('#app')
