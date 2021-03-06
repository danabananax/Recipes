import React, { useState } from 'react';
import { styled } from '@mui/material/styles';
import AddRecipeAppBar from './AddRecipeAppBar';
import AddName from './AddName';
import AddIngredients from './AddIngredients';
import AddMethod from './AddMethod';
import Confirm from './Confirm';

const AddRecipeContainer = styled('div')(({ theme }) => ({
  padding: theme.spacing(16),
  minHeight: '100%',
  maxWidth: '100%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  textAlign: 'center',
  alignItems: 'center',
}));

const StepContainer = styled('div')({
  width: '40%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
});

const AddRecipeParent = ({ userId }) => {
  const [step, setStep] = useState(1);
  const [recipeName, setRecipeName] = useState('');
  const [ingredients, setIngredients] = useState({});
  const [method, setMethod] = useState([]);

  const incrementStep = (event) => {
    event.preventDefault();
    setStep(step + 1);
  };
  const decrementStep = (event) => {
    event.preventDefault();
    setStep(step - 1);
  };

  return (
    <AddRecipeContainer>
      <AddRecipeAppBar
        incrementStep={incrementStep}
        decrementStep={decrementStep}
        step={step}
      />
      <StepContainer>
        { step === 1 && (
          <AddName
            setRecipeName={setRecipeName}
            recipeName={recipeName}
            incrementStep={incrementStep}
          />
        ) }
        { step === 2 && (
          <AddIngredients
            recipeName={recipeName}
            ingredients={ingredients}
            setIngredients={setIngredients}
          />
        ) }
        { step === 3 && (
          <AddMethod
            recipeName={recipeName}
            method={method}
            setMethod={setMethod}
          />
        ) }
        { step === 4 && (
          <Confirm
            recipeName={recipeName}
            recipeIngredients={ingredients}
            recipeMethod={method}
            userId={userId}
          />
        )}
      </StepContainer>
    </AddRecipeContainer>
  );
};

export default AddRecipeParent;
