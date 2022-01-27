import { IServiceTask } from './ServiceTask';

export interface IService {
  id?: string;
  objectId?: string;
  name: string;
  description?: string;
  requireAttendance?: boolean;
  serviceKey?: string;
  isPopular?: boolean;
  inclusionText?: string;
  qualityAssuranceText?: string;
  visibleTo?: string;
  status?: 'Active' | 'Inactive';
  tasks?: {
    edges: {
      node: IServiceTask;
    }[];
  };
  requirementForm?: string;
}
