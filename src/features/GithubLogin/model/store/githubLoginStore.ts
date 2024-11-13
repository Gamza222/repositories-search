import { create } from "zustand";
import { User } from "../types/types";
import { devtools, persist } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";

export interface GithubLoginStoreState {
  user: User | null;
  setUser: (userData: User) => void;
  clearUser: () => void;
}

export const useGithubLoginStore = create<GithubLoginStoreState>()(
  persist(
    devtools(
      immer((set) => ({
        user: null,
        setUser: (userData) =>
          set((state) => {
            state.user = userData;
          }),
        clearUser: () =>
          set((state) => {
            state.user = null;
          }),
      }))
    ),
    {
      name: "GithubLoginStore",
      version: 1,
    }
  )
);
