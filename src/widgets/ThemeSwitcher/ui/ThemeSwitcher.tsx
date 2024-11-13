import React, { memo } from "react";
import * as cls from "./ThemeSwithcher.module.scss";
import { classNames } from "shared/lib/classNames/classNames";
import { Theme, useTheme } from "app/providers/ThemeProvider";
import { BsMoonStars } from "react-icons/bs";
import { AiOutlineSun } from "react-icons/ai";
import { GoMoon } from "react-icons/go";
import Button, { ButtonTheme } from "shared/ui/Button/Button";

interface ThemeSwitcherProps {
  className?: string;
}

const ThemeSwitcher = memo(({ className }: ThemeSwitcherProps) => {
  const { theme, toggleTheme } = useTheme();

  return (
    <Button
      theme={ButtonTheme.BORDER}
      onClick={toggleTheme}
      className={classNames(cls.ThemeSwitcher, {}, [className])}
    >
      {theme === Theme.DARK ? <AiOutlineSun /> : <GoMoon />}
    </Button>
  );
});

export default ThemeSwitcher;
