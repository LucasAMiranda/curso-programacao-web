import { createApp } from 'vue';
import App from './App.vue';
import router from './router'; // Importe o Vue Router aqui

createApp(App)
  .use(router) // Use o Vue Router
  .mount('#app');
