import React, { memo, useCallback } from "react";
import * as cls from "./RepositoryButton.module.scss";
import { classNames } from "shared/lib/classNames/classNames";
import { useTranslation } from "react-i18next";
import { type Repository } from "entities/GithubRepository";

import { Link, useNavigate } from "react-router-dom";

import Button, { ButtonTheme } from "shared/ui/Button/Button";
import Text, { TextColor, TextSize } from "shared/ui/Text/Text";

import { GoRepo } from "react-icons/go";
import {
  setSearchReposModalClose,
  useSearchReposStore,
} from "widgets/SearchRepos";

interface RepositoryButtonProps {
  className?: string;
  repo: Repository;
  forUser?: boolean;
}

const RepositoryButton = memo((props: RepositoryButtonProps) => {
  const { t } = useTranslation();
  const { className, repo, forUser } = props;
  const navigate = useNavigate();

  const closeSearchModal = useSearchReposStore(setSearchReposModalClose);

  const handleButtonClick = useCallback(() => {
    navigate(
      forUser ? `/user-repository/${repo.id}` : `/repository/${repo.id}`
    );
    closeSearchModal();
  }, [closeSearchModal, navigate, repo]);

  return (
    <li className={classNames(cls.RepositoryButton, {}, [className])}>
      <Button theme={ButtonTheme.USUAL} onClick={handleButtonClick}>
        <div className={cls.LeftPart}>
          <GoRepo />
          <Text text={repo.name} color={TextColor.PRIMARY} size={TextSize.M} />
        </div>
        <Text
          text={t("Jump to")}
          color={TextColor.GRAY}
          size={TextSize.M}
          className={cls.RightPart}
        />
      </Button>
    </li>
  );
});

export default RepositoryButton;
