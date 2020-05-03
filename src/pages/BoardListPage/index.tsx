import React, { useState } from 'react';
import { Grid, Typography } from '@material-ui/core';
import { useBoardData } from '@hooks';
import { BoardRow, PageNavigation } from '@components';

export const BoardListPage = () => {
  const [page, setPage] = useState(1);
  const { data, loading } = useBoardData(page);

  return (
    <Grid container item className={'Content'} alignItems="center" spacing={2}>
      {loading && (
        <Grid item xs={12}>
          <Typography variant="body2">loading...</Typography>
        </Grid>
      )}
      {data.map((board) => (
        <Grid key={board.no} item xs={12}>
          <BoardRow item={board} />
        </Grid>
      ))}

      <PageNavigation
        currentPage={page}
        start={1}
        last={2}
        onPageClick={(page) => setPage(page)}
      />
    </Grid>
  );
};
