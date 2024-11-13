import { memo } from "react";
import * as cls from "./Text.module.scss";
import { classNames } from "shared/lib/classNames/classNames";

export enum TextColor {
  PRIMARY = "primary",
  BLUE = "blue",
  GRAY = "gray",
  RED = "red",
}
export enum TextSize {
  M = "size_m",
  L = "size_l",
  XL = "size_xl",
}

interface TextProps {
  className?: string;
  color?: TextColor;
  size?: TextSize;
  text?: string;
}

const Text = memo((props: TextProps) => {
  const {
    className,
    size = TextSize.M,
    color = TextColor.PRIMARY,
    text = "",
  } = props;
  return (
    <p className={classNames(cls.Text, {}, [className, cls[size], cls[color]])}>
      {text}
    </p>
  );
});

export default Text;
