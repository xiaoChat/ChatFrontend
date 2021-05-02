import { MutationTree } from "vuex";

export interface YeMutations<S> extends MutationTree<S> {
  updateShowHeader: (state: S, showHeader: boolean) => void;
}
