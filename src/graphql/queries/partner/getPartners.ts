import { gql } from '@apollo/client';
import { ROLES } from '../../../constants/Parse';

export function getSubscriptionSubquery(currentUserId: string) {
  return {
    objectId: {
      inQueryKey: {
        key: 'partner.objectId',
        query: {
          className: 'ServiceSubscription',
          where: {
            society: {
              inQueryKey: {
                key: 'society.objectId',
                query: {
                  className: 'SocietyMember',
                  where: {
                    type: { equalTo: ROLES.INSPACCO_KAM },
                    member: { equalTo: currentUserId },
                  },
                },
              },
            },
          },
        },
      },
    },
  };
}

export const GET_PARTNERS = gql`
  query getPartners(
    $term: String = ""
    $subscriptionSubquery: PartnerWhereInput = {}
  ) {
    partners(
      where: {
        AND: [
          { name: { matchesRegex: $term, options: "i" } }
          $subscriptionSubquery
        ]
      }
      order: name_ASC
      first: 2147483647
    ) {
      edges {
        node {
          address
          gstNumber
          id
          name
          objectId
          pan
          status
        }
      }
    }
  }
`;
