import { useRef } from "react";
import * as cls from "./Sidebar.module.scss";
import { Mods, classNames } from "shared/lib/classNames/classNames";
import { useSidebarStore } from "../model/store/sidebarStore";
import {
  closeSidebar,
  getSidebarOpened,
} from "../model/selectors/sidebarSelectors";
import { useClickOutside } from "shared/lib/hooks/useClickOutside/useClickOutside";

import SidebarNav from "./SidebarNav/SidebarNav";
import SidebarInfo from "./SidebarInfo/SidebarInfo";
import SidebarButtons from "./SidebarButtons/SidebarButtons";

interface SidebarProps {
  className?: string;
}

const Sidebar = (props: SidebarProps) => {
  const { className } = props;
  const sidebarWrapperRef = useRef<HTMLDivElement>(null);

  const SidebarOpened = useSidebarStore(getSidebarOpened);
  const useCloseSidebar = useSidebarStore(closeSidebar);

  useClickOutside(sidebarWrapperRef, useCloseSidebar);

  const sidebarMods: Mods = {
    [cls.sidebarOpened]: SidebarOpened,
    [cls.sidebarClosed]: !SidebarOpened,
  };

  return (
    <div className={classNames(cls.Sidebar, { ...sidebarMods }, [className])}>
      <span className={cls.Sidebar__overlay}></span>
      <div className={cls.Sidebar__wrapper} ref={sidebarWrapperRef}>
        <div className={cls.Sidebar__top}>
          <SidebarInfo />
          <SidebarButtons />
        </div>
        <SidebarNav />
      </div>
    </div>
  );
};

export default Sidebar;
