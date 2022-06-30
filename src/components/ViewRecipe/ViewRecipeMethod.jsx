import React from 'react';
import PropTypes from 'prop-types';
import { Typography } from '@mui/material';
import { styled } from '@material-ui/styles';

const RecipeMethodContainer = styled('div')({
    maxWidth: '25%',
}) 

const ViewRecipeMethod = ({ recipeMethod }) => (
    <RecipeMethodContainer>
        { recipeMethod?.map((step, idx) => (
            <Typography key={step} variant="h5" sx={{ my: 2 }}>
                {idx+1}. {step}
            </Typography>
        ))}
    </RecipeMethodContainer>
);

ViewRecipeMethod.propTypes = {
    recipeMethod: PropTypes.arrayOf(PropTypes.string).isRequired,
}

export default ViewRecipeMethod;