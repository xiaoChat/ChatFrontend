import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import MainLayout from "../layout/MainLayout";
import { afterEach, beforeEach } from "./routerHook";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/login",
    name: "Login",
    component: () => import("@/views/login/Login")
  },
  {
    path: "/register",
    name: "Register",
    component: () => import("@/views/login/Register")
  },
  {
    path: "/",
    name: "index",
    redirect: "/home"
  },
  {
    path: "/home",
    name: "Home",
    component: MainLayout,
    children: [
      {
        path: "/",
        name: "homeIndex",
        component: () => import("@/views/login/Register")
      },
      {
        path: "about",
        name: "HomeAbout",
        component: () => import("@/views/About")
      },
      {
        path: "ref",
        name: "HomeRef",
        component: () => import("@/views/Ref")
      },
      {
        path: "apidemo",
        name: "HomeApiDemo",
        component: () => import("@/views/ApiDemo")
      },
      {
        path: "register",
        name: "HomeUsersregister",
        component: () => import("@/views/login/Register")
      }
    ]
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

beforeEach(router);
afterEach(router);

export default router;
