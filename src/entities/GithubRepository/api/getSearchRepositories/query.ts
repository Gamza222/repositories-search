import { gql } from "graphql-request";
import { REPOSITORY_FRAGMENT } from "../fragments";

export const SEARCH_REPOS_QUERY = gql`
  ${REPOSITORY_FRAGMENT}
  query ($query: String!, $after: String) {
    search(query: $query, type: REPOSITORY, first: 10, after: $after) {
      repositoryCount
      edges {
        node {
          ...RepositoryFields
        }
      }
      pageInfo {
        endCursor
        hasNextPage
      }
    }
  }
`;
