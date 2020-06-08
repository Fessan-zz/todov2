import firebase from 'firebase/app';

export default {
  state: {},
  mutations: {},
  actions: {
    async LOGIN({ email, password }) {
      try {
        await firebase.auth().signInWithEmailAndPassword(email, password);
      } catch (err) {
        console.log(err);
      }
    },
  },
  getters: {},
};
