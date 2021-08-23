import React from 'react';
import PropTypes from 'prop-types';
import { Grid, TextField, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  input: {
    [theme.breakpoints.down('sm')]: {
      width: '80%',
    },
    width: '60%',
  },
}));

const AuthInput = ({
  id,
  label,
  type,
  onChange,
  error,
  helper,
  onFocus,
}) => {
  const classes = useStyles();
  return (
    <Grid item className={classes.gridItem}>
      <TextField
        id={id}
        size="medium"
        variant="outlined"
        label={label}
        onChange={onChange}
        type={type}
        className={classes.input}
        autoComplete="off"
        error={error}
        helperText={helper}
        onFocus={onFocus}
      />
    </Grid>
  );
};

AuthInput.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  error: PropTypes.bool.isRequired,
  helper: PropTypes.string.isRequired,
  onFocus: PropTypes.func.isRequired,
};

export default AuthInput;
