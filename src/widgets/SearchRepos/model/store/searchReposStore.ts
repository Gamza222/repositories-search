import { create } from "zustand";
import { immer } from "zustand/middleware/immer";
import { devtools } from "zustand/middleware";

export type SearchReposStoreState = {
  input: string | undefined;
  modalOpened: boolean;
  searchTriggered: boolean;
  cancelSearchTriggered: () => void;
  enableSearchTriggered: () => void;
  setModalOpened: () => void;
  setModalClosed: () => void;
  setInput: (updatedInput: string | undefined) => void;
  clearInput: () => void;
};

export const useSearchReposStore = create<SearchReposStoreState>()(
  devtools(
    immer((set) => ({
      input: "",
      modalOpened: false,
      searchTriggered: false,
      cancelSearchTriggered: () =>
        set((state) => {
          state.searchTriggered = false;
        }),
      enableSearchTriggered: () =>
        set((state) => {
          state.searchTriggered = true;
        }),
      setModalOpened: () =>
        set((state) => {
          state.modalOpened = true;
        }),
      setModalClosed: () =>
        set((state) => {
          state.modalOpened = false;
        }),
      setInput: (updatedInput) =>
        set((state) => {
          state.input = updatedInput;
        }),
      clearInput: () =>
        set((state) => {
          state.input = "";
        }),
    }))
  )
);
