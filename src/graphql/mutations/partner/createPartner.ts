import { gql } from '@apollo/client';

export const CREATE_PARTNER = gql`
  mutation CreatePartner(
    $fields: CreatePartnerFieldsInput = {
      name: ""
      status: "Active"
      address: {
        addressLine1: ""
        addressLine2: ""
        area: ""
        city: ""
        state: ""
        pincode: ""
      }
      pan: ""
      gstNumber: ""
    }
  ) {
    createPartner(
      input: { fields: $fields, clientMutationId: "CreatePartner" }
    ) {
      clientMutationId
      partner {
        address
        gstNumber
        id
        name
        objectId
        pan
      }
    }
  }
`;

/*
{
    "fields": {
      "status": "Active",
      "name":"Diggi Net Services",
      "address": {
          "addressLine1":"New Address1",
          "addressLine2":"New Address2",
          "area":"Pune",
          "city":"Pune",
          "state":"Maharashta",
          "pincode":"441100"
    }
    }
  }
 */
