import React from 'react';
import PropTypes from 'prop-types';
import {
  Button, AppBar, Toolbar, IconButton, Typography,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { Link } from 'react-router-dom';

const AddRecipeAppBar = ({ incrementStep, decrementStep, step }) => (
  <AppBar color="transparent" elevation={0} sx={{ p: 3 }}>
    <Toolbar>
      <IconButton component={Link} to="/home" size="large">
        <CloseIcon />
      </IconButton>
      <Typography variant="h5" sx={{ flexGrow: 1, textAlign: 'left', pl: 2 }}>
        Add Recipe
      </Typography>
      <Button
        onClick={decrementStep}
        disabled={step < 2}
        size="large"
      >
        Back
      </Button>
      <Button
        onClick={incrementStep}
        disabled={step > 3}
        size="large"
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
