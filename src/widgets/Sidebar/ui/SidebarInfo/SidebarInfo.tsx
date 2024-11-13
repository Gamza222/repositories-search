import * as cls from "./SidebarInfo.module.scss";
import { classNames } from "shared/lib/classNames/classNames";
import { getGithubUserData, useGithubLoginStore } from "features/GithubLogin";

import Avatar from "shared/ui/Avatar/Avatar";
import Text, { TextColor, TextSize } from "shared/ui/Text/Text";

interface SidebarInfoProps {
  className?: string;
}

const SidebarInfo = (props: SidebarInfoProps) => {
  const { className } = props;
  const user = useGithubLoginStore(getGithubUserData);

  return (
    <div className={classNames(cls.SidebarInfo, {}, [className])}>
      <Avatar />
      <Text text={user?.login} size={TextSize.M} color={TextColor.PRIMARY} />
    </div>
  );
};

export default SidebarInfo;
