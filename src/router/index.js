import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/status",
      name: "status-list",
      component: () => import("../views/StatusListView.vue"),
    },
    {
      // Route dynamique avec paramètre :id
      path: "/status/:id",
      name: "status-detail",
      component: () => import("../views/StatusDetailView.vue"),
    },
    {
      path: "/about",
      name: "about",
      component: () => import("../views/AboutView.vue"),
    },
  ],
});

export default router;
