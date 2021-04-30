import { createApp } from "vue";
import App from "./App";
import router from "./router";
import store from "./store";
import i18n from "./lang";
import importElement from "@/plugin/elements";

const app = createApp(App);

// import element-plus
importElement(app);

app
  .use(store)
  .use(i18n)
  .use(router)
  .mount("#app");
