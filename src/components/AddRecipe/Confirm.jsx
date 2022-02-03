import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Typography, Button } from '@mui/material';
import { styled } from '@mui/system';
import { SpaceBetweenContainer } from './AddIngredients';
import { database } from '../../firebase';
import { useAuth } from '../../contexts/AuthContext';

const RecipeDataContainer = styled('div')({
    width: '350px',
})

const Confirm = ({ recipeIngredients, recipeName, recipeMethod }) => {
    const { currentUser } = useAuth();

    const [recipeSubmitted, setRecipeSubmitted] = useState(false)

    const submitRecipe = () => {
        const userDataRef = database.ref('users/' + currentUser.uid)
        const newRecipeRef = userDataRef.push();
        newRecipeRef.set({
            name: recipeName,
            method: recipeMethod,
            ingredients: recipeIngredients,
        });

        newRecipeRef.once('value').then(setRecipeSubmitted(true));
    }
 
    return (
    <>
        <Typography variant="h2" gutterBottom>
            {`Confirm ${recipeName}`}
        </Typography>
       <Typography variant="h3" gutterBottom>
           Ingredients
       </Typography>
       <RecipeDataContainer>
           {Object.keys(recipeIngredients).map((ingredient) => (
               <SpaceBetweenContainer key={ingredient}>
                   <Typography variant="h5">{ingredient}</Typography>
                   <Typography variant="h5">{recipeIngredients[ingredient]}</Typography>
               </SpaceBetweenContainer>
           ))}
       </RecipeDataContainer>
       <Typography variant="h3" sx={{ my: 2 }}>
           Method
       </Typography>
       <RecipeDataContainer>
           {recipeMethod.map((recipeStep, idx) => (
               <Typography 
                variant="h5" 
                key={recipeStep} 
                gutterBottom
                >
                   {`${idx+1}. ${recipeStep}`}
               </Typography>
           ))}
       </RecipeDataContainer>
       <Button 
        variant="contained"
        size="large"
        sx={{ width: .5, my: 4 }}
        disabled={recipeSubmitted}
        onClick={submitRecipe}
       >
           Confirm
       </Button>
    </>
)};

Confirm.propTypes = {
  recipeName: PropTypes.string.isRequired,
  recipeIngredients: PropTypes.objectOf(PropTypes.string).isRequired,
  recipeMethod: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Confirm;
