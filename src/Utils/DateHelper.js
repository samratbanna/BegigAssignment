import moment from 'moment';

export const SERVER_FORMAT = 'YYYY-MM-DD';
export const UNIXDT_FORMAT = 'YYYY-MM-DD HH:mm:ss';
export const WEEK_FORMAT = 'w';
export const YEAR_WEEK = 'YYYY_' + WEEK_FORMAT;
export const DAY_YEAR_WEEK = 'e_' + YEAR_WEEK;

export const READABLE_DATE_FORMAT = 'DD MMM, YYYY';
export const READABLE_TIME_FORMAT = 'hh:mm a';

export const READABLE_SMALL_DATE_TIME_FORMAT = 'DD MMM , hh:mm a';
export const READABLE_DATE_TIME_FORMAT = 'DD MMM, YYYY hh:mm a';

export const MONTH_CHECK_FORMAT = 'MMYYYY';
export const READABLE_MONTH_FORMAT = 'MMM, YYYY';
import _ from 'lodash';

const TIMESTAMP_FORMAT = 'x';

export function timeStampX() {
  return moment().format(TIMESTAMP_FORMAT);
}

export function toDateKey(apitoDate) {
  if (apitoDate && apitoDate.date) {
    return moment(apitoDate.date).format(SERVER_FORMAT);
  } else return '';
}

export function minutesSinceTime(prev, format = TIMESTAMP_FORMAT) {
  return moment().diff(moment(prev, format), 'minutes');
}

export function apitofromNow(apitoDate) {
  if (apitoDate && apitoDate.date) {
    return moment(apitoDate.date).fromNow();
  } else {
    return '';
  }
}

export function getReadableTimeFromTimeString(timeStr) {
  return moment(timeStr, 'hh:mm:ss').format('hh:mm a');
}

export default function formatApitoDate(apitoDate, format = SERVER_FORMAT) {
  if (apitoDate && apitoDate.date) {
    return moment(apitoDate.date).format(format);
  } else {
    return '';
  }
}

export function formatDateString(
  date,
  out = READABLE_DATE_TIME_FORMAT,
  informat = UNIXDT_FORMAT,
) {
  return moment(date, informat).isValid()
    ? moment(date, informat).format(out)
    : null;
}

export function toReadableTime(apitoDate) {
  if (apitoDate && apitoDate.date) {
    return moment(apitoDate.date).format(READABLE_TIME_FORMAT);
  } else {
    return '';
  }
}

export function toReadableDate(apitoDate) {
  if (apitoDate && apitoDate.date) {
    return moment(apitoDate.date).format(READABLE_DATE_FORMAT);
  } else if (apitoDate) {
    return moment(apitoDate).format(READABLE_DATE_FORMAT);
  } else {
    return '';
  }
}

export function toReadableDateTime(apitoDate) {
  if (apitoDate && apitoDate.date) {
    return moment(apitoDate.date).format(READABLE_DATE_TIME_FORMAT);
  } else {
    return '';
  }
}

export function toSmallReadableDateTime(apitoDate) {
  if (apitoDate && apitoDate.date) {
    return moment(apitoDate.date).format(READABLE_SMALL_DATE_TIME_FORMAT);
  } else {
    return '';
  }
}

export function getDateString(apitoDate) {
  if (apitoDate && apitoDate.date) {
    return moment(apitoDate.date).format(SERVER_FORMAT);
  } else {
    return '';
  }
}

export function dateStringToReadableDate(date) {
  return moment(date).isValid()
    ? moment(date).format(READABLE_DATE_FORMAT)
    : '';
}

export function dateTimeStringToReadableDateTime(date, minify) {
  console.log('data', moment(date).isValid());

  return moment(date).isValid()
    ? moment(date).format(
        !_.endsWith(date, '00:00:00')
          ? minify
            ? READABLE_SMALL_DATE_TIME_FORMAT
            : READABLE_DATE_TIME_FORMAT
          : READABLE_DATE_FORMAT,
      )
    : '';
}

export function getMoment(dateStr, format) {
  return moment(dateStr, format);
}

export function setMoment(date) {
  return moment(date).format(UNIXDT_FORMAT);
}

export function now() {
  return moment().format(UNIXDT_FORMAT);
}

export function todayString(format = SERVER_FORMAT) {
  return moment().format(format);
}

export function todayMoment() {
  return moment(todayString());
}

export function getPrevMonth(
  monthStr,
  format = MONTH_CHECK_FORMAT,
  outFormat = MONTH_CHECK_FORMAT,
) {
  return moment(monthStr, format).isValid()
    ? moment(monthStr, format)
        .subtract(1, 'month')
        .format(outFormat)
    : null;
}
export function getNextMonth(
  monthStr,
  format = MONTH_CHECK_FORMAT,
  outFormat = MONTH_CHECK_FORMAT,
) {
  return moment(monthStr, format).isValid()
    ? moment(monthStr, format)
        .add(1, 'month')
        .format(outFormat)
    : null;
}

export function getPreviousDate(dateStr, format, outFormat) {
  return moment(dateStr, format)
    .subtract(1, 'days')
    .format(outFormat || SERVER_FORMAT);
}

export function getNextDate(dateStr, format, outFormat) {
  return moment(dateStr, format)
    .add(1, 'days')
    .format(outFormat || SERVER_FORMAT);
}

export function tomorrowString() {
  return moment()
    .add(1, 'days')
    .format(SERVER_FORMAT);
}

export function dateAfterDays(days = 1) {
  return moment()
    .add(days, 'days')
    .format(SERVER_FORMAT);
}

export function getMonthDays(month, format = MONTH_CHECK_FORMAT) {
  return moment(month, format).daysInMonth();
}

export function getStartEndOfMonth(
  month,
  format = MONTH_CHECK_FORMAT,
  outFormat = SERVER_FORMAT,
) {
  let start = moment(month, format);
  let end = start
    .clone()
    .add(1, 'month')
    .subtract(1, 'days');
  return [start.format(outFormat), end.format(outFormat)];
}

export function getDateFromMonthAndIndex(
  month,
  index,
  format = MONTH_CHECK_FORMAT,
  outFormat = SERVER_FORMAT,
) {
  return moment(month, format)
    .date(index)
    .format(outFormat);
}
