import HomePage from "./views/HomePage.vue";
import ResumePage from "./views/ResumePage.vue";
import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "HomePage",
    component: HomePage,
  },
  {
    path: "/resume",
    name: "ResumePage",
    component: ResumePage,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
