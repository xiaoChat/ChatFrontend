import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Home from "../views/Home";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/login",
    name: "login",
    component: () => import("@/views/login/Login")
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ "@/views/About")
  },
  {
    path: "/ref",
    name: "Ref",
    component: () => import("@/views/Ref")
  },
  {
    path: "/apidemo",
    name: "ApiDemo",
    component: () => import("@/views/ApiDemo")
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;