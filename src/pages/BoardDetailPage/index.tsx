import React from 'react';
import { useBoardDetail } from '@hooks';
import { Grid, Paper, CircularProgress, Box } from '@material-ui/core';
import { DateTime } from '@components';
import { BoardList } from '@containers';
import { makeStyles } from '@material-ui/core/styles';

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

const BoardDetailPage = ({ id }) => {
  const { data, loading, error } = useBoardDetail(id);
  const classes = useStyles();

  if (loading) {
    return (
      <Box>
        <CircularProgress />
      </Box>
    );
  }

  if ((!loading && error) || !data) {
    return <>error...</>;
  }

  const { subject, date, userName, city, content } = data;

  return (
    <Grid
      container
      direction="column"
      justify="center"
      className={classes.root}
    >
      <Grid item>
        <Paper className={classes.detailPaper}>
          <Grid container justify="center" alignItems="center" spacing={2}>
            <Grid
              item
              container
              direction="column"
              alignItems="flex-start"
              spacing={2}
            >
              <Grid item>{subject}</Grid>
              <Grid item container spacing={2}>
                <Grid item>{city}</Grid>
                <Grid item>{userName}</Grid>
                <Grid item>
                  <DateTime date={date} textFormat={'yyyy-MM-dd'} />
                </Grid>
              </Grid>
            </Grid>

            <Grid>{content}</Grid>
          </Grid>
        </Paper>
      </Grid>
      <Grid item>
        <BoardList />
      </Grid>
    </Grid>
  );
};
export { BoardDetailPage };
