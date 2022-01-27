import { gql } from '@apollo/client';

export const CREATE_TASK_USING_CLOUD_CODE = gql`
  mutation createTask($params: Object!) {
    callCloudCode(input: { functionName: createTask, params: $params }) {
      result
    }
  }
`;
