import { YeMutations } from "./interface/YeMutations";
import { YeState } from "./interface/YeState";

export const mutations: YeMutations<YeState> = {
  updateShowHeader(state: YeState, showHeader = true) {
    state.showHeader = showHeader;
  }
};
