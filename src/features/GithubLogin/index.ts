import {
  clearGithubUserData,
  getGithubUserData,
  setGithubUserData,
} from "./model/selectors/githubLoginSelectors";
import { type User } from "./model/types/types";
import { useGithubLoginStore } from "./model/store/githubLoginStore";
import GithubLoginPage from "./ui/GithubLoginPage/GithubLoginPage";
// import { checkGitHubAuth } from "./api/checkGithubAuth/checkGithubAuth";
import GithubCallbackPage from "./ui/GithubCallbackPage/GithubCallbackPage";

export {
  clearGithubUserData,
  getGithubUserData,
  setGithubUserData,
  User,
  useGithubLoginStore,
  // checkGitHubAuth,
  GithubLoginPage,
  GithubCallbackPage,
};
