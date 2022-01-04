export type User = {
  firstName: string;
  lastName: string;
  email?: string;
  gender?: "MALE" | "FEMALE" | "OTHER";
  username?: string;
  objectId?: string;
  id?: string;
  mobileNumber?: string;
  totalRewardPoints?: number;
};
