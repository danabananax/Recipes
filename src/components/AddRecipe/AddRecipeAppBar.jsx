import React from 'react';
import PropTypes from 'prop-types';
import {
  Button, AppBar, Toolbar, IconButton, Typography,
} from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Link } from 'react-router-dom';

const AddRecipeAppBar = ({ incrementStep, decrementStep, step }) => (
  <AppBar color="transparent" elevation={0}>
    <Toolbar>
      <IconButton component={Link} to="/home">
        <ArrowBackIcon />
      </IconButton>
      <Typography variant="h6" sx={{ flexGrow: 1, textAlign: 'left', pl: 2 }}>
        Add Recipe
      </Typography>
      <Button
        onClick={decrementStep}
        disabled={step < 2}
      >
        Back
      </Button>
      <Button
        onClick={incrementStep}
        disabled={step > 3}
      >
        Next
      </Button>
    </Toolbar>
  </AppBar>
);

AddRecipeAppBar.propTypes = {
  incrementStep: PropTypes.func.isRequired,
  decrementStep: PropTypes.func.isRequired,
  step: PropTypes.number.isRequired,
};

export default AddRecipeAppBar;
