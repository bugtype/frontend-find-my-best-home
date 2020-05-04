import React from 'react';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  header: {
    backgroundColor: '#ddd',
    textAlign: 'center',
    width: '100%',
  },
});

export const Header = () => {
  const classes = useStyles();

  return (
    <Grid item className={classes.header}>
      Header
    </Grid>
  );
};
