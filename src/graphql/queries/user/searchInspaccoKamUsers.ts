import { gql } from '@apollo/client';

export const SEARCH_KAM_USER = gql`
  query searchInspaccoKamUsers($q: String! = "") {
    roles(
      where: { name: { equalTo: "INSPACCO_KAM" }, users: { exists: true } }
    ) {
      edges {
        node {
          name
          users(
            where: {
              AND: [
                {
                  OR: [
                    { firstName: { matchesRegex: $q, options: "i" } }
                    { lastName: { matchesRegex: $q, options: "i" } }
                    { mobileNumber: { matchesRegex: $q, options: "i" } }
                  ]
                }
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
      }
    }
  }
`;
