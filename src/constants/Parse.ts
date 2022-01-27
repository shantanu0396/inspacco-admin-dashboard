//import environment from './environment';

// export const host = environment.host;
// export const serverURL = environment.serverURL;
// export const graphqlURL = environment.graphqlURL;
export const appId = 'inspacco-parse-server';

export enum ROLES {
  ROOT = 'ROOT',
  INSPACCO_ADMIN = 'INSPACCO_ADMIN',
  INSPACCO_KAM = 'INSPACCO_KAM',
  SOCIETY_ADMIN = 'SOCIETY_ADMIN',
  SOCIETY_MANAGER = 'SOCIETY_MANAGER',
  PARTNER_ADMIN = 'PARTNER_ADMIN',
}

export const ROLES_PRIORITY = {
  ROOT: 1,
  INSPACCO_ADMIN: 2,
  INSPACCO_KAM: 3,
  SOCIETY_ADMIN: 4,
  SOCIETY_MANAGER: 5,
  PARTNER_ADMIN: 6,
};

export enum PARSE_CONFIGS {
  MAX_PREV_DAYS_ATTENDANCE_ALLOWED = 'MAX_PREV_DAYS_ATTENDANCE_ALLOWED',
  MAX_PREV_DAYS_TASK_ALLOWED = 'MAX_PREV_DAYS_TASK_ALLOWED',
}

export const ERROR_CODES = {
  119: {
    title: 'Error',
    msg: 'Error processing your request. Permission denied',
  },
};
