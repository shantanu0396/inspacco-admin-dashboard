import { gql } from '@apollo/client';

export const UPDATE_SOCIETY = gql`
  mutation updateSociety(
    $id: ID!
    $name: String!
    $area: String
    $city: String
    $pincode: Float
    $addressLine1: String
    $addressLine2: String
    $state: String
    $status: String
  ) {
    updateSociety(
      input: {
        id: $id
        fields: {
          name: $name
          area: $area
          city: $city
          status: $status
          pincode: $pincode
          addressLine1: $addressLine1
          addressLine2: $addressLine2
          state: $state
        }
      }
    ) {
      society {
        id
        objectId
        displayId
        name
        area
        city
        pincode
        addressLine1
        addressLine2
        state
        status
      }
    }
  }
`;
