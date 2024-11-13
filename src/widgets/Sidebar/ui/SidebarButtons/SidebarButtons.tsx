import Button, { ButtonSize, ButtonTheme } from "shared/ui/Button/Button";
import * as cls from "./SidebarButtons.module.scss";
import { classNames } from "shared/lib/classNames/classNames";
import { IoClose } from "react-icons/io5";
import { useSidebarStore } from "widgets/Sidebar/model/store/sidebarStore";
import { closeSidebar } from "widgets/Sidebar/model/selectors/sidebarSelectors";

interface SidebarButtonsProps {
  className?: string;
}

const SidebarButtons = (props: SidebarButtonsProps) => {
  const { className } = props;

  const useCloseSidebar = useSidebarStore(closeSidebar);

  return (
    <div className={classNames(cls.SidebarButtons, {}, [className])}>
      <Button
        className={cls.CancelButton}
        size={ButtonSize.M}
        theme={ButtonTheme.USUAL}
        onClick={useCloseSidebar}
      >
        <IoClose className={cls.CancelButton__pic} />
      </Button>
    </div>
  );
};

export default SidebarButtons;
