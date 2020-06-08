import Vue from 'vue';
import Vuelidate from 'vuelidate';
import firebase from 'firebase/app';
import App from './App.vue';
import router from './router';
import store from './store';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import './assets/css/main.css';


import 'firebase/auth';
import 'firebase/database';

Vue.use(Vuelidate);
Vue.config.productionTip = false;


firebase.initializeApp({
  apiKey: 'AIzaSyDXXlX5O_ONPD7p4rYoknDI28FgBbsAacg',
  authDomain: 'todov2-13c4e.firebaseapp.com',
  databaseURL: 'https://todov2-13c4e.firebaseio.com',
  projectId: 'todov2-13c4e',
  storageBucket: 'todov2-13c4e.appspot.com',
  messagingSenderId: '865796732325',
  appId: '1:865796732325:web:571621c7bbfe78579c244c',
});

let app;

firebase.auth().onAuthStateChanged(() => {
  if (!app) {
    app = new Vue({
      router,
      store,
      render: (h) => h(App),
    }).$mount('#app');
  }
});
