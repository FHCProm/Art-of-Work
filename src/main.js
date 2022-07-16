import { createApp } from "vue";
import App from "./App.vue";
import { initializeApp } from "firebase/app";
import firebaseConfig from "@/config/firebase";
import { getFirestore } from "firebase/firestore";
import store from "@/store";

import "./main.css";

const god_of_breaking_app = createApp(App);
const firebaseObject = initializeApp(firebaseConfig);
god_of_breaking_app.config.globalProperties.db = getFirestore(firebaseObject);
god_of_breaking_app.use(store);

god_of_breaking_app.mount("#app");
