import React from 'react';
import { Button, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

const AddRecipeBtn = () => (
  <Button 
    component={Link} 
    to="/add-recipe" 
    variant="contained"
    sx={{ m: 2 }}
  >
    <Typography variant="h6">
      Add Recipe
    </Typography>
  </Button>
);

export default AddRecipeBtn;
