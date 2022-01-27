import { gql } from '@apollo/client';

export const CREATE_SOCEITY = gql`
  mutation createSociety(
    $name: String!
    $area: String
    $city: String
    $pincode: Float
    $addressLine1: String
    $addressLine2: String
    $state: String
  ) {
    createSociety(
      input: {
        fields: {
          name: $name
          area: $area
          city: $city
          status: "Active"
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
