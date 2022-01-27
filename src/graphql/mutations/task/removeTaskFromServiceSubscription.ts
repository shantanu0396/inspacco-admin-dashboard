import { gql } from '@apollo/client';

export const REMOVE_TASK_FROM_SERVICE_SUBSCRIPTION = gql`
  mutation removeTask($serviceSubscriptionId: ID!, $taskId: ID!) {
    updateServiceSubscription(
      input: {
        id: $serviceSubscriptionId
        fields: { tasks: { remove: [$taskId] } }
      }
    ) {
      serviceSubscription {
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
              startDate
              endDate
              status
            }
          }
        }
      }
    }
  }
`;
