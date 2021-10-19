import React from 'react';
import PropTypes from 'prop-types';
import { TextField } from '@mui/material';

const TextInput = ({
  id,
  label,
  type,
  onChange,
  error,
  value,
  helper = undefined,
  onFocus,
}) => (
  <TextField
    id={id}
    size="medium"
    label={label}
    onChange={onChange}
    value={value}
    InputProps={{ style: { fontWeight: 500 } }}
    InputLabelProps={{ shrink: false }}
    type={type}
    autoComplete="new-password"
    error={error}
    helperText={helper ?? ' '}
    onFocus={onFocus}
  />
);

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
