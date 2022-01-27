import { gql } from '@apollo/client';

export const UPDATE_TASK = gql`
  mutation updateTask(
    $taskId: ID!
    $summary: String!
    $description: String!
    $rewardPoints: Float!
    $frequency: String!
    $dayInWeek: Float
    $dayInMonth: Float
    $status: String! = "Active"
  ) {
    updateTask(
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
      task {
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
