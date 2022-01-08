import React from 'react';
import { useRouteMatch, Route, Switch } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import Signup from './Signup';
import Login from './Login';

const AuthContainer = styled('div')(({ theme }) => ({
  backgroundColor: theme.palette.secondary.main,
  margin: 0,
  minHeight: '100vh',
  maxWidth: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  [theme.breakpoints.down('md')]: {
    padding: 0,
  },
  [theme.breakpoints.up('sm')]: {
    padding: theme.spacing(4),
  },
}));

const Auth = () => {
  const { path } = useRouteMatch();

  return (
    <AuthContainer>
      <Switch>
        <Route path={`${path}/login`}>
          <Login />
        </Route>
        <Route path={`${path}/signup`}>
          <Signup />
        </Route>
      </Switch>
    </AuthContainer>
  );
};

export default Auth;
