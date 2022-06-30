import React from 'react';
import PropTypes from 'prop-types';
import { Typography } from '@mui/material';
import { styled } from '@mui/styles';

const IngredientContainer = styled('div')({
    minWidth: '350px',
})

const IngredientListItem = styled('div')({
    display: 'flex',
    justifyContent: 'space-between',
    sx: { my: 2 },
})

const ViewRecipeIngredients = ({ recipeIngredients }) => (
    <IngredientContainer>
        { Object.keys(recipeIngredients)?.map((ingredient, idx) => (
            <IngredientListItem key={ingredient}>
                <Typography variant="h5">
                    {ingredient}
                </Typography>
                <Typography variant="h5">
                    {recipeIngredients[ingredient]}
                </Typography>
            </IngredientListItem>
        ))}
    </IngredientContainer>
);

export default ViewRecipeIngredients;