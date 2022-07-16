import { createStore } from "vuex";
import { collection, getDocs } from "firebase/firestore";

export default createStore({
  state: {
    tasks: [],
    db: undefined,
  },
  getters: {},
  actions: {
    async fetchTasks({ state, commit }) {
      const querySnapshot = await getDocs(collection(state.db, "task"));
      let tasks = [];
      querySnapshot.forEach((doc) => {
        tasks.push({ id: doc.id, ...doc.data() });
      });

      commit("setTasks", { tasksFromDB: tasks });
    },
  },
  mutations: {
    setTasks(state, { tasksFromDB }) {
      state.tasks = tasksFromDB;
    },
  },
});
