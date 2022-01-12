import React from 'react';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';

const SignoutButton = () => (
  <Button component={Link} to="/add-recipe">
    Add Recipe
  </Button>
);

export default SignoutButton;
