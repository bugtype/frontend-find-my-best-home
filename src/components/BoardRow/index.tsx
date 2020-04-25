import React from 'react';
import { Board } from 'models';
import { Grid } from '@material-ui/core';
import { DateTime } from 'components/DateTime';

export const BoardRow = ({ item }: { item: Board }) => {
  const { subject, date, userName } = item;
  return (
    <Grid container justify="center" alignItems="center" spacing={2}>
      <Grid item xs={7}>
        {subject}
      </Grid>
      <Grid item xs={2}>
        {userName}
      </Grid>
      <Grid item xs={2}>
        <DateTime date={date} />
      </Grid>
    </Grid>
  );
};
