import React from 'react';
import { Box, AppBar, Toolbar, Typography, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Home } from '@material-ui/icons';
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  header: {
    backgroundColor: '#ddd',
    textAlign: 'center',
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  loginButton: {
    color: '#fff',
  },
  title: {
    flexGrow: 1,
  },
}));

export const Header = () => {
  const classes = useStyles();
  const history = useHistory();

  const handleHomeClick = () => {
    history.push('/');
  };

  const handleLoginClick = () => {
    history.push('/login');
  };

  return (
    <Box className={classes.header}>
      <AppBar position="static">
        <Toolbar>
          <Home onClick={handleHomeClick} />
          <Typography variant="h6" className={classes.title}>
            꿀집 찾기 커뮤니티
          </Typography>
          {/* // TODO */}
          <Button className={classes.loginButton} onClick={handleLoginClick}>
            로그인
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
