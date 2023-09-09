import { createApp } from 'vue'
import BootstrapVueNext from 'bootstrap-vue-next'
import App from './App.vue'
import router from './router'
import fixtures from './fixtures.json'


import './assets/main.css'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue-next/dist/bootstrap-vue-next.css'

const app = createApp(App)
app.config.globalProperties.fixtures = fixtures;

app.config.globalProperties.baseDir = import.meta.env.BASE_URL;
app.use(router)
app.use(BootstrapVueNext)

app.mount('#app')
