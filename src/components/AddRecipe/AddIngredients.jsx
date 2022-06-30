import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Typography, TextField, Button } from '@mui/material';
import { styled } from '@mui/material/styles';

const SpaceBetweenContainer = styled('div')({
  display: 'flex',
  justifyContent: 'space-between',
});

const IngredientContainer = styled('div')({
  width: '300px',
  marginTop: '2em',
});

const AddIngredients = ({ recipeName, ingredients, setIngredients }) => {
  const [tempIngredient, setTempIngredient] = useState('');
  const [tempQuantity, setTempQuantity] = useState('');

  const submitIngredients = (e) => {
    e.preventDefault();
    const tempPair = {};
    tempPair[tempIngredient] = tempQuantity === '' ? '-' : tempQuantity;
    setIngredients({
      ...ingredients,
      ...tempPair,
    });
    // resets the fields
    setTempIngredient("");
    setTempQuantity("");
  };

  return (
    <>
      <Typography variant="h3" sx={{ pb: 2 }}>
        {recipeName}
      </Typography>
      <Typography variant="h4" sx={{ mb: 4 }}>
        Ingredients
      </Typography>
      <SpaceBetweenContainer sx={{ width: '400px' }}>
        <TextField
          sx={{ mr: 2 }}
          variant="outlined"
          label="Ingredient"
          value={tempIngredient}
          onChange={(e) => setTempIngredient(e.target.value)}
          autoFocus
        />
        <TextField
          sx={{ ml: 2 }}
          variant="outlined"
          label="Quantity"
          value={tempQuantity}
          onChange={(e) => setTempQuantity(e.target.value)}
        />
      </SpaceBetweenContainer>
      <Button 
        onClick={submitIngredients} 
        variant="contained"
        sx={{ my: 2 }}>
        Submit
      </Button>
      <IngredientContainer>
        {Object.keys(ingredients).map((ingredient) => (
          <SpaceBetweenContainer key={ingredient}>
            <Typography variant="h5">{ingredient}</Typography>
            <Typography variant="h5">{ingredients[ingredient]}</Typography>
          </SpaceBetweenContainer>
        ))}
      </IngredientContainer>
    </>
  );
};

AddIngredients.propTypes = {
  recipeName: PropTypes.string.isRequired,
  ingredients: PropTypes.objectOf(PropTypes.string).isRequired,
  setIngredients: PropTypes.func.isRequired,
};

export default AddIngredients;
export {SpaceBetweenContainer};
