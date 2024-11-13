import { memo, type ButtonHTMLAttributes, type PropsWithChildren } from "react";
import { type Mods, classNames } from "shared/lib/classNames/classNames";
import * as cls from "./Button.module.scss";

export enum ButtonTheme {
  CLEAR = "clear",
  USUAL = "usual",
  BORDER = "border",
  FILLED = "filled",
}

export enum ButtonSize {
  M = "size_m",
  L = "size_l",
  XL = "size_xl",
}

interface ButtonProps
  extends PropsWithChildren,
    ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  theme?: ButtonTheme;
  size?: ButtonSize;
  disabled?: boolean;
}

const Button = memo((props: ButtonProps) => {
  const {
    className,
    children,
    theme = ButtonTheme.CLEAR,
    disabled,
    size = ButtonSize.M,
    ...otherProps
  } = props;

  const mods: Mods = {};

  return (
    <button
      type="button"
      className={classNames(cls.Button, mods, [
        className,
        cls[size],
        cls[theme],
      ])}
      disabled={disabled}
      {...otherProps}
    >
      {children}
    </button>
  );
});

export default Button;
