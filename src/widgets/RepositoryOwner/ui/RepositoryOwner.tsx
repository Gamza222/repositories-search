import React from "react";
import * as cls from "./RepositoryOwner.module.scss";
import { classNames } from "shared/lib/classNames/classNames";
import { useTranslation } from "react-i18next";
import { Repository } from "entities/GithubRepository";

import Avatar from "shared/ui/Avatar/Avatar";
import Text, { TextColor, TextSize } from "shared/ui/Text/Text";
import Button, { ButtonSize, ButtonTheme } from "shared/ui/Button/Button";

import { RiExternalLinkLine } from "react-icons/ri";

interface RepositoryOwnerProps {
  className?: string;
  repo: Repository;
}

const RepositoryOwner = (props: RepositoryOwnerProps) => {
  const { t } = useTranslation();
  const { className, repo } = props;
  return (
    <div className={classNames(cls.RepositoryOwner, {}, [className])}>
      <Avatar photo={repo.ownerAvatarUrl} className={cls.Avatar} />
      <div className={cls.RepositoryOwner__content}>
        <Text text={repo.ownerLogin} size={TextSize.L} color={TextColor.GRAY} />
        <a href={repo.ownerProfileUrl} target="_blank" className={cls.VisitBtn}>
          <Button theme={ButtonTheme.FILLED} size={ButtonSize.L}>
            <Text
              text={t("Visit Github profile")}
              size={TextSize.L}
              color={TextColor.PRIMARY}
            />
            <RiExternalLinkLine />
          </Button>
        </a>
      </div>
    </div>
  );
};

export default RepositoryOwner;
