import React from 'react';
import { useBoardDetail } from '@hooks';
import { Grid, Paper } from '@material-ui/core';
import { DateTime } from '@components';

const BoardDetailPage = ({ id }) => {
  const { data, loading, error } = useBoardDetail(id);
  // const classes = useStyles();

  if (loading) {
    return <>loading...</>;
  }

  if (!loading && error) {
    return <>error...</>;
  }

  const { subject, date, userName, city, content } = data;

  return (
    <Paper style={{ height: '80%' }}>
      <Grid
        style={{ height: '100%' }}
        container
        justify="center"
        alignItems="center"
        spacing={2}
      >
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
  );
};
export { BoardDetailPage };
