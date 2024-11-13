import React from "react";
import * as cls from "./Header.module.scss";
import { classNames } from "shared/lib/classNames/classNames";
import { useTranslation } from "react-i18next";

import { SearchRepos } from "widgets/SearchRepos";

import { IoLogoGithub } from "react-icons/io";

import HeaderMainButtons from "./HeaderMainButtons/HeaderMainButtons";

interface HeaderProps {
  className?: string;
}

const Header = (props: HeaderProps) => {
  const { t } = useTranslation();
  const { className } = props;

  return (
    <div className={classNames(cls.Header, {}, [className])}>
      <span className={cls.Logo}>
        <IoLogoGithub className={cls.Logo__pic} />
      </span>
      <div className={cls.Header__services}>
        <SearchRepos />
        <HeaderMainButtons />
      </div>
    </div>
  );
};

export default Header;
