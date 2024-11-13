import React from "react";
import * as cls from "./Avatar.module.scss";
import { classNames } from "shared/lib/classNames/classNames";
import { getGithubUserData, useGithubLoginStore } from "features/GithubLogin";

interface AvatarProps {
  className?: string;
  photo?: string;
}

const Avatar = (props: AvatarProps) => {
  const { className, photo } = props;

  const user = useGithubLoginStore(getGithubUserData);

  const imgUrl = photo ? photo : user?.avatar_url;

  return (
    <div className={classNames(cls.Avatar, {}, [className])}>
      <img className={cls.Avatar__pic} src={imgUrl} alt="avatar-pic" />
    </div>
  );
};

export default Avatar;
