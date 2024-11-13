import React, { useCallback } from "react";
import { useTranslation } from "react-i18next";
import { FiLogOut } from "react-icons/fi";

import Button, { ButtonSize, ButtonTheme } from "shared/ui/Button/Button";

import { clearGithubUserData, useGithubLoginStore } from "features/GithubLogin";
import { useNavigate } from "react-router-dom";
import { loginRouteConfig } from "shared/config/loginRouteConfig/loginRouteConfig";

interface LogoutButtonProps {
  className?: string;
}

const LogoutButton = (props: LogoutButtonProps) => {
  const { t } = useTranslation();
  const { className } = props;
  const navigate = useNavigate();

  const clearUser = useGithubLoginStore(clearGithubUserData);

  const logout = useCallback(() => {
    clearUser();
    navigate(loginRouteConfig.login.path || "");
  }, [clearUser, navigate]);

  return (
    <Button onClick={logout} size={ButtonSize.M} theme={ButtonTheme.USUAL}>
      <FiLogOut />
      {t("Sign out")}
    </Button>
  );
};

export default LogoutButton;
