import { createRouter, createWebHistory } from 'vue-router';
import Home from '../pages/Home.vue';
import Onboard from '../pages/Onboard.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/onboarding',
    component: Onboard,
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
