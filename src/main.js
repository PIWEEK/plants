import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// css
import './assets/reset.css';
import './assets/_general.scss';

createApp(App).use(store).use(router).mount('#app')
