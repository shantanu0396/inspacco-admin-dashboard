import { DocumentList } from './DocumentList';
import { User } from './User';

export interface IRole extends DocumentList<'users', User> {
  id?: string;
  objectId?: string;
  name: string;
  roles?: IRole[];
}
