import { createRouter, createWebHashHistory } from "vue-router";
import dashboard from "@/views/PageDashboard.vue";
import goalLists from "@/views/PageGoalList.vue";

const routes = [
  { path: "/", component: dashboard },
  { path: "/goalList", component: goalLists },
];

export default createRouter({
  history: createWebHashHistory(),
  routes,
});
