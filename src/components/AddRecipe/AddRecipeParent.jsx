import React, { useState } from 'react';
import { Button } from '@mui/material';

const AddRecipeParent = () => {
  const [step, setStep] = useState(1);
  // const [recipeName, setRecipeName] = useState("");
  // const [ingredients, setIngredients] = useState({});
  // const [method, setMethod] = useState([]);

  const incrementStep = () => setStep(step + 1);
  const decrementStep = () => setStep(step - 1);

  return (
    <>
      <div>{step}</div>
      {step < 4
        && <Button onClick={incrementStep}>Next</Button>}
      {
        step > 0 && <Button onClick={decrementStep}>Back</Button>
      }
    </>
  );
};

export default AddRecipeParent;
