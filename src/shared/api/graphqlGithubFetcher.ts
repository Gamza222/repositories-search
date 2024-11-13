import { Variables, request } from "graphql-request";

const graphqlFetcher = async <
  TData = any,
  TVariables extends object = Variables,
>(
  query: string,
  variables?: TVariables
): Promise<TData> => {
  const githubLoginStore = localStorage.getItem("GithubLoginStore");
  const parsedData = githubLoginStore ? JSON.parse(githubLoginStore) : null;
  const token = parsedData?.state?.user?.token || null;
  return request<TData>("https://api.github.com/graphql", query, variables, {
    Authorization: `Bearer ${token}`,
  });
};

export default graphqlFetcher;
