import { memo, useCallback, useState } from "react";
import * as cls from "./LangSwitcher.module.scss";

import { classNames } from "shared/lib/classNames/classNames";
import { useTranslation } from "react-i18next";

import Text, { TextColor } from "shared/ui/Text/Text";
import Button, { ButtonSize, ButtonTheme } from "shared/ui/Button/Button";
import LangSwitcherDropdown from "./LangSwitcherDropdown/LangSwitcherDropdown";

import { IoMdArrowDropdown } from "react-icons/io";

interface LangSwitcherProps {
  className?: string;
  short?: boolean;
}

const LangSwitcher = memo(({ className, short }: LangSwitcherProps) => {
  const { t, i18n } = useTranslation();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const currentLanguage = i18n.language;

  const handleLanguageChange = useCallback(
    async (language: string) => {
      await i18n.changeLanguage(language);
      setIsDropdownOpen(false);
    },
    [isDropdownOpen, setIsDropdownOpen, i18n]
  );

  return (
    <div className={classNames(cls.LangSwitcher, {}, [className])}>
      <Button
        className={cls.LangSwitcherButton}
        theme={ButtonTheme.BORDER}
        size={ButtonSize.M}
        onClick={toggleDropdown}
      >
        <Text
          text={t(`languagesShortNames.${currentLanguage}`)}
          color={TextColor.PRIMARY}
        />
        <IoMdArrowDropdown className={cls.LangSwitcherButton__pic} />
      </Button>
      <LangSwitcherDropdown
        handleLanguageChange={handleLanguageChange}
        isDropdownOpen={isDropdownOpen}
      />
    </div>
  );
});

export default LangSwitcher;
