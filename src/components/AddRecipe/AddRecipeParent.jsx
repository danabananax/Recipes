import React, { useState } from 'react';
import { styled } from '@mui/material/styles';
import AddRecipeAppBar from './AddRecipeAppBar';
import AddName from './AddName';
import AddIngredients from './AddIngredients';
import AddMethod from './AddMethod';

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

const AddRecipeParent = () => {
  const [step, setStep] = useState(1);
  const [recipeName, setRecipeName] = useState('');
  // const [ingredients, setIngredients] = useState({});
  // const [method, setMethod] = useState([]);

  const incrementStep = () => setStep(step + 1);
  const decrementStep = () => setStep(step - 1);

  return (
    <AddRecipeContainer>
      <AddRecipeAppBar
        incrementStep={incrementStep}
        decrementStep={decrementStep}
        step={step}
      />
      <StepContainer>
        { step === 1 && <AddName setRecipeName={setRecipeName} recipeName={recipeName} /> }
        { step === 2 && <AddIngredients recipeName={recipeName} /> }
        { step === 3 && <AddMethod recipeName={recipeName} /> }
      </StepContainer>
    </AddRecipeContainer>
  );
};

export default AddRecipeParent;
