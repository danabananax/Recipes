import React from 'react';
import PropTypes from 'prop-types';
import { TextField, Typography } from '@mui/material';

const AddMethod = ({ recipeName }) => (
  <>
    <Typography variant="h4" sx={{ pb: 2 }}>
      {recipeName}
    </Typography>
    <Typography variant="h7" sx={{ pb: 4 }}>
      Method
    </Typography>
    <TextField
      variant="outlined"
      label="Method"
      autoFocus
      multiline
    />
  </>
);

AddMethod.propTypes = {
  recipeName: PropTypes.string.isRequired,
};

export default AddMethod;
