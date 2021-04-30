import { createApp } from "vue";
import App from "./App";
import router from "./router";
import store from "./store";
import i18n from "./lang";
import { components, plugins } from "@/plugin/elements";

const app = createApp(App);

components.forEach(component => {
  app.component(component.name, component);
});

// eslint-disable-next-line @typescript-eslint/no-explicit-any
plugins.forEach((plugin: any) => {
  app.use(plugin);
});

app
  .use(store)
  .use(i18n)
  .use(router)
  .mount("#app");
