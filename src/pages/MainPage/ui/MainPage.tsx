import * as cls from "./MainPage.module.scss";
import { classNames } from "shared/lib/classNames/classNames";
import { useTranslation } from "react-i18next";
import { getGithubUserData, useGithubLoginStore } from "features/GithubLogin";
import { Repository } from "entities/GithubRepository/model/types/types";
import getUserRepositories from "entities/GithubRepository/api/getUserRepositories/getUserRepositories";
import { useNavigate } from "react-router-dom";
import {
  LoginRoutePath,
  LoginRoutes,
} from "shared/config/loginRouteConfig/loginRouteConfig";
import {
  setStoreUserRepositories,
  useGithubRepositoriesStore,
} from "entities/GithubRepository";
import { useEffect, useState } from "react";
import { PageLoader } from "widgets/PageLoader";
import Text, { TextColor, TextSize } from "shared/ui/Text/Text";
import { PagesPaginator } from "features/PagesPaginator";

interface MainPageProps {
  className?: string;
}

const MainPage = (props: MainPageProps) => {
  const { t } = useTranslation("main");
  const { className } = props;
  const user = useGithubLoginStore(getGithubUserData);
  const navigate = useNavigate();

  const [currentPage, setCurrentPage] = useState(1);
  const [afterCursor, setAfterCursor] = useState<string | null>(null);
  const [prevCursor, setPrevCursor] = useState<string | null>(null);

  const { data, isLoading, error } = getUserRepositories({
    username: user?.login,
    after: afterCursor,
  });

  const setUserRepositories = useGithubRepositoriesStore(
    setStoreUserRepositories
  );

  useEffect(() => {
    if (data) {
      setUserRepositories([...data.repositories]);
    }
  }, [data]);

  const handlePageChange = (page: number, cursor: string | null) => {
    setPrevCursor(afterCursor); // Store the current cursor as previous
    setCurrentPage(page);
    setAfterCursor(cursor);
  };

  useEffect(() => {
    if (!user?.login) {
      alert(t("User is not authenticated or login is unavailable."));
      navigate(LoginRoutePath[LoginRoutes.LOGIN]);
    }
  }, [user, t, navigate]);

  if (isLoading) return <PageLoader />;

  if (error) {
    const errorMessage = (error as Error).message;
    return (
      <div className={classNames(cls.MainPage, {}, [className])}>
        <Text
          color={TextColor.RED}
          text={`${t("Error:")} ${errorMessage}`}
          size={TextSize.M}
        />
      </div>
    );
  }

  return (
    <div className={classNames(cls.MainPage, {}, [className])}>
      {data?.repositories.length ? (
        data.repositories.map((repo: Repository) => (
          <div key={repo.id}>
            <h3>{repo.name}</h3>
            <p>{repo.description}</p>
            <p>⭐ {repo.stargazerCount}</p>
            <a href={repo.url}>View Repository</a>
          </div>
        ))
      ) : (
        <Text
          text={t("No repositories found!")}
          size={TextSize.L}
          color={TextColor.PRIMARY}
        />
      )}

      <PagesPaginator
        totalCount={data?.repositoryCount || 0}
        currentPage={currentPage}
        onPageChange={handlePageChange}
        pageInfo={data?.pageInfo || { hasNextPage: false, endCursor: null }}
        prevCursor={prevCursor}
      />
    </div>
  );
};

export default MainPage;
