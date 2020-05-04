import React, { useState } from 'react';
import { Grid, Typography } from '@material-ui/core';
import { useBoardData, useParseQueryString } from '@hooks';
import { BoardRow, PageNavigation } from '@components';

export const BoardListPage = () => {
  const [queries] = useParseQueryString();

  const [page, setPage] = useState(queries.page || 1);
  const { data, loading } = useBoardData(page);

  return (
    <>
      <Grid
        container
        item
        className={'Content'}
        alignItems="center"
        spacing={2}
      >
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
      </Grid>
      <PageNavigation
        currentPage={page}
        // TODO: 서버에서 받아와야함.
        start={1}
        last={2}
        onPageClick={(page) => setPage(page)}
      />
    </>
  );
};
