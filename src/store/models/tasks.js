import firebase from 'firebase/app';

export default {
  state: {
    tasks: [],
  },
  mutations: {
    SET_TASK(state, infoTask) {
      state.tasks = infoTask;
    },
  },
  actions: {
    async CREATE_TASKS({ commit, dispatch }, title) {
      try {
        const uid = await dispatch('GET_UID');
        const task = await firebase.database().ref(`/users/${uid}/tasks`).push({ title });
        const infoTask = { title, id: task.key };
        console.log(infoTask, 'task info2');
        commit('SET_TASK', infoTask);
        return infoTask;
      } catch (e) {
        console.log(e);
        throw (e);
      }
    },
    async FETCH_TASKS({ dispatch }) {
      try {
        const uid = await dispatch('GET_UID');
        const tasks = (await firebase.database().ref(`/users/${uid}/tasks`).once('value')).val() || {};
        return Object.keys(tasks).map((key) => ({ ...tasks[key], id: key }));
      } catch (e) {
        console.log(e);
        throw (e);
      }
    },
  },
  getters: {
    GET_ALL_TASKS(state) {
      return state.tasks;
    },
  },
};
