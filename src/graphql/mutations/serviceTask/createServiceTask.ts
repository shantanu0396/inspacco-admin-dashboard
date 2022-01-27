import { gql } from '@apollo/client';

export const CREATE_SERVICE_TASK = gql`
  mutation createServiceTask(
    $serviceId: ID!
    $summary: String!
    $description: String
    $rewardPoints: Float
    $frequency: String!
    $dayInWeek: Float
    $dayInMonth: Float
    $status: String! = "Active"
  ) {
    updateService(
      input: {
        id: $serviceId
        fields: {
          tasks: {
            createAndAdd: {
              summary: $summary
              description: $description
              rewardPoints: $rewardPoints
              frequency: $frequency
              dayInWeek: $dayInWeek
              dayInMonth: $dayInMonth
              status: $status
            }
          }
        }
      }
    ) {
      service {
        id
        objectId
        tasks {
          edges {
            node {
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
      }
    }
  }
`;
