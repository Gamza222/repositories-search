import { memo, useRef, useState, forwardRef, useEffect } from "react";
import * as cls from "./SearchInput.module.scss";
import { Mods, classNames } from "shared/lib/classNames/classNames";

import { IoIosSearch } from "react-icons/io";
import { MdCancel } from "react-icons/md";

interface SearchInputProps {
  className?: string;
  inputData: string | undefined;
  focused: boolean;
  clearInputData: () => void;
  setInputData: (updatedInput: string | undefined) => void;
}

const SearchInput = memo(
  forwardRef<HTMLDivElement, SearchInputProps>(
    (props: SearchInputProps, forwardedRef = null) => {
      const { className, inputData, focused, clearInputData, setInputData } =
        props;
      const [inputFocused, setInputFocused] = useState(false);
      const inputRef = useRef<HTMLInputElement>(null);

      const focusInput = () => {
        if (inputRef.current) {
          inputRef.current.focus();
        }
      };

      const onFocus = () => {
        setInputFocused(true);
      };
      const onBlur = () => {
        setInputFocused(false);
      };

      const onCLearInputData = () => {
        focusInput();
        clearInputData();
      };

      useEffect(() => {
        focusInput();
      }, [focused]);

      const SearchInputMods: Mods = {
        [cls.SeachInputFocused]: inputFocused,
      };

      const CancelButtonMods: Mods = {
        [cls.CancelButtonHidden]: !inputData,
        [cls.CancelButtonVisible]: inputData,
      };

      return (
        <div
          className={classNames(cls.SearchInput, { ...SearchInputMods }, [
            className,
          ])}
          ref={forwardedRef}
        >
          <span className={cls.SearchLogo}>
            <IoIosSearch className={cls.SearchLogo__pic} />
          </span>
          <input
            className={cls.SearchInput__inputField}
            type="text"
            ref={inputRef}
            value={inputData}
            onChange={(e) => setInputData(e.target.value)}
            onFocus={onFocus}
            onBlur={onBlur}
          />
          <button
            className={classNames(
              cls.CancelButton,
              { ...CancelButtonMods },
              []
            )}
            onClick={onCLearInputData}
          >
            <MdCancel className={cls.CancelButton__pic} />
          </button>
        </div>
      );
    }
  )
);

export default SearchInput;
