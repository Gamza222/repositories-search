import { GithubCallbackPage, GithubLoginPage } from "features/GithubLogin";
import { NotFoundPage } from "pages/NotFoundPage";
import { type RouteProps } from "react-router-dom";

export enum LoginRoutes {
  LOGIN = "login",
  CALLBACK = "callback",
}

export const LoginRoutePath: Record<LoginRoutes, string> = {
  [LoginRoutes.LOGIN]: "/login",
  [LoginRoutes.CALLBACK]: "/callback",
};

export const loginRouteConfig: Record<LoginRoutes, RouteProps> = {
  [LoginRoutes.LOGIN]: {
    path: LoginRoutePath.login,
    element: <GithubLoginPage />,
  },

  [LoginRoutes.CALLBACK]: {
    path: LoginRoutePath.callback,
    element: <GithubCallbackPage />,
  },
};
