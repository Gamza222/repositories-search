import { User } from "features/GithubLogin/model/types/types";
import { useQuery } from "react-query";

export const fetchGithubUserData = (accessToken: string) => {
  return useQuery<User, Error>(
    ["githubUserData", accessToken],
    async (): Promise<User> => {
      const response = await fetch("https://api.github.com/user", {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
      const data = await response.json();
      return {
        id: data.id || "",
        avatar_url: data.avatar_url || undefined,
        name: data.name || undefined,
        login: data.login,
        token: accessToken,
      };
    }
  );
};
