import { gql } from '@apollo/client';

export const UPDATE_PARTNER = gql`
  mutation updatePartnerMutation(
    $id: ID!
    $address: Object
    $gstNumber: String
    $name: String
    $pan: String
    $status: String
  ) {
    updatePartner(
      input: {
        id: $id
        clientMutationId: "UpdatePartner"
        fields: {
          gstNumber: $gstNumber
          name: $name
          address: $address
          pan: $pan
          status: $status
        }
      }
    ) {
      partner {
        name
        id
        objectId
      }
    }
  }
`;
