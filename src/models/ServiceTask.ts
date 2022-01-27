export interface IServiceTask {
  id?: string;
  objectId?: string;
  summary: string;
  description?: string;
  rewardPoints?: number;
  frequency: 'DAILY' | 'WEEKLY' | 'MONTHLY' | 'ONCE';
  dayInWeek?: number;
  dayInMonth?: number;
  status: 'Active' | 'Inactive';
}
