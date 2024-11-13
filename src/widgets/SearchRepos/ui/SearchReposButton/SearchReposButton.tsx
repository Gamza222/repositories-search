import * as cls from "./SearchReposButton.module.scss";
import { classNames } from "shared/lib/classNames/classNames";

import { useSearchReposStore } from "widgets/SearchRepos/model/store/searchReposStore";
import {
  getSearchReposModalState,
  getSearchTriggered,
  setSearchReposModalOpen,
} from "widgets/SearchRepos/model/selectors/searchReposSelectors";

import Button, { ButtonTheme } from "shared/ui/Button/Button";
import SearchReposButtonText from "./SearchReposButtonText/SearchReposButtonText";

import { IoIosSearch } from "react-icons/io";
import { memo, useEffect } from "react";

interface SearchReposButtonProps {
  className?: string;
}

const SearchReposButton = memo((props: SearchReposButtonProps) => {
  const { className } = props;

  const openModal = useSearchReposStore(setSearchReposModalOpen);
  const modalState = useSearchReposStore(getSearchReposModalState);
  const searchTriggered = useSearchReposStore(getSearchTriggered);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "/" || event.keyCode === 191) {
        if (modalState) {
          return;
        } else {
          event.preventDefault();
          openModal();
        }
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [openModal, modalState]);

  return (
    <Button
      theme={ButtonTheme.BORDER}
      className={classNames(cls.SearchReposButton, {}, [className])}
      onClick={openModal}
      disabled={searchTriggered}
    >
      <span className={cls.SearchLogo}>
        <IoIosSearch className={cls.SearchLogo__pic} />
      </span>
      <SearchReposButtonText />
    </Button>
  );
});

export default SearchReposButton;
