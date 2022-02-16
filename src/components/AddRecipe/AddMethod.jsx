import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { TextField, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';


const AddMethod = ({ recipeName, method, setMethod }) => {
  const [tempMethod, setTempMethod] = useState('');

  const submitMethod = (e) => {
    e.preventDefault();
    setMethod([...method, tempMethod]);
    setTempMethod('');
  };

  const MethodForm = styled('form')({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  });

  const MethodListContainer = styled('div')({
    width: '300px',
    marginTop: '2em',
  });

  return (
    <MethodForm onSubmit={submitMethod}>
      <Typography variant="h3" sx={{ pb: 2 }}>
        {recipeName}
      </Typography>
      <Typography variant="h4" sx={{ mb: 4 }}>
        Method
      </Typography>
      <TextField
        variant="outlined"
        label="Method"
        value={tempMethod}
        onChange={(e) => setTempMethod(e.target.value)}
        autoFocus
      />
      <MethodListContainer>
         {method.map((methodStep, idx) => (
            <Typography 
              variant="h6" 
              key={methodStep} 
              align="justify"
            >
              {`${idx + 1}. ${methodStep}`}
            </Typography>
        ))}
      </MethodListContainer>
    </MethodForm>
  );
};

AddMethod.propTypes = {
  recipeName: PropTypes.string.isRequired,
  method: PropTypes.arrayOf(PropTypes.string).isRequired,
  setMethod: PropTypes.func.isRequired,
};

export default AddMethod;
