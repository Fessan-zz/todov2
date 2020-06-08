import Vue from 'vue';
import VueRouter from 'vue-router';

import tRegister from '../views/auth/t-register.vue';


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
    component: () => import('../views/auth/t-login.vue'),
  },
  {
    path: '/taskList',
    name: 'taskList',
    component: () => import('../views/tasks/t-task-list.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
