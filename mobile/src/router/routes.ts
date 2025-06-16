import type { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name:'welcome',
    component: () => import('pages/Welcome.vue'),
    children: []
  },
  {
    path: '/home',
    name:'home',
    component: () => import('pages/HomeMobile.vue'),
    children: []
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;
