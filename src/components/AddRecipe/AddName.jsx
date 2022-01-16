import React from 'react';
import PropTypes from 'prop-types';
import { TextField, Typography } from '@mui/material';

const AddName = ({ setRecipeName, recipeName }) => (
  <>
    <Typography variant="h4" sx={{ pb: 4 }}>
      Enter Recipe Name
    </Typography>
    <TextField
      variant="outlined"
      label="Name"
      autoFocus
      onChange={(event) => setRecipeName(event.target.value)}
      value={recipeName}
    />
  </>
);

AddName.propTypes = {
  setRecipeName: PropTypes.func.isRequired,
  recipeName: PropTypes.string.isRequired,
};

export default AddName;
