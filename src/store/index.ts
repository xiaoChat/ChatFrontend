import { createStore } from "vuex";
import { state } from "@/store/state";
import { mutations } from "@/store/mutations";
import { actions } from "./actions";

export default createStore({
  state: state,
  mutations: mutations,
  actions: actions,
  modules: {}
});
