import { gql } from '@apollo/client';

export const GET_SERVICE_TASKS = gql`
  query getServiceTasks($serviceId: ID!) {
    service(id: $serviceId) {
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
`;