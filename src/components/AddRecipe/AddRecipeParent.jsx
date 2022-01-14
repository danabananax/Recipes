import React, { useState } from 'react';
import { Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import AddName from './AddName';
// import AddIngredients from './AddIngredients';
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
      {recipeName}
      { step > 1 && <Button onClick={decrementStep}>Back</Button> }
      { step < 4 && <Button onClick={incrementStep}>Next</Button> }
      { step === 1 && <AddName setRecipeName={setRecipeName} /> }
    </AddRecipeContainer>
  );
};

export default AddRecipeParent;
