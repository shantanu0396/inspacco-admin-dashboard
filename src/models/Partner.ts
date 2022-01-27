import { compact } from 'lodash';

export interface IPartnerAddress {
  addressLine1?: string;
  addressLine2?: string;
  area?: string;
  city?: string;
  state?: string;
  pincode?: string;
}

export interface IPartner {
  id?: string;
  objectId?: string;
  name: string;
  status: string;
  address?: IPartnerAddress;
  gstNumber?: string;
  pan?: string;
  services?: any[];
}
