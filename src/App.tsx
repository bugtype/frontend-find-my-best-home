import React from 'react';
import './App.css';
import { Grid } from '@material-ui/core';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { BoardListPage, NotFoundPage, BoardDetailPage } from '@pages';
import { ROUTE_BOARD_LIST, ROUTE_BOARD_DETAIL } from '@configs';
import { Header, Footer } from '@components';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  app: {
    textAlign: 'center',
    height: '100vh',
    width: '100vw',
    flexGrow: 1,
  },
});

function App() {
  // FIXME: 헤더, 풋터가 Content크기에 따라 계속 움직이므로, Content 영역 크기를 고정시켜야한다.

  const classes = useStyles();

  return (
    <Router>
      <Grid
        className={classes.app}
        container
        direction="column"
        justify="space-between"
        alignItems="center"
      >
        <Header />
        <Switch>
          <Route exact path="/" children={<BoardListPage />} />
          <Route exact path={ROUTE_BOARD_LIST} children={<BoardListPage />} />
          <Route
            exact
            path={ROUTE_BOARD_DETAIL}
            render={({ match }) => <BoardDetailPage {...match.params} />}
          />
          <Route path="*" children={<NotFoundPage />} />
        </Switch>
        <Footer />
      </Grid>
    </Router>
  );
}

export default App;
