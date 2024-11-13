import React, { useCallback, useEffect, useRef } from "react";
import * as cls from "./SearchReposModal.module.scss";
import { Mods, classNames } from "shared/lib/classNames/classNames";
import { useSearchReposStore } from "../../model/store/searchReposStore";
import {
  clearSearchReposInputData,
  getSearchReposInputData,
  getSearchReposModalState,
  getSearchTriggered,
  setSearchReposInputData,
  setSearchReposModalClose,
} from "../../model/selectors/searchReposSelectors";
import { useClickOutside } from "shared/lib/hooks/useClickOutside/useClickOutside";

import { SearchInput } from "widgets/SearchInput";

import SearchButton from "./SearchButton/SearchButton";
import SearchReposList from "./SearchReposList/SearchReposList";

interface SearchReposModalProps {
  className?: string;
}

const SearchReposModal = (props: SearchReposModalProps) => {
  const { className } = props;

  const inputData: string | undefined = useSearchReposStore(
    getSearchReposInputData
  );
  const wrapperRef = useRef<HTMLDivElement>(null);

  const modalState = useSearchReposStore(getSearchReposModalState);
  const searchTriggered = useSearchReposStore(getSearchTriggered);

  const setInputData = useSearchReposStore(setSearchReposInputData);
  const clearInputData = useSearchReposStore(clearSearchReposInputData);
  const closeModal = useSearchReposStore(setSearchReposModalClose);

  useClickOutside(wrapperRef, () => closeModal());

  useEffect(() => {
    if (searchTriggered) {
      closeModal();
    }
  }, [searchTriggered]);

  const modalMods: Mods = {
    [cls.SearchReposModalOpened]: modalState,
    [cls.SearchReposModalClosed]: !modalState,
  };

  return (
    <form
      className={classNames(cls.SearchReposModal, { ...modalMods }, [
        className,
      ])}
      onSubmit={(e) => e.preventDefault()}
    >
      <div className={cls.SearchReposModal__wrapper} ref={wrapperRef}>
        <SearchInput
          inputData={inputData}
          focused={modalState}
          setInputData={setInputData}
          clearInputData={clearInputData}
        />
        <ul className={cls.SearchReposModal__nav}>
          <SearchButton />
          <SearchReposList />
        </ul>
      </div>
    </form>
  );
};

export default SearchReposModal;
