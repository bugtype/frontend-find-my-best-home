import React from 'react';
import './App.css';
import { Grid } from '@material-ui/core';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { BoardListPage, NotFoundPage, BoardDetailPage } from '@pages';
import { ROUTE_BOARD_LIST, ROUTE_BOARD_DETAIL } from '@configs';

function App() {
  // FIXME: 헤더, 풋터가 Content크기에 따라 계속 움직이므로, Content 영역 크기를 고정시켜야한다.

  return (
    <Router>
      <Grid className={'App'} container justify="center" alignItems="center">
        <Grid item className={'Header'}>
          Header
        </Grid>
        <Switch>
          <Route exact path="/" children={<BoardListPage />} />
          <Route exact path={ROUTE_BOARD_LIST} children={<BoardListPage />} />
          <Route
            exact
            path={ROUTE_BOARD_DETAIL}
            children={<BoardDetailPage />}
          />
          <Route path="*" children={<NotFoundPage />} />
        </Switch>
        <Grid item className={'Footer'}>
          Footer
        </Grid>
      </Grid>
    </Router>
  );
}

export default App;
