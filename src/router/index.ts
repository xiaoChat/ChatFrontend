import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import MainLayout from "../layout/MainLayout";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/user/login",
    name: "login",
    component: () => import("@/views/login/Login")
  },
  {
    path: "/user/register",
    name: "register",
    component: () => import("@/views/login/Register")
  },
  {
    path: "/",
    name: "index",
    redirect: "/home",
  },
  {
    path: "/home",
    name: "Home",
    component: MainLayout,
    children: [
      {
        path: "/users/register",
        name: "register",
        component: () => import("@/views/login/Register")
      },
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

export default router;
