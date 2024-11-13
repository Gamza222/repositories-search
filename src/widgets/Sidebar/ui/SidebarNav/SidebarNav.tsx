import * as cls from "./SidebarNav.module.scss";
import { classNames } from "shared/lib/classNames/classNames";
import LogoutButton from "./LogoutButton/LogoutButton";

interface SidebarNavProps {
  className?: string;
}

const SidebarNav = (props: SidebarNavProps) => {
  const { className } = props;

  return (
    <ul className={classNames(cls.SidebarNav, {}, [className])}>
      <li>
        <LogoutButton />
      </li>
    </ul>
  );
};

export default SidebarNav;
