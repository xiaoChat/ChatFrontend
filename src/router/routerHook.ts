import store from "@/store";
import { Router } from "vue-router";

export function beforeEach(router: Router) {
  router.beforeEach((to, from, next) => {
    console.log("before", to);
    let _f = true;
    if (to.name == "Register" || to.name == "Login") {
      _f = false;
    } else {
      _f = true;
    }
    store.dispatch("updateShowHeader", _f);
    next();
  });
}

export function afterEach(router: Router) {
  router.afterEach((to, from) => {
    console.log("after", to, from);
  });
}
