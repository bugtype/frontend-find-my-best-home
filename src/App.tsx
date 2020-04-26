import React, { useState } from 'react';
import './App.css';
import { Grid, Typography } from '@material-ui/core';
import { useBoardData } from '@hooks';
import { BoardRow, PageNavigation } from '@components';

function App() {
  const [page, setPage] = useState(1);
  const { data, loading } = useBoardData(page);

  return (
    <>
      <Grid className={'App'} container justify="center" alignItems="center">
        <Grid item className={'Header'}>
          Header
        </Grid>
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
          <PageNavigation
            currentPage={page}
            start={1}
            last={2}
            onPageClick={(page) => setPage(page)}
          />
        </Grid>
        <Grid item className={'Footer'}>
          Footer
        </Grid>
      </Grid>
    </>
  );
}

export default App;
