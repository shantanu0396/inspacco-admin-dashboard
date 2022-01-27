import { gql } from '@apollo/client';

export const CREATE_SERVICE = gql`
  mutation CreateService(
    $fields: CreateServiceFieldsInput = {
      description: ""
      name: ""
      requireAttendance: false
      status: "Active"
    }
  ) {
    createService(input: { fields: $fields }) {
      service {
        description
        id
        name
        objectId
        requireAttendance
        status
      }
    }
  }
`;
