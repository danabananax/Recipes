import React from 'react';
import { useRouteMatch, Route, Switch } from 'react-router-dom';
import { Grid } from '@mui/material';
import makeStyles from '@mui/styles/makeStyles';
import Signup from './Signup';
import Login from './Login';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.secondary.main,
    margin: 0,
    minHeight: '100vh',
    maxWidth: '100%',
    [theme.breakpoints.down('md')]: {
      padding: 0,
    },
    [theme.breakpoints.up('sm')]: {
      padding: theme.spacing(4),
    },
  },
  item: {
    [theme.breakpoints.down('md')]: {
      width: '90%',
    },
    width: '700px',
  },
  paper: {
    [theme.breakpoints.down('md')]: {
      padding: 0,
    },
    [theme.breakpoints.up('sm')]: {
      padding: theme.spacing(4),
    },
    [theme.breakpoints.down('md')]: {
      height: '70%',
    },
    display: 'flex',
    justifyContent: 'center',
  },
}));

const Auth = () => {
  const { path } = useRouteMatch();
  const classes = useStyles();

  return (
    <Grid
      container
      spacing={2}
      direction="column"
      justifyContent="center"
      alignItems="center"
      className={classes.root}
    >
      <Grid
        item
        align="center"
        className={classes.item}
      >
        <div
          className={classes.paper}
        >
          <Switch>
            <Route path={`${path}/login`}>
              <Login />
            </Route>
            <Route path={`${path}/signup`}>
              <Signup />
            </Route>
          </Switch>
        </div>
      </Grid>
    </Grid>
  );
};

export default Auth;
