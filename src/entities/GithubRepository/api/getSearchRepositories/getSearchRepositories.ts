import { useQuery } from "react-query";
import { SEARCH_REPOS_QUERY } from "./query";

import graphqlFetcher from "shared/api/graphqlGithubFetcher";
import { transformSearchRepositoriesResponse } from "../helpers";

interface SearchReposVariables {
  query?: string;
  searchTriggered: boolean;
  disableSearchTriggered: () => void;
  after?: string;
}

const getSearchRepositories = ({
  query,
  searchTriggered,
  disableSearchTriggered,
  after,
}: SearchReposVariables) => {
  return useQuery(
    ["searchRepos", query, after],
    async () => {
      const response = await graphqlFetcher(SEARCH_REPOS_QUERY, {
        query,
        after: after || undefined,
      });
      return transformSearchRepositoriesResponse(response);
    },
    {
      onSuccess: disableSearchTriggered,
      onError: disableSearchTriggered,
      staleTime: 1000 * 60 * 5,
      keepPreviousData: true,
      refetchOnMount: false,
      enabled: !!query && searchTriggered,
    }
  );
};

export default getSearchRepositories;
