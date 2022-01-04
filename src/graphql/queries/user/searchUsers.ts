import { gql } from '@apollo/client';

export const SEARCH_USER = gql`
  query searchUsers($q: String = "") {
    users(
      where: {
        OR: [
          { firstName: { matchesRegex: $q, options: "i" } }
          { lastName: { matchesRegex: $q, options: "i" } }
          { mobileNumber: { matchesRegex: $q, options: "i" } }
        ]
      }
    ) {
      edges {
        node {
          id
          objectId
          firstName
          lastName
          mobileNumber
        }
      }
    }
  }
`;
