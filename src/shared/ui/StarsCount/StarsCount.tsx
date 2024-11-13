import React from "react";
import * as cls from "./StarsCount.module.scss";
import { classNames } from "shared/lib/classNames/classNames";
import { useTranslation } from "react-i18next";

import Text, { TextColor, TextSize } from "../Text/Text";

import { FaRegStar } from "react-icons/fa";

interface StarsCountProps {
  className?: string;
  number?: number;
  withText?: boolean;
}

const StarsCount = (props: StarsCountProps) => {
  const { t } = useTranslation();
  const { className, number = 0, withText } = props;
  return (
    <div className={classNames(cls.StarsCount, {}, [className])}>
      <FaRegStar className={cls.StarsCount__pic} />
      {withText && (
        <Text size={TextSize.M} color={TextColor.PRIMARY} text={t("Stars")} />
      )}
      <span className={cls.StarsCount__text}>{number}</span>
    </div>
  );
};

export default StarsCount;
