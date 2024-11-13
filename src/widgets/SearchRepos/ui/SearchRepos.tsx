import React from "react";
import * as cls from "./SearchRepos.module.scss";
import { Mods, classNames } from "shared/lib/classNames/classNames";
import SearchReposModal from "./SearchReposModal/SearchReposModal";
import SearchReposButton from "./SearchReposButton/SearchReposButton";
import { useSearchReposStore } from "../model/store/searchReposStore";
import { getSearchReposModalState } from "../model/selectors/searchReposSelectors";

interface SearchReposProps {
  className?: string;
}

const SearchRepos = (props: SearchReposProps) => {
  const { className } = props;

  const modalState = useSearchReposStore(getSearchReposModalState);

  const overlayMods: Mods = {
    [cls.overlayOpened]: modalState,
    [cls.overlayClosed]: !modalState,
  };

  return (
    <div className={classNames(cls.SearchRepos, {}, [className])}>
      <SearchReposButton className={cls.Button} />
      <SearchReposModal className={cls.Modal} />
      <span className={classNames(cls.ModalOverlay, { ...overlayMods }, [])} />
    </div>
  );
};

export default SearchRepos;
