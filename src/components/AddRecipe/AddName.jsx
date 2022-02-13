import React from 'react';
import PropTypes from 'prop-types';
import { TextField, Typography } from '@mui/material';

const AddName = ({ setRecipeName, recipeName, incrementStep }) => (
  <form onSubmit={incrementStep}>
    <Typography variant="h3" sx={{ pb: 4 }}>
      Enter Recipe Name
    </Typography>
    <TextField
      variant="outlined"
      label="Name"
      autoFocus
      onChange={(event) => setRecipeName(event.target.value)}
      value={recipeName}
    />
  </form>
);

AddName.propTypes = {
  setRecipeName: PropTypes.func.isRequired,
  recipeName: PropTypes.string.isRequired,
  incrementStep: PropTypes.func.isRequired,
};

export default AddName;
