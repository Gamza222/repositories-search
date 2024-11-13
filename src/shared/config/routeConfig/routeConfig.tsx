import { NotFoundPage } from "pages/NotFoundPage";
import { type RouteProps } from "react-router-dom";

import MainPage from "pages/MainPage/ui/MainPage";
import { RepositoryPage } from "pages/RepositoryPage";
import { SearchRepositoriesPage } from "pages/SearchRepositoriesPage";

export enum AppRoutes {
  MAIN = "main",
  SEARCH_REPOSITORIES = "search-repositories",
  NOT_FOUND = "not-found",
  USER_REPOSITORY = "user-repository",
  REPOSITORY = "repository",
}

export const RoutePath: Record<AppRoutes, string> = {
  [AppRoutes.MAIN]: "/",
  [AppRoutes.SEARCH_REPOSITORIES]: "/search-repositories",
  [AppRoutes.NOT_FOUND]: "*",
  [AppRoutes.REPOSITORY]: "/repository/:repoId",
  [AppRoutes.USER_REPOSITORY]: "/user-repository/:repoId",
};

export const routeConfig: Record<AppRoutes, RouteProps> = {
  [AppRoutes.MAIN]: {
    path: RoutePath.main,
    element: <MainPage />,
  },
  [AppRoutes.SEARCH_REPOSITORIES]: {
    path: RoutePath["search-repositories"],
    element: <SearchRepositoriesPage />,
  },

  [AppRoutes.NOT_FOUND]: {
    path: RoutePath["not-found"],
    element: <NotFoundPage />,
  },
  [AppRoutes.REPOSITORY]: {
    path: RoutePath.repository,
    element: <RepositoryPage />,
  },
  [AppRoutes.USER_REPOSITORY]: {
    path: RoutePath["user-repository"],
    element: <RepositoryPage forUser />,
  },
};
