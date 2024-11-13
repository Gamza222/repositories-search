import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";

export interface useSidebarStoreState {
  opened: boolean;
  closeSidebar: () => void;
  openSidebar: () => void;
}

export const useSidebarStore = create<useSidebarStoreState>()(
  devtools(
    immer((set) => ({
      opened: false,
      closeSidebar: () =>
        set((state) => {
          state.opened = false;
        }),
      openSidebar: () =>
        set((state) => {
          state.opened = true;
        }),
    }))
  )
);
