import graphqlFetcher from "shared/api/graphqlGithubFetcher";

import { useQuery } from "react-query";
import { USER_REPOS_QUERY } from "./query";
import { transformUserRepositoriesResponse } from "../helpers";

interface UserReposVariables {
  username?: string;
  after?: string | null;
}

const getUserRepositories = ({ username, after }: UserReposVariables) => {
  return useQuery(
    ["userRepos", username, after],
    async () => {
      const response = await graphqlFetcher(USER_REPOS_QUERY, {
        username: username,
        after: after,
      });
      return transformUserRepositoriesResponse(response);
    },
    {
      enabled: !!username,
      staleTime: 1000 * 60 * 5,
      refetchOnMount: false,
      keepPreviousData: true,
    }
  );
};

export default getUserRepositories;
