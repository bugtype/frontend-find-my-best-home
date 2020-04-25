import React from 'react';
import './App.css';
import { Grid } from '@material-ui/core';
import { useBoardData } from 'hooks';
import { BoardRow } from './components/BoardRow/index';

function App() {
  const { data, loading } = useBoardData();

  return (
    <>
      <Grid className={'App'} container justify="center" alignItems="center">
        <Grid item className={'Header'}>
          Header
        </Grid>
        <Grid
          container
          item
          spacing={2}
          style={{
            height: '300px',
          }}
        >
          {loading && 'loading...'}
          {data.map((board) => (
            <Grid item xs={12}>
              <BoardRow item={board} />
            </Grid>
          ))}
        </Grid>
        <Grid item className={'Footer'}>
          Footer
        </Grid>
      </Grid>
    </>
  );
}

export default App;
