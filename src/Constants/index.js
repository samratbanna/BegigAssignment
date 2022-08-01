import {Platform} from 'react-native';
import moment from 'moment';
import Images from '../Images';
import colors from '../Themes/Colors';

export const isAndroid = Platform.OS === 'android' ? true : false;
export const isIos = !isAndroid;

export const APP_STATE = {
  PUBLIC: 'PUBLIC_APP',
  PRIVATE: 'MAIN_APP',
  SIGN_UP: 'SIGN_UP',
  AUTH: 'CHECKING_LOGIN',
  UNKNOWN: 'UNKNOWN',
  APP_INTRO: 'APPiNTRO',
  PROFILE_ERROR: 'ERROR',
};

export const STATUS = {
  SUCCESS: 'SUCCESS',
  NOT_STARTED: 'NOT_STARTED',
  FETCHING: 'FETCHING',
  FAILED: 'FAILED',
};

export const SERVER_DATE_FORMAT = 'YYYY-MM-DD';
export const SUPPORT_CONTACT = '9785718555';

export const ERROR_MESSAGES = {
  NO_INTERNET:
    'LOOKS LIKE YOU ARE NOT CONNECTED TO INTERNET, PLEASE CONNECT AND TRY AGAIN',
  NOT_AUTHORIZED:
    'SORRY, YOU ARE NOT AUTHORIZED TO USE THIS APPLICATION, PLEASE LOGOUT AND TRY AGAIN WITH DIFFERENT CREDENTIALS',
  NULL: '',
  SERVER_ERROR:
    'LOOKS LIKE SOMETHING IS NOT WORKING..PLEASE BE PATIENT WE ARE WORKING HARD TO RESOLVE THIS ISSUE',
};

export const ROLES = {
  TEACHER: 'teacher',
  HEAD_TEACHER: 'head-teacher',
  DIRECTOR: 'director',
  SUPER_DIRECTOR: 'super-director',
  SALES: 'sales-exec',
  BDO: 'bdo',
};

export const USER_MODES = {
  USERNAME: 'username',
  PASSWORD: 'password',
};

export const EXAM_TYPE = {
  MAIN_EXAM: 'main',
  CLASS_TEST: 'class',
};

export const DATE_MODES = [
  {
    id: 1,
    mode: 'Next 2 Days',
    startDate: moment().add(1, 'days').format(SERVER_DATE_FORMAT),
    endDate: moment().add(2, 'days').format(SERVER_DATE_FORMAT),
  },
  {
    id: 3,
    mode: 'Next 3 days',
    startDate: moment().add(1, 'days').format(SERVER_DATE_FORMAT),
    endDate: moment().add(3, 'days').format(SERVER_DATE_FORMAT),
  },
  {
    id: 4,
    mode: 'Next 5 days',
    startDate: moment().add(1, 'days').format(SERVER_DATE_FORMAT),
    endDate: moment().add(5, 'days').format(SERVER_DATE_FORMAT),
  },
  {id: 5, mode: 'Custom'},
];

export const CUSTOM_DATE_MODE_ID = 5;

export const PAYMENT_MODES = {
  CASH: 1,
  CHEQUE: 2,
  DD: 3,
  NEFT: 4,
  RTGS: 5,
  ONLINE: 6,
};

export const PAYMENT_STATUS = {
  CLEARED: 1,
  UNCLEARED: 2,
  BOUNCED: 3,
  CANCELLED: 4,
};

export const PAYMENT_TYPES = {
  FEES: 'fees',
  PRODUCT: 'product',
};

export const PAYMENTABLE_TYPES = {
  STUDENT: 'student',
  ENQUIRY: 'enquiry',
};

export const TRANSACTION_TYPE = {
  PAYMENT: '0',
  REFUND: '1',
};

export const NOTIFIABLE_TYPES = {
  STUDENTS: 1,
  SECTIONS: 2,
  WHOLE_STUDENTS: 3,
  OR_GROUPS: 4,
  ENQUIRY: 5,
  STAFF: 6,
  CONTACT: 7,
  WHOLE_STAFF: 8,
  DEPARTMENTS: 9,
  AND_GROUPS: 10,
};

export const NOTIFICATION_TYPE = {
  SMS: 1,
  SMS_NOTIFICATION: 2,
  NOTIFICATION: 3,
};

export const NOTIFICATION_PUSH_TO = {
  PRIMARY: 1,
  PRIMARY_SECONDARY: 2,
  ALL: 3,
};

export const getStatusObject = item => {
  let status = item.status;
  if (item.deleted_at && item.status != 4) {
    return {
      id: status,
      status: 'DELETED',
      color: Colors.redOrange,
    };
  }

  switch (item.status) {
    case 2:
      return {
        id: status,
        status: 'UNCLEARED',
        color: Colors.bluelight,
      };

    case 3:
      return {
        id: status,
        status: 'CANCELLED',
        color: Colors.redOrange,
      };

    case 4:
      return {
        id: status,
        status: 'BOUNCED',
        color: Colors.redOrange,
      };

    default:
      return {
        id: status,
        status: 'CLEARED',
        color: Colors.androidGreen,
      };
  }
};

export const LEAVE_TYPES = {
  PENDING: null,
  APPROVED: 1,
  REJECTED: 0,
};

export const MEDIUM = [
  {id: '1', name: 'HINDI'},
  {id: '2', name: 'ENGLISH'},
];

export const AFFILIATION = [
  {id: '1', name: 'CBSE'},
  {id: '2', name: 'RBSE'},
  {id: '3', name: 'UPSE'},
  {id: '4', name: 'MPSE'},
  {id: '5', name: 'HARYANA BOARD'},
];

export const SCHOOL_INTERESTED = [
  {id: '1', name: 'SCHOOLLOG'},
  {id: '2', name: 'WEBSITE'},
  {id: '3', name: 'BIOMETRIC'},
];

export const ACTION_TYPES = [
  {id: '1', name: 'CALL'},
  {id: '2', name: 'VISIT'},
  {id: '3', name: 'EMAIL'},
];

export const LOCATION_TYPE = [
  {id: '1', name: 'Pin Code'},
  {id: '2', name: 'Current Location'},
];

export const TASK_ACTIONS = {
  NOT_STARTED: 0,
  STARTED: 1,
  COMPLETED: 2,
};

export const TASK_STATUS = [
  {id: '0', name: 'NOT STARTED'},
  {id: '1', name: 'STARTED'},
  {id: '2', name: 'COMPLETED'},
];

export const STAFF_DESIGNATION = [
  {id: '1', name: 'director'},
  {id: '2', name: 'admin'},
  {id: '3', name: 'accountant'},
  {id: '4', name: 'principal'},
  {id: '5', name: 'teacher'},
  {id: '6', name: 'head-teacher'},
  {id: '7', name: 'reception'},
  {id: '8', name: 'webadmin'},
  {id: '9', name: 'hosteladmin'},
];

export const GENDER = [
  {id: '1', name: 'Male'},
  {id: '2', name: 'Female'},
];

export const PLANS = [
  {id: '1', name: 'SCHOOLLOG'},
  {id: '2', name: 'BASIC'},
  {id: '3', name: 'CUSTOM'},
  {id: '4', name: 'WEBSITE'},
  {id: '5', name: 'BASIC_AND_WEBSITE'},
  {id: '6', name: 'SCHOOLLOG_AND_WEBSITE'},
  {id: '7', name: 'CUSTOM_AND_WEBSITE'},
  {id: '8', name: 'SMS_ONLY'},
  {id: '9', name: 'SCHOOLLOG_DEMO'},
  {id: '10', name: 'WEBSITE_DEMO'},
  {id: '11', name: 'SMS_AND_WEBSITE'},
  {id: '12', name: 'SCHOOLLOG_AND_WEBSITE_DEMO'},
  {id: '13', name: 'DEMO'},
];

export const PRIORITY = [
  {id: '1', name: 'Low'},
  {id: '2', name: 'Medium'},
  {id: '3', name: 'High'},
];

export const LOCATION_MODE = [
  {id: '1', name: 'Plus Code'},
  {id: '2', name: 'Current Location'},
];

export const SALES_VEHICLES = [
  {id: '1', name: 'BIKE'},
  {id: '2', name: 'CAR'},
];

export const USER_RESPONSIBILITIES = [
  {id: 1, label: 'DEAL', value: 'deal'},
  {id: 2, label: 'DECISION', value: 'decision'},
  {id: 3, label: 'TRAINING ADMIN', value: 'admin'},
  {id: 4, label: 'TRAINING ACCOUNTS', value: 'accounts'},
  {id: 5, label: 'TRAINING DIRECTOR', value: 'director'},
  {id: 6, label: 'TRAINING RECEPTION', value: 'reception'},
];

///
export const DASHBOARD_BACKENDLIST = [
  {
    id: 1,
    title: 'NodeJS',
    description: '210 Candidates available',
    color: colors.nodejs,
    icon: Images.js,
  },
  {
    id: 2,
    title: 'Django',
    description: '35 Candidates available',
    color: colors.django,
    icon: Images.django,
  },
  {
    id: 3,
    title: 'PHP',
    description: '127 Candidates available',
    color: colors.php,
    icon: Images.php,
  },
];
export const FRONT_END_LIST = [
  {
    id: 1,
    title: 'React Native',
    description: '210 Candidates available',
    color: '#5F7EE1',
    icon: Images.react,
  },
  {
    id: 2,
    title: 'Angular',
    description: '35 Candidates available',
    color: '#F3A75A',
    icon: Images.angular,
  },
  {
    id: 3,
    title: 'HTML/CSS',
    description: '127 Candidates available',
    color: '#50BFA5',
    icon: Images.html,
  },
];

export const RECENT_SEARCHES = [
  {
    id: 1,
    title: 'Java',
  },
  {
    id: 2,
    title: 'Javascript',
  },
  {
    id: 3,
    title: 'HTML',
  },
  {
    id: 4,
    title: 'Angular',
  },
  {
    id: 5,
    title: 'CSS',
  },
];

export const POPULAR_SEARCHES = [
  {
    id: 1,
    title: 'Full Stack Developer',
  },
  {
    id: 2,
    title: 'Data Science',
  },
  {
    id: 3,
    title: 'Backend Developer',
  },
];

export const ROLE_TYPE = [
  {
    id: 1,
    title: 'FrontEnd',
  },
  {
    id: 2,
    title: 'BackEnd',
  },
  {
    id: 3,
    title: 'Data Science',
  },
  {
    id: 4,
    title: 'Data Analyst',
  },
  {
    id: 5,
    title: 'Full Stack',
  },
  {
    id: 6,
    title: 'DevOps',
  },
];

export const EXPERIENCE_LEVEL = [
  {
    id: 1,
    title: 'Junior (1-2 Yrs.)',
  },
  {
    id: 2,
    title: 'Mid (2-3 Yrs.)',
  },
  {
    id: 3,
    title: 'Senior ( 3-5 Yrs.)',
  },
  {
    id: 4,
    title: 'Expert (5+ Yrs.)',
  },
];

export const TECHNOLOGY = [
  {
    id: 1,
    title: 'Java',
  },
  {
    id: 2,
    title: 'ReactJS',
  },
  {
    id: 3,
    title: 'React Native',
  },
  {
    id: 4,
    title: 'CSS',
  },
  {
    id: 5,
    title: 'HTML',
  },
  {
    id: 6,
    title: 'Javascript',
  },
];

export const LANGUAGES = ['ReactJs', 'Java Script', 'Angular', 'CSS'];

export const SEARCH_CONDIDATES = [
  {
    id: 1,
    name: 'Nitin Malik',
    position: 'Full Stack Developer',
    position: 'Full Stack Developer',
    match: '95%',
    rate: '1500/hour',
    experience: 'senior (3-5 yrs)',
    rating: '4.5',
    image: Images.nitin.png,
    languages: LANGUAGES,
  },
  {
    id: 2,
    name: 'Nitin Malik',
    position: 'Full Stack Developer',
    position: 'Full Stack Developer',
    match: '95%',
    rate: '1500/hour',
    experience: 'Senior (3-5 yrs.)',
    rating: '4.5',
    languages: LANGUAGES,
  },
  {
    id: 3,
    name: 'Nitin Malik',
    position: 'Full Stack Developer',
    position: 'Full Stack Developer',
    match: '95%',
    rate: '1500/hour',
    experience: 'senior (3-5 yrs)',
    rating: '4.5',
    languages: LANGUAGES,
  },
];

export const WORK_EXPERIENCE = [
  {
    id: 1,
    title: 'Full Stack Developer',
    company: 'Amazon India',
    period: 'Jan 2020- Dec 2021'
  },
  {
    id: 2,
    title: 'Full Stack Developer',
    company: 'Amazon India',
    period: 'Jan 2020- Dec 2021'
  },
  {
    id: 3,
    title: 'Full Stack Developer',
    company: 'Amazon India',
    period: 'Jan 2020- Dec 2021'
  },
];

export const EDUCATION = [
  {
    id: 1,
    college: 'XYZ College, India',
    degree: 'B.Tech in Computer Engineering',
    period: 'Jan 2020- Dec 2021'
  },
  {
    id: 2,
    college: 'XYZ College, India',
    degree: 'B.Tech in Computer Engineering',
    period: 'Jan 2020- Dec 2021'
  },
  {
    id: 3,
    college: 'XYZ College, India',
    degree: 'B.Tech in Computer Engineering',
    period: 'Jan 2020- Dec 2021'
  },
];
