import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";
import { Repository } from "../types/types";

export interface GithubRepositoriesStoreState {
  userRepositories: Repository[];
  searchRepositories: Repository[];
  setUserRepositories: (repos: Repository[]) => void;
  setSearchRepositories: (repos: Repository[]) => void;
}

export const useGithubRepositoriesStore =
  create<GithubRepositoriesStoreState>()(
    persist(
      devtools(
        immer((set) => ({
          userRepositories: [],
          searchRepositories: [],
          setUserRepositories: (repos) =>
            set((state) => {
              state.userRepositories = repos;
            }),
          setSearchRepositories: (repos) =>
            set((state) => {
              state.searchRepositories = repos;
            }),
        }))
      ),
      {
        name: "GithubRepositoriesStore",
        version: 1,
      }
    )
  );
