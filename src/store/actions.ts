import { ActionContext } from "vuex";
import { YeAction } from "./interface/YeActions";
import { YeState } from "./interface/YeState";
import { mutations } from "./mutations";

export const actions: YeAction<YeState, YeState> = {
  updateShowHeader(
    context: ActionContext<YeState, YeState>,
    showHeader: boolean
  ) {
    context.commit(mutations.updateShowHeader.name, showHeader);
  }
};
