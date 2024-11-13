import { SearchReposStoreState } from "../store/searchReposStore";

export const getSearchReposInputData = (state: SearchReposStoreState) =>
  state.input;
export const setSearchReposInputData = (state: SearchReposStoreState) =>
  state.setInput;
export const getSearchTriggered = (state: SearchReposStoreState) =>
  state.searchTriggered;
export const useEnableSearchTriggered = (state: SearchReposStoreState) =>
  state.enableSearchTriggered;
export const useCancelSearchTriggered = (state: SearchReposStoreState) =>
  state.cancelSearchTriggered;
export const clearSearchReposInputData = (state: SearchReposStoreState) =>
  state.clearInput;
export const getSearchReposModalState = (state: SearchReposStoreState) =>
  state.modalOpened;
export const setSearchReposModalOpen = (state: SearchReposStoreState) =>
  state.setModalOpened;
export const setSearchReposModalClose = (state: SearchReposStoreState) =>
  state.setModalClosed;
