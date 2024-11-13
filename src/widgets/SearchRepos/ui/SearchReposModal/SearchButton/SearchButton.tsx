import React, { useCallback } from "react";
import * as cls from "./SearchButton.module.scss";
import { Mods, classNames } from "shared/lib/classNames/classNames";
import { useTranslation } from "react-i18next";

import Button, { ButtonTheme } from "shared/ui/Button/Button";

import { IoIosSearch } from "react-icons/io";
import Text, { TextColor, TextSize } from "shared/ui/Text/Text";
import { useSearchReposStore } from "widgets/SearchRepos/model/store/searchReposStore";
import {
  getSearchReposInputData,
  getSearchTriggered,
  useEnableSearchTriggered,
} from "widgets/SearchRepos/model/selectors/searchReposSelectors";
import { useNavigate } from "react-router-dom";
import { AppRoutes, RoutePath } from "shared/config/routeConfig/routeConfig";

interface SearchButtonProps {
  className?: string;
}

const SearchButton = (props: SearchButtonProps) => {
  const { t } = useTranslation();
  const { className } = props;
  const navigate = useNavigate();

  const inputText = useSearchReposStore(getSearchReposInputData);

  const enableSearchTriggered = useSearchReposStore(useEnableSearchTriggered);
  const searchTriggered = useSearchReposStore(getSearchTriggered);

  const onSearch = useCallback(() => {
    enableSearchTriggered();
    navigate(RoutePath[AppRoutes.SEARCH_REPOSITORIES]);
  }, [searchTriggered, enableSearchTriggered, navigate]);

  const SearchButtonMods: Mods = {
    [cls.SearchButtonShow]: inputText,
    [cls.SearchButtonHide]: !inputText,
  };

  return (
    <li
      className={classNames(cls.SearchButton, { ...SearchButtonMods }, [
        className,
      ])}
    >
      <Button
        onClick={onSearch}
        theme={ButtonTheme.USUAL}
        className={cls.Button}
        disabled={searchTriggered}
      >
        <div className={cls.Button__left}>
          <IoIosSearch className={cls.SearchPic} />
          <Text
            color={TextColor.PRIMARY}
            size={TextSize.M}
            text={inputText}
            className={cls.Button__left__text}
          />
        </div>
        <Text
          color={TextColor.GRAY}
          text={t("Search all of GitHub")}
          className={cls.Button__rightText}
        />
      </Button>
    </li>
  );
};

export default SearchButton;
