import * as cls from "./HeaderMainButtons.module.scss";
import { classNames } from "shared/lib/classNames/classNames";

import { ThemeSwitcher } from "widgets/ThemeSwitcher";
import { openSidebar, useSidebarStore } from "widgets/Sidebar";

import Button, { ButtonTheme } from "shared/ui/Button/Button";
import Avatar from "shared/ui/Avatar/Avatar";
import LangSwitcher from "widgets/LangSwitcher/ui/LangSwitcher";

interface HeaderMainButtonsProps {
  className?: string;
}

const HeaderMainButtons = (props: HeaderMainButtonsProps) => {
  const { className } = props;

  const useOpenSidebar = useSidebarStore(openSidebar);

  return (
    <div className={classNames(cls.HeaderMainButtons, {}, [className])}>
      <ThemeSwitcher className={cls.ThemeSwitcher} />
      <LangSwitcher />
      <Button
        className={cls.OpenSidebarButton}
        onClick={useOpenSidebar}
        theme={ButtonTheme.CLEAR}
      >
        <Avatar />
      </Button>
    </div>
  );
};

export default HeaderMainButtons;
