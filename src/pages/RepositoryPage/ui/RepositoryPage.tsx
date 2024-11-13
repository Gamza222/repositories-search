import React, { useMemo } from "react";
import * as cls from "./RepositoryPage.module.scss";
import { classNames } from "shared/lib/classNames/classNames";
import { useTranslation } from "react-i18next";
import { useParams } from "react-router-dom";
import {
  getStoreSearchRepositories,
  getStoreUserRepositories,
  useGithubRepositoriesStore,
} from "entities/GithubRepository";
import Text, { TextColor, TextSize } from "shared/ui/Text/Text";
import { RepositoryOwner } from "widgets/RepositoryOwner";
import GithubRepository from "entities/GithubRepository/ui/GithubRepository/GithubRepository";

interface RepositoryPageProps {
  className?: string;
  forUser?: boolean;
}

const RepositoryPage = (props: RepositoryPageProps) => {
  const { t } = useTranslation("repository");
  const { className, forUser } = props;
  const { repoId } = useParams<{ repoId: string }>();

  const repositories = useGithubRepositoriesStore(
    forUser ? getStoreUserRepositories : getStoreSearchRepositories
  );
  const repository = useMemo(() => {
    return repositories.find((repo) => repo.id == repoId);
  }, [repositories]);

  if (!repository) {
    return (
      <div className={classNames(cls.RepositoryPage, {}, [className])}>
        <Text
          text={t("Repository not found")}
          color={TextColor.RED}
          size={TextSize.M}
        />
      </div>
    );
  }
  return (
    <div className={classNames(cls.RepositoryPage, {}, [className])}>
      <div className={cls.RepositoryPage__wrapper}>
        <RepositoryOwner repo={repository} className={cls.RepositoryOwner} />
        <GithubRepository repo={repository} className={cls.Repository} />
        <div className={cls.FromMyself}>
          <Text
            text={t("From myself")}
            color={TextColor.PRIMARY}
            size={TextSize.M}
          />
        </div>
      </div>
    </div>
  );
};

export default RepositoryPage;
