import * as cls from "./SearchReposList.module.scss";
import { Mods, classNames } from "shared/lib/classNames/classNames";
import { useTranslation } from "react-i18next";
import { useSearchReposStore } from "widgets/SearchRepos/model/store/searchReposStore";
import { getSearchReposInputData } from "widgets/SearchRepos/model/selectors/searchReposSelectors";
import {
  Repository,
  getStoreUserRepositories,
  useGithubRepositoriesStore,
} from "entities/GithubRepository";
import { useCallback, useEffect, useState } from "react";

import Text, { TextColor, TextSize } from "shared/ui/Text/Text";
import RepositoryButton from "shared/ui/RepositoryButton/RepositoryButton";

interface SearchReposListProps {
  className?: string;
}

const SearchReposList = (props: SearchReposListProps) => {
  const { t } = useTranslation();
  const { className } = props;

  const inputText = useSearchReposStore(getSearchReposInputData);

  const userRepositories = useGithubRepositoriesStore(getStoreUserRepositories);

  const [filteredRepositories, setFilteredRepositories] = useState<
    Repository[]
  >([]);

  const filterRepositories = useCallback(() => {
    if (inputText && userRepositories) {
      const filtered = userRepositories?.filter((repo) =>
        repo.name.toLowerCase().includes(inputText.toLowerCase())
      );
      setFilteredRepositories(filtered);
    } else {
      setFilteredRepositories([]);
    }
  }, [inputText, userRepositories]);

  useEffect(() => {
    filterRepositories();
  }, [inputText, filterRepositories, userRepositories]);

  const sortedRepositories = filteredRepositories.sort((a, b) =>
    a.name.localeCompare(b.name)
  );

  const SearchReposListMods: Mods = {
    [cls.SearchReposListOpen]: Boolean(sortedRepositories.length),
    [cls.SearchReposListClosed]: !Boolean(sortedRepositories.length),
  };

  return (
    <div
      className={classNames(cls.SearchReposList, { ...SearchReposListMods }, [
        className,
      ])}
    >
      <Text
        color={TextColor.GRAY}
        size={TextSize.M}
        text={t("User repositories")}
      />
      <ul className={cls.SearchReposList__content}>
        {sortedRepositories?.map((repo, index) => {
          return <RepositoryButton key={index} repo={repo} forUser />;
        })}
      </ul>
    </div>
  );
};

export default SearchReposList;
