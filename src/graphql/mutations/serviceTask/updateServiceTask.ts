import { gql } from '@apollo/client';

export const UPDATE_SERVICE_TASK = gql`
  mutation updateServiceTask(
    $taskId: ID!
    $summary: String!
    $description: String!
    $rewardPoints: Float!
    $frequency: String!
    $dayInWeek: Float
    $dayInMonth: Float
    $status: String! = "Active"
  ) {
    updateServiceTask(
      input: {
        id: $taskId
        fields: {
          summary: $summary
          description: $description
          rewardPoints: $rewardPoints
          frequency: $frequency
          dayInWeek: $dayInWeek
          dayInMonth: $dayInMonth
          status: $status
        }
      }
    ) {
      serviceTask {
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
  }
`;
