import React from 'react';
import PropTypes from 'prop-types';
import { Grid } from '@material-ui/core';
import TextInput from '../TextInput';

const AuthInput = ({
  id,
  label,
  type,
  onChange,
  error,
  value,
  helper = undefined,
  onFocus,
}) => (
  <Grid item>
    <TextInput
      id={id}
      label={label}
      onChange={onChange}
      value={value}
      type={type}
      error={error}
      helperText={helper}
      onFocus={onFocus}
    />
  </Grid>
);

AuthInput.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  error: PropTypes.bool.isRequired,
  value: PropTypes.string.isRequired,
  helper: PropTypes.string,
  onFocus: PropTypes.func.isRequired,
};

AuthInput.defaultProps = {
  helper: undefined,
};

export default AuthInput;
