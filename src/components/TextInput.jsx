import React from 'react';
import PropTypes from 'prop-types';
import { TextField, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  input: {
    [theme.breakpoints.down('sm')]: {
      width: '80%',
    },
    padding: '0 1em',
    paddingBottom: '1em',
    backgroundColor: theme.palette.secondary.light,
    borderRadius: 5,
    width: '60%',
    justifyContent: 'center',
    '& .MuiInput-underline:before': {
      borderBottom: 0,
      transition: 'none',
    },
    '& .MuiInput-underline:after': {
      borderBottom: 0,
      transition: 'none',
    },
    '& .MuiInput-underline:hover:not(.Mui-disabled):before': {
      borderBottom: 0,
    },
    '& .MuiFormLabel-root': {
      lineHeight: 1,
      padding: '0 1em',
      fontWeight: 500,
    },
  },
}));

const TextInput = ({
  id,
  label,
  type,
  onChange,
  error,
  value,
  helper = undefined,
  onFocus,
}) => {
  const classes = useStyles();
  const shrink = value.length < 1;
  return (
    <TextField
      id={id}
      size="medium"
      label={shrink ? label : ' '}
      onChange={onChange}
      value={value}
      InputProps={{ style: { fontWeight: 500 } }}
      InputLabelProps={{ shrink: false }}
      type={type}
      className={classes.input}
      autoComplete="new-password"
      error={error}
      helperText={helper}
      onFocus={onFocus}
    />
  );
};

TextInput.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  error: PropTypes.bool,
  value: PropTypes.string.isRequired,
  helper: PropTypes.string,
  onFocus: PropTypes.func.isRequired,
};

TextInput.defaultProps = {
  helper: undefined,
  error: undefined,
};

export default TextInput;
