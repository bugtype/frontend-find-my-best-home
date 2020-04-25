import React from 'react';
import { format, utcToZonedTime } from 'date-fns-tz';

interface Props {
  date: string;
  timezone?: string;
}

/**
 * 나라마다 UTC가 다르므로, timezone을 받아야 한다.
 */
export const DateTime = ({ date, timezone }: Props) => {
  const _timezone = timezone || 'Asia/Seoul';
  const utcDate = utcToZonedTime(date, _timezone);
  //   const utcDate = utcToZonedTime(date, language || 'America/Los_Angeles');

  const dateStr = format(utcDate, 'yyyy-MM-dd HH:mm', {
    timeZone: _timezone,
  });

  return <>{dateStr}</>;
};
