import React from 'react';
import { useBoardDetail } from '@hooks';
import { Grid } from '@material-ui/core';
import { DateTime } from '@components';

export const BoardDetailPage = ({ id }) => {
  const { data, loading, error } = useBoardDetail(id);

  if (loading) {
    return <>loading...</>;
  }

  if (!loading && error) {
    return <>error...</>;
  }

  const { subject, date, userName, city } = data;

  return (
    <Grid container justify="center" alignItems="center" spacing={2}>
      <Grid item xs={1}>
        {id}
      </Grid>
      <Grid item xs={1}>
        {city}
      </Grid>
      <Grid item xs={7}>
        {subject}
      </Grid>
      <Grid item xs={2}>
        {userName}
      </Grid>
      <Grid item xs={1}>
        <DateTime date={date} textFormat={'yyyy-MM-dd'} />
      </Grid>
      <Grid>
        TODO: 내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용
      </Grid>
    </Grid>
  );
};
