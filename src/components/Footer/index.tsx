import React from 'react';
import { Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  footer: {
    backgroundColor: 'rgb(203, 231, 209)',
    width: '100%',
  },
});

export const Footer = () => {
  const classes = useStyles();

  return <Box className={classes.footer}>Footer</Box>;
};
