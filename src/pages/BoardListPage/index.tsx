import React from 'react';

import { BoardList } from '@containers';
import { makeStyles } from '@material-ui/core/styles';
import { Box } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(4),
  },
  detailPaper: {
    padding: theme.spacing(4),
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(4),
  },
}));

export const BoardListPage = () => {
  const classes = useStyles();

  return (
    <>
      <Box className={classes.root}>
        <BoardList />
      </Box>
    </>
  );
};
