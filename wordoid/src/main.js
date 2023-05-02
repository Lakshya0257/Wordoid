import { createApp} from 'vue'
import router from './router'
import store from '../store/store'
import { createPinia } from 'pinia'
import './style.css'
import App from './App.vue'

const app = createApp(App)
app.use(createPinia())
app.use(router)
app.use(store)

export const eventBus = app.config.globalProperties.$eventBus
app.mount('#app')
