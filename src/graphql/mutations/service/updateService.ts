import { gql } from '@apollo/client';

export const UPDATE_SERVICE = gql`
  mutation updateServiceMutation(
    $id: ID!
    $name: String
    $description: String
    $status: String
    $requireAttendance: Boolean
  ) {
    updateService(
      input: {
        id: $id
        fields: {
          name: $name
          description: $description
          status: $status
          requireAttendance: $requireAttendance
        }
      }
    ) {
      service {
        name
        id
        objectId
      }
    }
  }
`;
