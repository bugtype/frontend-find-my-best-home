import React from 'react';
import './App.css';
import { Grid } from '@material-ui/core';
import { useBoardData } from 'hooks';
import { BoardRow } from './components/BoardRow/index';

function App() {
  const { data, loading } = useBoardData();

  return (
    <>
      <Grid
        className={'App'}
        container
        direction="column"
        justify="center"
        alignItems="center"
      >
        {loading && 'loading...'}
        {data.map((board) => (
          <BoardRow item={board} />
        ))}
      </Grid>
    </>
  );
}

export default App;
