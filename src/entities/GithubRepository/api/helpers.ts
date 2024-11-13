import { Repository } from "../model/types/types";

export interface TransformedData {
  repositoryCount: number;
  repositories: Repository[];
  pageInfo: {
    endCursor: string;
    hasNextPage: boolean;
  };
}

export const transformSearchRepositoriesResponse = (
  data: any
): TransformedData => {
  const repositories = data.search.edges.map(
    (edge: any) => new Repository(edge.node)
  );

  return {
    repositoryCount: data.search.repositoryCount,
    repositories,
    pageInfo: data.search.pageInfo,
  };
};

export const transformUserRepositoriesResponse = (
  data: any
): TransformedData => {
  const repositories = data.user.repositories.edges.map(
    (edge: any) => new Repository(edge.node)
  );

  return {
    repositoryCount: data.user.repositories.totalCount,
    repositories,
    pageInfo: data.user.repositories.pageInfo,
  };
};
