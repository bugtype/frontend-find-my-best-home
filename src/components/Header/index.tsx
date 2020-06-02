import React from 'react';
import {
  Box,
  AppBar,
  Toolbar,
  IconButton,
  Typography,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

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

  return (
    <Box className={classes.header}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            {/* <MenuIcon /> */}
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            꿀집 찾기 커뮤니티
          </Typography>
          {/* // TODO */}
          {/* <Button className={classes.loginButton}>로그인</Button> */}
        </Toolbar>
      </AppBar>
    </Box>
  );
};
