import React from "react";
import * as cls from "./ProgramingLanguage.module.scss";
import { classNames } from "shared/lib/classNames/classNames";
import Text, { TextColor, TextSize } from "../Text/Text";
import { generateColor } from "shared/lib/hooks/useGenerateColor/useGenerateColor";

interface ProgramingLanguageProps {
  className?: string;
  languageName: string;
}

const ProgramingLanguage = (props: ProgramingLanguageProps) => {
  const { className, languageName } = props;

  const generatedColor = generateColor(languageName);

  return (
    <div className={classNames(cls.ProgramingLanguage, {}, [className])}>
      <span
        style={{ background: generatedColor }}
        className={cls.ProgramingLanguage__dot}
      />
      <Text size={TextSize.M} color={TextColor.PRIMARY} text={languageName} />
    </div>
  );
};

export default ProgramingLanguage;
