import React from 'react';
import PropTypes from 'prop-types';
import { Button, makeStyles, Typography } from '@mui/material';
import { useAuth } from '../contexts/AuthContext';

const useStyles = makeStyles((theme) => ({
  header: {
    fontWeight: 700,
  },
  button: {
    margin: theme.spacing(2),
    color: theme.palette.primary.main,
  },
}));

const HomeNoData = (props) => {
  const { handleOpen } = props;
  const { signout } = useAuth();
  const classes = useStyles();
  return (
    <>
      <Typography variant="h3" className={classes.header}>
        Woops, looks like you don&apos;t have any recipes yet.
      </Typography>
      <Button
        className={classes.button}
        onClick={handleOpen}
        size="large"
        variant="contained"
      >
        Add recipe
      </Button>
      <Button
        className={classes.button}
        onClick={signout}
        size="large"
        variant="outlined"
      >
        Signout
      </Button>
    </>
  );
};

HomeNoData.propTypes = {
  handleOpen: PropTypes.func.isRequired,
};

export default HomeNoData;
