import React from 'react';
import PropTypes from 'prop-types';
import { TextField } from '@mui/material';

const AddName = ({ setRecipeName }) => (
  <div>
    <p>AddName</p>
    <TextField
      variant="outlined"
      label="Recipe Name"
      autoFocus
      onChange={(event) => setRecipeName(event.target.value)}
    />
  </div>
);

AddName.propTypes = {
  setRecipeName: PropTypes.func.isRequired,
};

export default AddName;
