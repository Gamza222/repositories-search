import * as cls from "./SearchReposButtonText.module.scss";
import { classNames } from "shared/lib/classNames/classNames";
import { useTranslation } from "react-i18next";

import Text, { TextColor, TextSize } from "shared/ui/Text/Text";
import { useSearchReposStore } from "widgets/SearchRepos/model/store/searchReposStore";
import { getSearchReposInputData } from "widgets/SearchRepos/model/selectors/searchReposSelectors";

interface SearchReposButtonTextProps {
  className?: string;
}

const SearchReposButtonText = (props: SearchReposButtonTextProps) => {
  const { t } = useTranslation();
  const { className } = props;

  const searchInputText = useSearchReposStore(getSearchReposInputData);

  return (
    <div className={classNames(cls.SearchReposButtonText, {}, [className])}>
      {searchInputText ? (
        <Text color={TextColor.GRAY} size={TextSize.M} text={searchInputText} />
      ) : (
        <>
          <Text
            color={TextColor.GRAY}
            size={TextSize.M}
            text={`${t("Type")} `}
          />
          <span className={cls.SearchReposButtonText__dash}> / </span>
          <Text
            color={TextColor.GRAY}
            size={TextSize.M}
            text={` ${t("to search")}`}
          />
        </>
      )}
    </div>
  );
};

export default SearchReposButtonText;
