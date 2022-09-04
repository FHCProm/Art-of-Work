import { createRouter, createWebHashHistory } from "vue-router";
import dashboard from "@/views/PageDashboard";

const routes = [{ path: "/", component: dashboard }];

export default createRouter({
  history: createWebHashHistory(),
  routes,
});
