import { createStore } from "vuex";
import {
  collection,
  getDocs,
  addDoc,
  getDoc,
  orderBy,
  limit,
  query,
  startAfter,
  endBefore,
} from "firebase/firestore";
import moment from "moment";

export default createStore({
  state: {
    tasks: [],
    taskFullyLoaded: false,
    db: undefined,
    lastTaskDocSnapshot: undefined,
  },
  getters: {},
  actions: {
    async fetchTasks({ state, commit }, { pageRefresh }) {
      let q;
      if (state.lastTaskDocSnapshot == undefined) {
        q = query(
          collection(state.db, "task"),
          orderBy("date", "desc"),
          limit(3)
        );
      }

      if (state.lastTaskDocSnapshot != undefined && pageRefresh == false) {
        q = query(
          collection(state.db, "task"),
          orderBy("date", "desc"),
          startAfter(state.lastTaskDocSnapshot),
          limit(3)
        );
      }
      if (state.lastTaskDocSnapshot != undefined && pageRefresh == true) {
        q = query(
          collection(state.db, "task"),
          orderBy("date", "asce"),
          endBefore(state.lastTaskDocSnapshot)
        );
      }

      const querySnapshots = await getDocs(q);

      if (querySnapshots.docs.length == 0 && pageRefresh == false) {
        commit("taskIsFullyLoaded");
        return;
      }

      commit("setLastTaskDocSnapshot", {
        docSnapshot: querySnapshots.docs[querySnapshots.docs.length - 1],
      });

      let tasks = [];
      if (pageRefresh == false) {
        querySnapshots.forEach((doc) => {
          tasks.push({ id: doc.id, ...doc.data() });
        });
      }
      if (pageRefresh == true) {
        querySnapshots.forEach((doc) => {
          tasks.push({ id: doc.id, ...doc.data() });
        });
      }

      commit("setTasks", { tasksFromDB: tasks });
    },

    async addTask({ state, commit }, { task, time, unit }) {
      let currentTime = moment().format("X");

      const docRef = await addDoc(collection(state.db, "task"), {
        date: parseInt(currentTime),
        taskDescription: task,
        duration: `${time} ${unit}`,
      });

      commit("appendTask", {
        newTask: {
          id: docRef.id,
          date: currentTime,
          taskDescription: task,
          duration: `${time} ${unit}`,
        },
      });
    },

    setupFirebase({ commit }, { firebaseInstance }) {
      commit("setFirestoreInstance", { db: firebaseInstance });
    },
  },
  mutations: {
    setTasks(state, { tasksFromDB }) {
      if (state.tasks.length != 0) {
        if (tasksFromDB[0].date > state.tasks[0].date) {
          tasksFromDB.forEach((task) => {
            state.tasks.unshift(task);
          });
        }
        if (tasksFromDB[0].date < state.tasks[0].date) {
          tasksFromDB.forEach((task) => {
            state.tasks.push(task);
          });
        }
      }
      if (state.tasks.length == 0) {
        tasksFromDB.forEach((task) => {
          state.tasks.push(task);
        });
        console.log("yes");
      }
    },
    setLastTaskDocSnapshot(state, { docSnapshot }) {
      state.lastTaskDocSnapshot = docSnapshot;
    },

    taskIsFullyLoaded(state) {
      state.taskFullyLoaded = true;
    },

    appendTask(state, { newTask }) {
      state.tasks.unshift(newTask);
    },

    setFirestoreInstance(state, { db }) {
      state.db = db;
    },
  },
});
