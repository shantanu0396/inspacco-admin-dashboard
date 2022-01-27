import { gql } from '@apollo/client';
import { ROLES } from '../../../constants/Parse';

export function getSocietyMemberSubquery(currentUserId: string) {
  return {
    objectId: {
      inQueryKey: {
        key: 'society.objectId',
        query: {
          className: 'SocietyMember',
          where: {
            AND: [
              { member: { equalTo: currentUserId } },
              { type: { equalTo: ROLES.INSPACCO_KAM } },
            ],
          },
        },
      },
    },
  };
}

export const GET_SOCIETIES = gql`
  query societies($q: String = "", $memberSubquery: SocietyWhereInput = {}) {
    societies(
      where: {
        AND: [{ name: { matchesRegex: $q, options: "i" } }, $memberSubquery]
      }
      order: name_ASC
      first: 2147483647
    ) {
      edges {
        node {
          id
          objectId
          name
          addressLine1
          addressLine2
          city
          area
          pincode
          state
          status
        }
      }
    }
  }
`;
