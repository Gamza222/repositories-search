import React from "react";
import * as cls from "./LastCommit.module.scss";
import { classNames } from "shared/lib/classNames/classNames";
import { useTranslation } from "react-i18next";

import { IoMdGitCommit } from "react-icons/io";
import Text, { TextColor, TextSize } from "../Text/Text";
import { formatDate } from "shared/lib/hooks/useFormatDate/useFormatDate";

interface LastCommitProps {
  className?: string;
  withText?: boolean;
  date: string;
}

const LastCommit = (props: LastCommitProps) => {
  const { t } = useTranslation();
  const { className, withText, date = t("No commits") } = props;

  const formatedDate = formatDate(date);
  return (
    <div className={classNames(cls.LastCommit, {}, [className])}>
      <IoMdGitCommit className={cls.LastCommit__pic} />
      {withText && (
        <Text
          size={TextSize.M}
          color={TextColor.PRIMARY}
          text={t("Last commit")}
        />
      )}
      <span className={cls.LastCommit__text}>
        {formatedDate ? formatedDate : date}
      </span>
    </div>
  );
};

export default LastCommit;
