import Vue from 'vue';
import VueRouter from 'vue-router';

import tRegister from '../components/auth/t-register.vue';


Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'register',
    component: tRegister,
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../components/auth/t-login.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
