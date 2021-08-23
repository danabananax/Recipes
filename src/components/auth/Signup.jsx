import React, { useState } from 'react';
import {
  Grid, Button, Typography, CircularProgress,
} from '@material-ui/core';
import { Link, Redirect } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import AuthInput from './AuthInput';
import validateAuthInputs from '../../helper';

const Signup = () => {
  const [inputs, setInputs] = useState({
    email: '',
    password: '',
    confPassword: '',
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [signupErr, setSignupErr] = useState(null);
  const { signup, currentUser } = useAuth();

  const handleSubmit = (e) => {
    setLoading(true);
    setSignupErr(null);
    e.preventDefault();
    setError(null);
    try {
      validateAuthInputs(inputs.email, inputs.password, inputs.confPassword);
      signup(inputs.email, inputs.password)
        .catch(() => {
          setSignupErr(error.message);
          setLoading(false);
        });
    } catch (submitErr) {
      setError(submitErr.message);
    }
    setLoading(false);
  };

  const onChange = (name, value) => {
    const newState = { ...inputs };
    newState[name] = value;
    setInputs(newState);
  };

  return currentUser ? <Redirect to="/home" /> : (
    <Grid
      container
      direction="column"
      justifyContent="center"
      spacing={4}
    >
      <Grid item>
        <Typography variant="h4">Sign up</Typography>
        {signupErr && <Typography>{signupErr}</Typography>}
      </Grid>
      <AuthInput
        id="email-signup"
        label="Email"
        value={inputs.email}
        type="email"
        name="email"
        onChange={(e) => onChange('email', e.target.value)}
        onFocus={() => setError(false)}
        error={error === 'email'}
        helper={error === 'email' ? 'Please use a valid email.' : ''}
      />
      <AuthInput
        id="password-signup"
        label="Password"
        value={inputs.password}
        type="password"
        name="password"
        onChange={(e) => onChange('password', e.target.value)}
        onFocus={() => setError(false)}
        error={error === 'password'}
        helper={error === 'password' ? 'Passwords arent matching.' : ''}
      />
      <AuthInput
        id="conf-password-signup"
        label="Confirm password"
        value={inputs.confPassword}
        type="password"
        name="confPassword"
        onChange={(e) => onChange('confPassword', e.target.value)}
        onFocus={() => setError(false)}
        error={error === 'password'}
        helper={error === 'password' ? 'Passwords arent matching.' : ''}
      />
      <Grid item>
        {loading ? <CircularProgress color="primary" />
          : (
            <Button
              variant="outlined"
              color="primary"
              type="submit"
              onClick={loading ? undefined : handleSubmit}
              disabled={loading}
              size="large"
            >
              Signup
            </Button>
          )}
      </Grid>
      <Grid item>
        <Typography>
          Already have an account?
          {' '}
          <Link to="/auth/login">Login.</Link>
        </Typography>
      </Grid>
    </Grid>
  );
};

export default Signup;
