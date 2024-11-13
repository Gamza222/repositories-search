import React from "react";
import * as cls from "./GithubLoginPage.module.scss";
import { classNames } from "shared/lib/classNames/classNames";
import { useTranslation } from "react-i18next";
import Button from "shared/ui/Button/Button";

interface GithubLoginProps {
  className?: string;
}

const GithubLoginPage = (props: GithubLoginProps) => {
  const { t } = useTranslation("login-page");
  const { className } = props;

  const clientId = process.env.REACT_APP_GITHUB_CLIENT_ID;
  const redirectUri = __IS_DEV__
    ? process.env.REACT_APP_GITHUB_REDIRECT_URI_DEV
    : process.env.REACT_APP_GITHUB_REDIRECT_URI;

  const handleLoginClick = () => {
    const authUrl = `https://github.com/login/oauth/authorize?client_id=${clientId}&redirect_uri=${redirectUri}&scope=user&response_type=token`;
    window.location.href = authUrl; // Redirect to GitHub OAuth login page
  };

  return (
    <div className={classNames(cls.GithubLoginPage, {}, [className])}>
      <Button onClick={handleLoginClick}>{t("Log in with Github")}</Button>
    </div>
  );
};

export default GithubLoginPage;
