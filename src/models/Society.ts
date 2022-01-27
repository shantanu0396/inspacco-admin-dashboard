export default interface ISociety {
  id?: string;
  objectId?: string;
  name: string;
  addressLine1?: string;
  addressLine2?: string;
  city?: string;
  area?: string;
  pincode?: string;
  state?: string;
  status?: 'Active' | 'Inactive';
  amenities?: string[];
}
