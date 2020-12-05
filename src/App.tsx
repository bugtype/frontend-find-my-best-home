import React from 'react';
import { CircularProgress, Box } from '@material-ui/core';
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
import { useAuth } from '@hooks';



// const PrivateRoute = ({ component: Component, ...rest }) => {
//   const { loading, data } = useAuth();

//   if (loading) {
//     return (
//       <>
//         <CircularProgress />
//       </>
//     );
//   }

//   return (
//     <Route
//       {...rest}
//       render={(props) =>
//         !data ? <Component {...props} /> : <Redirect to={ROUTE_ROOT} />
//       }
//     />
//   );
// };

// TODO: components로 옮기는 게 좋으려나??
const UnPrivateRoute = ({ component: Component, ...rest }) => {
  const { loading, data } = useAuth();

  if (loading) {
    return <CircularProgress />;
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

const App = () => {

  return (
    <Router >
      <Box  display="flex" flexDirection="column" height="100%">
          <Header />
          <Box flex="1">
          <Switch >
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
          </Box>
          <Footer />
        </Box>
    </Router>
  );
};

export { App };
