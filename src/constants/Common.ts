export enum STATUS {
  active = 'Active',
  inactive = 'Inactive',
}
export const TASK_ACTIVITY_STATUS = [
  { label: 'Open', value: 'OPEN' },
  { label: 'In Progress', value: 'IN_PROGRESS' },
  { label: 'Done', value: 'COMPLETED' },
];
export const GENDER = [
  { label: 'Male', value: 'MALE' },
  { label: 'Female', value: 'FEMALE' },
  { label: 'Not Specified', value: 'OTHER' },
];

export const INCIDENT_STATUS = [
  { label: 'Open', value: 'OPEN' },
  { label: 'In Progress', value: 'IN_PROGRESS' },
  { label: 'Resolved', value: 'RESOLVED' },
];

export const SERVICE_REQUEST_STATUS = [
  { label: 'Open', value: 'OPEN' },
  { label: 'In Progress', value: 'IN_PROGRESS' },
  { label: 'Cancelled', value: 'CANCELLED' },
  { label: 'Closed', value: 'CLOSED' },
];

export const SERVICE_QUOTATION_STATUS = [
  { label: 'Open', value: 'OPEN' },
  { label: 'Accepted', value: 'ACCEPTED' },
  { label: 'Rejected', value: 'REJECTED' },
];

export const SERVICE_ICON = {
  Security: 'security',
  Gardening: 'gardening',
  'Society Manager': 'society-manager',
  Accountant: 'accountant',
  'Swimming Pool Maintenance': 'swimming-pool-maintenance',
  'Pest Control': 'pest-control',
  Sanitization: null,
  'Tank Cleaning Service': 'tank-cleaning',
  'CCTV AMC': 'cctv-amc',
  'Fire AMC': 'fire-amc',
  'Gym AMC': 'gym-amc',
  'Lift AMC': 'lift-amc',
  'AC AMC': 'ac-amc',
  'Generator AMC': 'generator-amc',
  'STP and WTP AMC': null,
  'STP and WTP Operator': null,
  'Solar AMC': 'solar-amc',
  'Civil Work': 'civil',
  'Fabrication Work': 'fabrication',
  Painting: 'painting',
  'Waterproofing Work': 'waterproofing',
  'Waste Management': 'waste-management',
  Housekeeping: 'housekeeping',
  Waterproofing: 'waterproofing',
  Fabrication: 'fabrication',
  'CCTV Installation': 'cctv-amc',
  'Fire System Work': 'fire-amc',
  'Paitning Work': 'painting',
};
