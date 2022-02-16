import React, { useEffect } from 'react';
import { Button, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const ViewRecipeButton = styled(Button)(({ theme }) => ({
  color: theme.palette.secondary.contrastText,
  backgroundColor: theme.palette.secondary.main,
  '&:hover': {
    backgroundColor: theme.palette.secondary.dark,
  },
  '&:active': {
    backgroundColor: theme.palette.secondary.main,
  }
}))

const RecipeButton = ({ name, id }) => {
  return (
    <ViewRecipeButton // Navigates to view page for clicked recipe
      component={Link}
      to={`/view-recipe/${id}`}
      variant="contained"
      sx={{ p: 4, mr: 4, mt: 4 }}
    >
      <Typography variant="h4">
        {name}
      </Typography>
    </ViewRecipeButton>
  );
};

RecipeButton.propTypes = {
  name: PropTypes.string.isRequired,
};

export default RecipeButton;
