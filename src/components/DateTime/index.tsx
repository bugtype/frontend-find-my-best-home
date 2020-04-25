import React from 'react';
import { utcToZonedTime } from 'date-fns-tz';
import { format } from 'date-fns';

interface Props {
  date: string;
  language?: string;
}

/**
 * 나라마다 UTC가 다르므로, timezone을 받아야 한다.
 */
export const DateTime = ({ date, language }: Props) => {
  const utcDate = utcToZonedTime(date, language || 'Asia/Seoul');
  //   const utcDate = utcToZonedTime(date, language || 'America/Los_Angeles');

  const dateStr = format(utcDate, 'yyyy-MM-dd HH:mm');
  return <>{dateStr}</>;
};
