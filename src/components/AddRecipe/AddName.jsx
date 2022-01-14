import React from 'react';
import PropTypes from 'prop-types';
import { TextField, Typography } from '@mui/material';

const AddName = ({ setRecipeName, recipeName }) => (
  <div>
    <Typography variant="h5" sx={{ pb: 2 }}>
      Enter Recipe Name
    </Typography>
    <TextField
      variant="outlined"
      label="Recipe Name"
      autoFocus
      onChange={(event) => setRecipeName(event.target.value)}
      value={recipeName}
    />
  </div>
);

AddName.propTypes = {
  setRecipeName: PropTypes.func.isRequired,
  recipeName: PropTypes.string.isRequired,
};

export default AddName;
