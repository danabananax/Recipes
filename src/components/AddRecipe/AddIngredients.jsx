import React from 'react';
import PropTypes from 'prop-types';
import { Typography, TextField } from '@mui/material';
import { styled } from '@mui/material/styles';

const IngredientInputContainer = styled('div')({
  display: 'flex',
  justifyContent: 'space-between',
});

const AddIngredients = ({ recipeName }) => (
  <>
    <Typography variant="h4" sx={{ pb: 2 }}>
      {recipeName}
    </Typography>
    <Typography variant="h7" sx={{ pb: 4 }}>
      Ingredients
    </Typography>
    <IngredientInputContainer>
      <TextField
        sx={{ mr: 2 }}
        variant="outlined"
        label="Ingredient"
        autoFocus
      />
      <TextField
        sx={{ ml: 2 }}
        variant="outlined"
        label="Quantity"
      />
    </IngredientInputContainer>
  </>
);

AddIngredients.propTypes = {
  recipeName: PropTypes.string.isRequired,
};

export default AddIngredients;
