import { ActionContext } from "vuex";
import { YeAction } from "./interface/YeActions";
import { YeState } from "./interface/YeState";

export const actions: YeAction<YeState, YeState> = {
  updateShowHeader(
    context: ActionContext<YeState, YeState>,
    showHeader: boolean
  ) {
    console.log("action:123123");
    context.commit("updateShowHeader", showHeader);
  }
};