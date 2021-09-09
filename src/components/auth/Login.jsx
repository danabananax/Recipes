import React, { useState } from 'react';
import {
  Grid, Button, Typography, CircularProgress,
} from '@material-ui/core';
import { Link, Redirect } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import AuthInput from './AuthInput';
import validateAuthInputs from '../../helper';

const Login = () => {
  const [inputs, setInputs] = useState({
    email: '',
    password: '',
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const { login, currentUser } = useAuth();
  const [loginErr, setLoginErr] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setLoginErr(false);
    setError(null);
    try {
      validateAuthInputs(inputs.email, inputs.password);
      login(inputs.email, inputs.password)
        .catch(() => {
          setLoginErr(true);
          setLoading(false);
        });
    } catch (submitErr) {
      setError(submitErr.message);
      setLoading(false);
    }
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
      spacing={6}
    >
      <Grid item>
        <Typography variant="h4">Login</Typography>
        {loginErr && <Typography>User not found, please try again.</Typography>}
      </Grid>
      <AuthInput
        id="email-login"
        label="Email"
        value={inputs.email}
        type="email"
        onChange={(e) => onChange('email', e.target.value)}
        onFocus={() => setError(false)}
        error={error}
      />
      <AuthInput
        id="password-login"
        label="password"
        value={inputs.password}
        type="password"
        onChange={(e) => onChange('password', e.target.value)}
        onFocus={() => setError(false)}
        error={error}
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
  );
};

export default Login;
