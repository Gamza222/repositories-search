import React, { memo } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import * as cls from "./Loader.module.scss";

interface LoaderProps {
  className?: string;
}

const Loader = memo(({ className }: LoaderProps) => {
  return <div className={classNames(cls.Loader, {}, [className])} />;
});

export default Loader;
