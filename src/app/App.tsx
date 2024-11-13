import { classNames } from "shared/lib/classNames/classNames";
import { useTheme } from "./providers/ThemeProvider";
import { AppRouter } from "./providers/router";
import { Suspense } from "react";
import "./styles/index.scss";
import { Header } from "widgets/Header";
import { Sidebar } from "widgets/Sidebar";
import { getGithubUserData, useGithubLoginStore } from "features/GithubLogin";
import { PageLoader } from "widgets/PageLoader";

const App = () => {
  const { theme } = useTheme();

  const user = useGithubLoginStore(getGithubUserData);
  return (
    <div className={classNames("app", {}, [theme])}>
      <Suspense fallback={<PageLoader />}>
        {user && <Header />}
        <Sidebar />
        <div className="content-page">
          <AppRouter />
        </div>
      </Suspense>
    </div>
  );
};

export default App;
