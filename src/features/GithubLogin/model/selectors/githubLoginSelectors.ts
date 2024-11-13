import { GithubLoginStoreState } from "../store/githubLoginStore";

export const getGithubUserData = (state: GithubLoginStoreState) => state.user;
export const setGithubUserData = (state: GithubLoginStoreState) =>
  state.setUser;
export const clearGithubUserData = (state: GithubLoginStoreState) =>
  state.clearUser;
