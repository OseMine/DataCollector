import { createApp } from 'vue';
import App from './App.vue'; // App-Komponente
import router from './router'; // Importiere den Router

createApp(App).use(router).mount('#app');
