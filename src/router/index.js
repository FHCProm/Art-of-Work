import { createRouter, createWebHashHistory } from "vue-router";
import dashboard from "@/views/PageDashboard.vue";
import goalLists from "@/views/PageGoalList.vue";
import officialPage from "@/views/PageOfficial.vue";
import login from "@/views/PageLogin.vue";

const routes = [
  { path: "/", component: officialPage },
  { path: "/goalList", component: goalLists },
  { path: "/dashboard", component: dashboard },
  { path: "/login", component: login },
];

export default createRouter({
  history: createWebHashHistory(),
  routes,
});
