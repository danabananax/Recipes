import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { TextField, Typography } from '@mui/material';

const AddMethod = ({ recipeName, method, setMethod }) => {
  const [tempMethod, setTempMethod] = useState('');

  const submitMethod = (e) => {
    e.preventDefault();
    setMethod([...method, tempMethod]);
  };

  return (
    <form onSubmit={submitMethod}>
      <Typography variant="h4" sx={{ pb: 2 }}>
        {recipeName}
      </Typography>
      <Typography variant="h7" sx={{ mb: 4 }}>
        Method
      </Typography>
      <TextField
        variant="outlined"
        label="Method"
        value={tempMethod}
        onChange={(e) => setTempMethod(e.target.value)}
        autoFocus
        multiline
      />
      {method.map((methodStep, idx) => (
        <Typography variant="h7" key={methodStep}>
          {`${idx + 1}, methodStep`}
        </Typography>
      ))}
    </form>
  );
};

AddMethod.propTypes = {
  recipeName: PropTypes.string.isRequired,
  method: PropTypes.arrayOf(PropTypes.string).isRequired,
  setMethod: PropTypes.func.isRequired,
};

export default AddMethod;
