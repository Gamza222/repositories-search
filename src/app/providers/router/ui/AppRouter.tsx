import { getGithubUserData, useGithubLoginStore } from "features/GithubLogin";
import React, { Suspense, useEffect } from "react";
import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
import { loginRouteConfig } from "shared/config/loginRouteConfig/loginRouteConfig";
import { routeConfig } from "shared/config/routeConfig/routeConfig";
import { PageLoader } from "widgets/PageLoader";

const AppRouter = () => {
  const user = useGithubLoginStore(getGithubUserData);
  const navigate = useNavigate();

  if (user) {
    return (
      <Routes>
        {Object.values(routeConfig).map(({ element, path }) => (
          <Route
            key={path}
            path={path}
            element={
              <Suspense fallback={<PageLoader />}>
                <div className="page-wrapper">{element}</div>
              </Suspense>
            }
          />
        ))}
      </Routes>
    );
  }

  return (
    <Routes>
      <Route
        path={loginRouteConfig.login.path}
        element={
          <Suspense fallback={<PageLoader />}>
            <div className="page-wrapper">{loginRouteConfig.login.element}</div>
          </Suspense>
        }
      />
      <Route
        path={loginRouteConfig.callback.path}
        element={
          location.search.includes("code") ? (
            <Suspense fallback={<PageLoader />}>
              <div className="page-wrapper">
                {loginRouteConfig.callback.element}
              </div>
            </Suspense>
          ) : (
            <Navigate to={loginRouteConfig.login.path || ""} replace />
          )
        }
      />
      <Route
        path="*"
        element={<Navigate to={loginRouteConfig.login.path || ""} replace />}
      />
    </Routes>
  );
};

export default AppRouter;
