import React from 'react';
import { Grid, TextField, Button } from '@material-ui/core';

/**
 * FIXME: export const 로하면 anonymous function으로 나온다. react dev tool
 */
export const Login = () => {
  const [values, setValues] = React.useState({
    id: '',
    pw: '',
  });
  const handleChange = (name) => (event) => {
    setValues({ ...values, [name]: event.target.value });
  };

  const handleSubmitClick = (event: React.FormEvent) => {
    console.log('login');
    event.preventDefault();
  };

  return (
    <Grid container justify="center" alignItems="center">
      <form noValidate autoComplete="off" onSubmit={handleSubmitClick}>
        <Grid item>
          <TextField
            id="standard-name"
            label="ID"
            value={values.id}
            onChange={handleChange('id')}
            margin="normal"
          />
        </Grid>
        <Grid item>
          <TextField
            type="password"
            id="standard-name"
            label="Password"
            value={values.pw}
            onChange={handleChange('pw')}
            margin="normal"
          />
        </Grid>
        <Button type="submit">login</Button>
      </form>
    </Grid>
  );
};
