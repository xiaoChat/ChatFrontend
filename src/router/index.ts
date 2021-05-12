import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import MainLayout from "@/layout/MainLayout";
import ForumLayout from "@/layout/ForumLayout";
import ToolLayout from "@/layout/ToolLayout";
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
    path: "/chatroom",
    name: "ChatRoom",
    component: () => import("@/views/chatRoom")
  },
  {
    path: "/home",
    name: "Home",
    component: MainLayout,
    children: [
      {
        path: "",
        name: "HomeIndex",
        component: () =>
          import(/* webpackChunkName: "home" */ "@/views/home/Index")
      },
      {
        path: "channel",
        name: "HomeChannel",
        component: () =>
          import(/* webpackChunkName: "home" */ "@/views/home/channel/Index")
      }
    ]
  },
  {
    path: "/forum",
    name: "Forum",
    component: ForumLayout,
    children: [
      {
        path: "",
        name: "ForumIndex",
        component: () =>
          import(/* webpackChunkName: "Forum" */ "@/views/forum/Index")
      }
    ]
  },
  {
    path: "/tool",
    name: "Tool",
    component: ToolLayout,
    children: [
      {
        path: "",
        name: "ToolIndex",
        component: () =>
          import(/* webpackChunkName: "Tool" */ "@/views/tool/Index")
      }
    ]
  },
  // 后续废弃
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
