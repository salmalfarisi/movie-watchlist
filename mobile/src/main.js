import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import quasar from 'quasar'
import 'quasar/dist/quasar.css'
import './css/styles/tailwind.css'

const app = createApp(App)
app.use(createPinia())
app.use(quasar)
app.mount('#app')