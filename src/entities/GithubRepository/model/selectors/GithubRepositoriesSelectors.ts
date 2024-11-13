import { GithubRepositoriesStoreState } from "../store/GithubRepositoriesStore";

export const getStoreUserRepositories = (state: GithubRepositoriesStoreState) =>
  state.userRepositories;
export const getStoreSearchRepositories = (
  state: GithubRepositoriesStoreState
) => state.searchRepositories;
export const setStoreUserRepositories = (state: GithubRepositoriesStoreState) =>
  state.setUserRepositories;
export const setStoreSearchRepositories = (
  state: GithubRepositoriesStoreState
) => state.setSearchRepositories;
