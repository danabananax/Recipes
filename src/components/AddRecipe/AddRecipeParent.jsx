import React, { useState } from 'react';
import {
  Button, AppBar, Toolbar, IconButton, Typography,
} from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { styled } from '@mui/material/styles';
import { Link } from 'react-router-dom';
import AddName from './AddName';
import AddIngredients from './AddIngredients';
// import AddMethod from './AddMethod';

const AddRecipeContainer = styled('div')({
  minHeight: '100vh',
  maxWidth: '100%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  textAlign: 'center',
  alignItems: 'center',
});

const AddRecipeParent = () => {
  const [step, setStep] = useState(1);
  const [recipeName, setRecipeName] = useState('');
  // const [ingredients, setIngredients] = useState({});
  // const [method, setMethod] = useState([]);

  const incrementStep = () => setStep(step + 1);
  const decrementStep = () => setStep(step - 1);

  return (
    <AddRecipeContainer>
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
      { step === 1 && <AddName setRecipeName={setRecipeName} recipeName={recipeName} /> }
      { step === 2 && <AddIngredients recipeName={recipeName} /> }
    </AddRecipeContainer>
  );
};

export default AddRecipeParent;
