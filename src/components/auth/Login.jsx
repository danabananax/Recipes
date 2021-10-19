import React, { useState } from 'react';
import {
  Grid, Button, Typography, CircularProgress,
  TextField,
} from '@mui/material';
import { Link, Redirect } from 'react-router-dom';
import { useForm, Controller } from 'react-hook-form';
import { makeStyles } from '@mui/styles';
import { useAuth } from '../../contexts/AuthContext';

const useStyles = makeStyles((theme) => ({
  form: {
    display: 'flex',
    width: '100%',
    padding: theme.spacing(2),
    margin: 0,
  },
}));

const Login = () => {
  const { handleSubmit, control } = useForm();
  const [loginLoading, setLoginLoading] = useState(false);
  const classes = useStyles();
  const { login, currentUser } = useAuth();

  const onSubmit = (data) => {
    setLoginLoading(true);
    // eslint-disable-next-line no-console
    console.log(data);
    // eslint-disable-next-line no-console
    login(data.email, data.password)
      .catch((loginErr) => {
        setLoginLoading(false);
        // eslint-disable-next-line no-console
        console.log('heres the error', loginErr);
      });
  };
  // eslint-disable-next-line no-console
  const onError = (e) => console.log('submitErr', e);

  return currentUser ? <Redirect to="/home" /> : (
    // eslint-disable-next-line no-console
    <form classes={classes.form} onSubmit={handleSubmit(onSubmit, onError)}>
      <Grid
        container
        direction="column"
        justifyContent="center"
        spacing={6}
      >
        <Grid item>
          <Typography variant="h4">Login</Typography>
        </Grid>
        <Grid item>
          <Controller
            defaultValue=""
            name="email"
            control={control}
            rules={{ required: true }}
            render={({
              field: {
                onChange, value,
              },
            }) => (
              <TextField
                onChange={onChange}
                value={value}
                label="Email"
              />
            )}
          />
        </Grid>
        <Grid item>
          <Controller
            defaultValue=""
            name="password"
            control={control}
            rules={{ required: true }}
            render={({
              field: {
                onChange, value,
              },
            }) => (
              <TextField
                label="Password"
                onChange={onChange}
                value={value}
              />
            )}
          />
        </Grid>
        <Grid item>
          { loginLoading ? <CircularProgress color="primary" /> : (
            <Button
              variant="outlined"
              color="primary"
              type="submit"
              onClick={handleSubmit}
              disabled={false}
              size="large"
            >
              Login
            </Button>
          )}
        </Grid>
        <Grid item>
          <Typography>
            Don&apos;t have an account?&nbsp;
            <Link to="/auth/signup">Sign up.</Link>
          </Typography>
        </Grid>
      </Grid>
    </form>
  );
};

export default Login;
