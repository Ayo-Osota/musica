import './assets/index.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import VeeValidatePlugin from "./includes/validation";
import "./includes/firebase"

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(VeeValidatePlugin)
app.use(router)

app.mount('#app')
