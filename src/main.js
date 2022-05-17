import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import webStyle from './sass/style.sass'

createApp(App).use(router).mount('#app');

