import React from "react";
import * as cls from "./LangSwitcherDropdown.module.scss";
import { Mods, classNames } from "shared/lib/classNames/classNames";
import { useTranslation } from "react-i18next";
import Button, { ButtonSize, ButtonTheme } from "shared/ui/Button/Button";
import { AvailableLanguages } from "shared/config/i18n/i18nLanguages";

interface LangSwitcherDropdownProps {
  className?: string;
  isDropdownOpen: boolean;
  handleLanguageChange: (language: string) => Promise<void>;
}

const LangSwitcherDropdown = (props: LangSwitcherDropdownProps) => {
  const { t } = useTranslation();
  const { className, handleLanguageChange, isDropdownOpen } = props;

  const languages = Object.values(AvailableLanguages);

  const dropdownMods: Mods = {
    [cls.LangSwitcherDropdownOpened]: isDropdownOpen,
    [cls.LangSwitcherDropdownClosed]: !isDropdownOpen,
  };

  return (
    <div
      className={classNames(cls.LangSwitcherDropdown, { ...dropdownMods }, [
        className,
      ])}
    >
      <ul>
        {languages.map((lang) => (
          <li key={lang} className={cls.LangSwitcherDropdown__item}>
            <Button
              className={cls.LangSwitcherDropdown__item__button}
              size={ButtonSize.M}
              theme={ButtonTheme.USUAL}
              onClick={() => handleLanguageChange(lang)}
            >
              {t(`languagesFullNames.${lang}`)}
            </Button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LangSwitcherDropdown;
