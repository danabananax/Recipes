import React from 'react';
import { Button, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

const SignoutButton = () => (
  <Button 
    component={Link} 
    to="/add-recipe" 
    variant="contained"
    sx={{ mx: 2 }}
  >
    <Typography variant="h5">
      Add Recipe
    </Typography>
  </Button>
);

export default SignoutButton;
