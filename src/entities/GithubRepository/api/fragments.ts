import { gql } from "graphql-request";

export const REPOSITORY_FRAGMENT = gql`
  fragment RepositoryFields on Repository {
    id
    name
    description
    stargazerCount
    url
    pushedAt
    owner {
      login
      avatarUrl
      url
    }
    languages(first: 10) {
      edges {
        node {
          name
        }
      }
    }
  }
`;
