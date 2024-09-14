import { createRouter, createWebHistory } from 'vue-router';
import Home from '../components/Home.vue'; // Korrektes Importieren der Home-Komponente
import AdminPanel from '../components/AdminPanel.vue'; // Korrektes Importieren des Admin-Panels
import ConfirmPage from '../components/ConfirmPage.vue'; // Korrektes Importieren der Bestätigungsseite

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home // Hauptseite
  },
  {
    path: '/admin',
    name: 'Admin',
    component: AdminPanel // Admin-Panel
  },
  {
    path: '/confirm',
    name: 'Confirm',
    component: ConfirmPage // Bestätigungsseite
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
