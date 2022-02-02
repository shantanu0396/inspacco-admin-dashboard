import { gql } from '@apollo/client';

export const CREATE_USER = gql`
  mutation callCloudeCode($params: Object!) {
    callCloudCode(input: { functionName: createUser, params: $params }) {
      result
    }
  }
`;
