import Vue from 'vue';
import VueRouter from 'vue-router';
import firebase from 'firebase/app';

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
    meta: { auth: true },
  },
];


const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  const user = firebase.auth().currentUser;
  const requireAuth = to.matched.some((record) => record.meta.auth);

  if (requireAuth && !user) {
    next('/login?message=login');
  } else {
    next();
  }
});

export default router;
