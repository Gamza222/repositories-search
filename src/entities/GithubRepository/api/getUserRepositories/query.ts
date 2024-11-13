import { gql } from "graphql-request";
import { REPOSITORY_FRAGMENT } from "../fragments";

export const USER_REPOS_QUERY = gql`
  ${REPOSITORY_FRAGMENT}
  query ($username: String!, $after: String) {
    user(login: $username) {
      repositories(first: 10, after: $after) {
        totalCount
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
  }
`;
