import { User } from "./User";

export type CurrentUser = {
  user?: User;
  sessionToken?: string;
};

type setFunction = (key: keyof CurrentUserContext, value: any) => void;

export type CurrentUserContext = {
  user: CurrentUser;
  roles: string[];
  activeRole: string;
  activeAccountId?: string;
  set: setFunction;
  clear: () => void;
};
