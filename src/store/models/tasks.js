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
    async CREATE_TASKS({ dispatch }, title) {
      try {
        const uid = await dispatch('GET_UID');
        const task = await firebase.database().ref(`/users/${uid}/tasks`).push({ title });
        return task;
      } catch (e) {
        console.log(e);
        throw (e);
      }
    },
    async FETCH_TASKS({ commit, dispatch }) {
      try {
        const uid = await dispatch('GET_UID');
        const tasks = (await firebase.database().ref(`/users/${uid}/tasks`).once('value')).val() || {};
        const taskInfo = Object.keys(tasks).map((key) => ({ ...tasks[key], id: key }));
        commit('SET_TASK', taskInfo);
        return taskInfo;
      } catch (e) {
        console.log(e);
        throw (e);
      }
    },
    async REMOVE_TASK({ dispatch }, id) {
      const uid = await dispatch('GET_UID');
      await firebase.database().ref(`/users/${uid}/tasks/${id}`).remove();
      dispatch('FETCH_TASKS');
    },
  },
  getters: {
    GET_ALL_TASKS(state) {
      return state.tasks;
    },
  },
};
