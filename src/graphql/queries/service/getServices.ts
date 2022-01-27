import { gql } from '@apollo/client';

export const GET_SERVICES = gql`
  query getServices($term: String = "") {
    services(
      where: { name: { matchesRegex: $term, options: "i" } }
      order: name_ASC
    ) {
      edges {
        node {
          id
          objectId
          name
          description
          requireAttendance
          status
        }
      }
    }
  }
`;
