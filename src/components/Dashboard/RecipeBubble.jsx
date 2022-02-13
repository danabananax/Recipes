import React from 'react';
import { Button, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import PropTypes from 'prop-types';

const RecipeButton = styled(Button)(({ theme }) => ({
  color: theme.palette.secondary.contrastText,
  backgroundColor: theme.palette.secondary.main,
  '&:hover': {
    backgroundColor: theme.palette.secondary.dark,
  },
  '&:active': {
    backgroundColor: theme.palette.secondary.main,
  }
}))

const RecipeBubble = ({ name }) => {
  return (
    <RecipeButton sx={{ p: 4, mr: 4, mt: 4 }} variant="contained">
      <Typography variant="h4">
        {name}
      </Typography>
    </RecipeButton>
  );
};

RecipeBubble.propTypes = {
  name: PropTypes.string.isRequired,
};

export default RecipeBubble;
