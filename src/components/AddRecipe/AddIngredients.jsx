import React from 'react';
import PropTypes from 'prop-types';
import { Typography } from '@mui/material';

const AddIngredients = ({ recipeName }) => (
  <div>
    <Typography variant="h3" sx={{ pb: 2 }}>
      {recipeName}
    </Typography>
  </div>
);

AddIngredients.propTypes = {
  recipeName: PropTypes.string.isRequired,
};

export default AddIngredients;
