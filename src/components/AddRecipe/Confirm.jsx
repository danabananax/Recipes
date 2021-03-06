import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import { Typography, Button, Snackbar } from '@mui/material';
import { styled } from '@mui/system';
import { getDatabase, ref, push, set, onValue } from 'firebase/database';
import { SpaceBetweenContainer } from './AddIngredients';


const RecipeDataContainer = styled('div')({
    width: '350px',
})

const Confirm = ({ recipeIngredients, recipeName, recipeMethod, userId }) => {
    const [recipeSubmitted, setRecipeSubmitted] = useState(false);
    const [successMsgOpen, setSuccessMsgOpen] = useState(false);

    const handleClose = () => setSuccessMsgOpen(false);

    const submitRecipe = () => {
        const database = getDatabase();
        const userRecipeRef = ref(database, 'users/' + userId)
        const newRecipeRef = push(userRecipeRef);
        set(newRecipeRef, {
            name: recipeName,
            method: recipeMethod,
            ingredients: recipeIngredients,
        })
        .then(() => {
            setRecipeSubmitted(true);
            setSuccessMsgOpen(true);
        })
        .catch((error) => {
            console.log(error);
        });
    }
    // if(recipeSubmitted) return <Redirect to="/home" />;

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
                align='justify'
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
       <Snackbar
        open={successMsgOpen}
        autoHideDuration={2000}
        onClose={handleClose}
        message="Successfully added recipe."
        anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'center'
        }}
       />
    </>
)}; 

Confirm.propTypes = {
  recipeName: PropTypes.string.isRequired,
  recipeIngredients: PropTypes.objectOf(PropTypes.string).isRequired,
  recipeMethod: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Confirm;
