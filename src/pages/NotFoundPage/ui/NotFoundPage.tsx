import React, { memo } from "react";
import * as cls from "./NotFoundPage.module.scss";

import { classNames } from "shared/lib/classNames/classNames";
import { useTranslation } from "react-i18next";

interface NotFoundPageProps {
  className?: string;
}

const NotFoundPage = memo(({ className }: NotFoundPageProps) => {
  const { t } = useTranslation();
  return (
    <div className={classNames(cls.NotFoundPage, {}, [className])}>
      {t("Страница не найдена")}
    </div>
  );
});

export default NotFoundPage;
