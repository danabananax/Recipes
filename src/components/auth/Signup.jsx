import React, { useState } from 'react';
import {
  Button, Typography, CircularProgress,
  TextField,
} from '@mui/material';
import { Link, Redirect } from 'react-router-dom';
import { useForm, Controller } from 'react-hook-form';
import { styled } from '@mui/material/styles';
import { useAuth } from '../../contexts/AuthContext';

const Form = styled('form')({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
});

const Signup = () => {
  const { handleSubmit, control } = useForm();
  const [signupLoading, setSignupLoading] = useState(false);
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
    <Form onSubmit={handleSubmit(onSubmit, onError)}>
      <Typography variant="h4" sx={{ pb: 2 }}>Sign Up</Typography>
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
            sx={{ my: 2 }}
          />
        )}
      />
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
            sx={{ mb: 2 }}
          />
        )}
      />
      { signupLoading ? <CircularProgress color="primary" /> : (
        <Button
          variant="outlined"
          color="primary"
          type="submit"
          onClick={handleSubmit}
          disabled={false}
          sx={{ mb: 2 }}
        >
          Signup
        </Button>
      )}
      <Typography>
        Already have an account?&nbsp;
        <Link to="/auth/login">Login.</Link>
      </Typography>
    </Form>
  );
};

export default Signup;
