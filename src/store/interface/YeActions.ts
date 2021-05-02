import { ActionTree, ActionContext } from "vuex";

export interface YeAction<S, R> extends ActionTree<S, R> {
  updateShowHeader: (context: ActionContext<S, R>, showHeader: boolean) => void;
}
