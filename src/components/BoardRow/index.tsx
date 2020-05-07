import React from 'react';
import { Board } from '@models';
import { Grid } from '@material-ui/core';
import { DateTime } from '@components';
import { Link } from 'react-router-dom';
import { ROUTE_BOARD_DETAIL_WITH_ID } from 'configs';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  subject: {
    textDecoration: 'none',
    color: '#000',
  },
});

export const BoardRow = ({ item }: { item: Board }) => {
  const classes = useStyles();
  const { subject, date, userName, city, id } = item;

  return (
    <Grid container justify="center" alignItems="center" spacing={2}>
      <Grid item xs={1}>
        {id}
      </Grid>
      <Grid item xs={1}>
        {city}
      </Grid>
      <Grid item xs={7}>
        <Link
          to={ROUTE_BOARD_DETAIL_WITH_ID(item.id)}
          className={classes.subject}
        >
          {subject}
        </Link>
      </Grid>
      <Grid item xs={2}>
        {userName}
      </Grid>
      <Grid item xs={1}>
        <DateTime date={date} textFormat={'MM-dd'} />
      </Grid>
    </Grid>
  );
};
