import { createRouter, createWebHashHistory } from "vue-router";
import dashboard from "@/views/PageDashboard.vue";
import goalLists from "@/views/PageGoalList.vue";
import officialPage from "@/views/PageOfficial.vue";

const routes = [
  { path: "/", component: officialPage },
  { path: "/goalList", component: goalLists },
  { path: "/dashboard", component: dashboard },
];

export default createRouter({
  history: createWebHashHistory(),
  routes,
});
