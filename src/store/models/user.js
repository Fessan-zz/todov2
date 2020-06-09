/* eslint-disable no-useless-catch */
/* eslint-disable no-unused-vars */
import firebase from 'firebase/app';

export default {
  state: {
    error: null,
  },
  mutations: {
    SET_ERROR(state, error) {
      state.error = error;
    },
    CLEAR_ERROR(state) {
      state.error = null;
    },
  },
  actions: {
    async LOGIN({ commit }, { email, password }) {
      try {
        await firebase.auth().signInWithEmailAndPassword(email, password);
      } catch (err) {
        commit('SET_ERROR', err);
        throw err;
      }
    },
    async REGISTER({ dispatch, commit }, { email, password, str }) {
      try {
        await firebase.auth().createUserWithEmailAndPassword(email, password);
        const uid = await dispatch('GET_UID');
        await firebase.database().ref(`/users/${uid}/info`).set({
          data: '123',
          str,
        });
      } catch (err) {
        commit('SET_ERROR', err);
        throw err;
      }
    },
    GET_UID() {
      const user = firebase.auth().currentUser;
      return user ? user.uid : null;
    },
    async LOGOUT() {
      await firebase.auth().signOut();
    },
  },
  getters: {
    GET_ERROR: (s) => s.error,
  },
};
