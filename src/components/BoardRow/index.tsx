import React from 'react';
import { Board } from 'models';
import { Grid } from '@material-ui/core';

export const BoardRow = ({ item }: { item: Board }) => {
  const { subject, date, userName } = item;
  return (
    <Grid container justify="center" alignItems="center">
      <Grid item>{subject}</Grid>
      <Grid item>{userName}</Grid>
      <Grid item>{date}</Grid>
    </Grid>
  );
};
