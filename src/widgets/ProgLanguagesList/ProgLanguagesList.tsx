import React from "react";
import * as cls from "./ProgLanguagesList.module.scss";
import { classNames } from "shared/lib/classNames/classNames";
import { useTranslation } from "react-i18next";

import Text, { TextColor, TextSize } from "shared/ui/Text/Text";
import ProgramingLanguage from "shared/ui/ProgramingLanguage/ProgramingLanguage";

interface ProgLanguagesListProps {
  className?: string;
  languages?: string[];
}

const ProgLanguagesList = (props: ProgLanguagesListProps) => {
  const { t } = useTranslation();
  const { className, languages = [] } = props;
  return (
    <div className={classNames(cls.ProgLanguagesList, {}, [className])}>
      <Text size={TextSize.L} color={TextColor.PRIMARY} text={t("Languages")} />
      <ul className={cls.ProgLanguagesList__list}>
        {languages
          ? languages.map((lang, index) => {
              return (
                <li key={index}>
                  <ProgramingLanguage languageName={lang} />
                </li>
              );
            })
          : t("No languages found")}
      </ul>
    </div>
  );
};

export default ProgLanguagesList;
