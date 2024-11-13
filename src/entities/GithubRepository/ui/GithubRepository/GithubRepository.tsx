import React from "react";
import * as cls from "./GithubRepository.module.scss";
import { classNames } from "shared/lib/classNames/classNames";
import { useTranslation } from "react-i18next";
import { Repository } from "entities/GithubRepository/model/types/types";

import StarsCount from "shared/ui/StarsCount/StarsCount";
import LastCommit from "shared/ui/LastCommit/LastCommit";
import ProgLanguagesList from "widgets/ProgLanguagesList/ProgLanguagesList";

interface GithubRepositoryProps {
  className?: string;
  repo: Repository;
}

const GithubRepository = (props: GithubRepositoryProps) => {
  const { t } = useTranslation();
  const { className, repo } = props;
  return (
    <div className={classNames(cls.GithubRepository, {}, [className])}>
      <div className={cls.GithubRepository__content}>
        <h2 className={cls.Title}>{repo.name}</h2>
        <StarsCount number={repo.stargazerCount} withText />
        <LastCommit date={repo.lastCommitDate} withText />
        <ProgLanguagesList
          languages={repo.languages}
          className={cls.Languages}
        />
      </div>
    </div>
  );
};

export default GithubRepository;
