import { gql } from '@apollo/client';

export const GET_AMENITIES = gql`
  query getAmenities($q: String = "") {
    lookups(
      where: {
        value: { matchesRegex: $q, options: "i" }
        type: { equalTo: "AMENITY" }
      }
    ) {
      edges {
        node {
          id
          value
          objectId
          type
        }
      }
    }
  }
`;
