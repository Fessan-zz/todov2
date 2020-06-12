/* eslint-disable no-unused-vars */
import firebase from 'firebase/app';

export default {
  state: {
    infoUser: {},
  },
  mutations: {
    SET_INFO_USER(state, info) {
      state.infoUser = info;
    },
    CLEAR_INFO_USER(state) {
      state.infoUser = {};
    },
  },
  actions: {
    async FETCH_INFO_USER({ commit, dispatch }) {
      try {
        const uid = await dispatch('GET_UID');
        const infoUser = (await firebase.database().ref(`/users/${uid}/info`).once('value')).val();
        commit('SET_INFO_USER', infoUser);
      } catch (e) {
        console.log(e, 'ошибка из экшена инфоюре');
      }
    },
  },
  getters: {
    GET_INFO_USER: (state) => state.infoUser,
  },
};
