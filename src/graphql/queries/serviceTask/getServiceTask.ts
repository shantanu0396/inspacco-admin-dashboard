import { gql } from '@apollo/client';

export const GET_SERVICE_TASK = gql`
  query getServiceTask($taskId: ID!) {
    serviceTask(id: $taskId) {
      id
      objectId
      summary
      description
      rewardPoints
      frequency
      dayInWeek
      dayInMonth
      status
    }
  }
`;
