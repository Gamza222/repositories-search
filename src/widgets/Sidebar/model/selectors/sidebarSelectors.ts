import { useSidebarStoreState } from "../store/sidebarStore";

export const getSidebarOpened = (state: useSidebarStoreState) => state.opened;
export const closeSidebar = (state: useSidebarStoreState) => state.closeSidebar;
export const openSidebar = (state: useSidebarStoreState) => state.openSidebar;
