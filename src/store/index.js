import Vue from 'vue';
import Vuex from 'vuex';
import user from './models/user';
import info from './models/info';

Vue.use(Vuex);

export default new Vuex.Store({

  modules: {
    user,
    info,
  },
});
