import React, { useState } from 'react';
import {
  Button, Typography, CircularProgress,
  TextField,
} from '@mui/material';
import { Link, Redirect } from 'react-router-dom';
import { useForm, Controller } from 'react-hook-form';
import { styled } from '@mui/material/styles';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebase';

const Form = styled('form')({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
});

const Login = () => {
  const { handleSubmit, control } = useForm();
  const [loginLoading, setLoginLoading] = useState(false);
  const [userAuthenticated, setUserAuthenticated] = useState(false);
  // const classes = useStyles();
  const onSubmit = (data) => {
    setLoginLoading(true);
    // eslint-disable-next-line no-console
    console.log(data);
    // eslint-disable-next-line no-console
    signInWithEmailAndPassword(auth, data.email, data.password)
      .then(() => {
        setLoginLoading(false);
        setUserAuthenticated(true);
      })
      .catch((loginErr) => {
        setLoginLoading(false);
        // eslint-disable-next-line no-console
        console.log('Error: ', loginErr);
      });
  };
  // eslint-disable-next-line no-console
  const onError = (e) => console.log('submitErr', e);

  return userAuthenticated ? <Redirect to="/home" /> : (
  // eslint-disable-next-line no-console
    <Form onSubmit={handleSubmit(onSubmit, onError)}>
      <Typography variant="h4" sx={{ pb: 2 }}>Login</Typography>
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
            type="password"
            sx={{ my: 2 }}
          />
        )}
      />
      { loginLoading ? <CircularProgress color="primary" sx={{ mb: 2 }} /> : (
        <Button
          variant="outlined"
          color="primary"
          type="submit"
          onClick={handleSubmit}
          disabled={false}
          sx={{ mb: 2 }}
        >
          Login
        </Button>
      )}
      <Typography>
        Don&apos;t have an account?&nbsp;
        <Link to="/auth/signup">Sign up.</Link>
      </Typography>
    </Form>
  );
};

export default Login;
