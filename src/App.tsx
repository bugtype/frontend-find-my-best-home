import React from 'react';
import './App.css';
import { Grid, CircularProgress } from '@material-ui/core';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import { BoardListPage, NotFoundPage, BoardDetailPage, Login } from '@pages';
import {
  ROUTE_BOARD_LIST,
  ROUTE_BOARD_DETAIL,
  ROUTE_LOGIN,
  ROUTE_ROOT,
} from '@configs';
import { Header, Footer } from '@components';
import { makeStyles } from '@material-ui/core/styles';
import { useAuth } from '@hooks';

const useStyles = makeStyles({
  app: {
    textAlign: 'center',
    height: '100vh',
    width: '100vw',
    flexGrow: 1,
  },
});

const PrivateRoute = ({ component: Component, ...rest }) => {
  const { loading, data } = useAuth();

  if (loading) {
    return (
      <>
        <CircularProgress />
      </>
    );
  }

  return (
    <Route
      {...rest}
      render={(props) =>
        !data ? <Component {...props} /> : <Redirect to={ROUTE_ROOT} />
      }
    />
  );
};

const UnPrivateRoute = ({ component: Component, ...rest }) => {
  const { loading, data } = useAuth();

  if (loading) {
    return (
      <>
        <CircularProgress />
      </>
    );
  }

  return (
    <Route
      {...rest}
      render={(props) =>
        !data ? <Component {...props} /> : <Redirect to={ROUTE_ROOT} />
      }
    />
  );
};

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
      >
        <Grid item>
          <Header />
        </Grid>
        <Grid item>
          <Switch>
            <Route exact path={ROUTE_ROOT} children={<BoardListPage />} />
            <Route exact path={ROUTE_BOARD_LIST} children={<BoardListPage />} />
            <UnPrivateRoute exact path={ROUTE_LOGIN} component={Login} />
            {/* // TODO: 예) Profile
            <PrivateRoute exact path={} component={Profile} /> */}
            <Route
              exact
              path={ROUTE_BOARD_DETAIL}
              render={({ match }) => <BoardDetailPage {...match.params} />}
            />
            <Route path="*" children={<NotFoundPage />} />
          </Switch>
        </Grid>
        <Grid item>
          <Footer />
        </Grid>
      </Grid>
    </Router>
  );
}

export default App;
