import React, { useEffect } from 'react';
import { Grid, TextField, Button } from '@material-ui/core';
import { authService, storeService } from '@services';
import { useAuth } from 'hooks/auth';
import { useHistory } from 'react-router-dom';

/**
 * FIXME: export const 로하면 anonymous function으로 나온다. react dev tool
 */
export const Login = () => {
  const [values, setValues] = React.useState({
    username: 'john',
    password: 'changeme',
  });

  const { loading, data } = useAuth();
  const history = useHistory();

  const handleChange = (name) => (event) => {
    setValues({ ...values, [name]: event.target.value });
  };

  const handleSubmitClick = (event: React.FormEvent) => {
    // FIXME: hooks에서 처리해야함.
    authService.login({ ...values }).subscribe((token) => {
      storeService.saveToken({ token });
      // FIXME: global window
      window.location.reload();
    });
    event.preventDefault();
  };

  useEffect(() => {
    if (!loading && data) {
      history.push('/');
    }
  }, [data, history, loading]);

  return (
    <Grid container justify="center" alignItems="center">
      <form noValidate autoComplete="off" onSubmit={handleSubmitClick}>
        <Grid item>
          <TextField
            id="standard-name"
            label="ID"
            value={values.username}
            onChange={handleChange('username')}
            margin="normal"
          />
        </Grid>
        <Grid item>
          <TextField
            type="password"
            id="standard-name"
            label="Password"
            value={values.password}
            onChange={handleChange('password')}
            margin="normal"
          />
        </Grid>
        <Button type="submit">login</Button>
      </form>
    </Grid>
  );
};
