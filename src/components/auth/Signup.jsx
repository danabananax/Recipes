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

const Signup = () => {
  const { handleSubmit, control } = useForm();
  const [signupLoading, setSignupLoading] = useState(false);
  const classes = useStyles();
  const { signup, currentUser } = useAuth();

  const onSubmit = (data) => {
    setSignupLoading(true);
    // eslint-disable-next-line no-console
    console.log(data);
    // eslint-disable-next-line no-console
    signup(data.email, data.password)
      .catch((loginErr) => {
        setSignupLoading(false);
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
          <Typography variant="h4">Sign Up</Typography>
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
          <Controller
            defaultValue=""
            name="confirmPassword"
            control={control}
            rules={{ required: true }}
            render={({
              field: {
                onChange, value,
              },
            }) => (
              <TextField
                label="Confirm Password"
                onChange={onChange}
                value={value}
              />
            )}
          />
        </Grid>
        <Grid item>
          { signupLoading ? <CircularProgress color="primary" /> : (
            <Button
              variant="outlined"
              color="primary"
              type="submit"
              onClick={handleSubmit}
              disabled={false}
              size="large"
            >
              Signup
            </Button>
          )}
        </Grid>
        <Grid item>
          <Typography>
            Already have an account?&nbsp;
            <Link to="/auth/login">Login.</Link>
          </Typography>
        </Grid>
      </Grid>
    </form>
  );
};

export default Signup;
