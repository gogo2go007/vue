import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/AboutView.vue'),
  },
  {
    path: '/3103',
    name: '3103',
    component: () => import('../views/Vue3103View.vue'),
  },
  {
    path: '/3104',
    name: '3104',
    component: () => import('../views/Vue3104View.vue'),
  },
  {
    path: '/3403',
    name: '3403',
    component: () => import('../views/Vue3403View.vue'),
  },
  {
    path: '/34ex',
    name: '34ex',
    component: () => import('../views/Vue34exView.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
