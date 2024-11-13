import React, { useEffect } from "react";
import * as cls from "./SearchRepositoriesPage.module.scss";
import { classNames } from "shared/lib/classNames/classNames";
import { useTranslation } from "react-i18next";
import { Repository, getSearchRepositories } from "entities/GithubRepository";
import {
  getSearchReposInputData,
  useSearchReposStore,
} from "widgets/SearchRepos";
import {
  getSearchTriggered,
  useCancelSearchTriggered,
} from "widgets/SearchRepos/model/selectors/searchReposSelectors";
import { useNavigate } from "react-router-dom";
import { AppRoutes, RoutePath } from "shared/config/routeConfig/routeConfig";

import { PageLoader } from "widgets/PageLoader";
import Text, { TextColor, TextSize } from "shared/ui/Text/Text";

interface SearchRepositoriesPageProps {
  className?: string;
}

const SearchRepositoriesPage = (props: SearchRepositoriesPageProps) => {
  const { t } = useTranslation();
  const { className } = props;
  const navigate = useNavigate();

  const inputData = useSearchReposStore(getSearchReposInputData);
  const searchTriggered = useSearchReposStore(getSearchTriggered);
  const disableSearchTriggered = useSearchReposStore(useCancelSearchTriggered);

  console.log(searchTriggered);
  const { data, isLoading, error } = getSearchRepositories({
    query: inputData,
    searchTriggered,
    disableSearchTriggered: disableSearchTriggered,
  });

  useEffect(() => {
    if (!inputData) {
      alert(t("Input is empty!"));
      navigate(RoutePath[AppRoutes.MAIN]);
      disableSearchTriggered();
    }
  }, []);

  if (isLoading) return <PageLoader />;

  if (error) {
    const errorMessage = (error as Error).message;
    return (
      <div className={classNames(cls.SearchRepositoriesPage, {}, [className])}>
        <Text
          color={TextColor.RED}
          text={`${t("Error:")} ${errorMessage}}`}
          size={TextSize.M}
        />
      </div>
    );
  }

  return (
    <div className={classNames(cls.SearchRepositoriesPage, {}, [className])}>
      {data ? (
        data?.repositories.map((repo: Repository) => (
          <div key={repo.id}>
            <h3>{repo.name}</h3>
            <p>{repo.description}</p>
            <p>⭐ {repo.stargazerCount}</p>
            <a href={repo.url}>View Repository</a>
          </div>
        ))
      ) : (
        <Text
          text={t("No repositoies found!")}
          size={TextSize.L}
          color={TextColor.PRIMARY}
        />
      )}
    </div>
  );
};

export default SearchRepositoriesPage;
