import React from 'react';
import { Button, Typography } from '@mui/material';
import { useAuth } from '../../contexts/AuthContext';

const SignoutButton = () => {
  const { signout } = useAuth();
  return (
    <Button onClick={signout} variant="outlined">
      <Typography variant="h5">Signout</Typography>
    </Button>
  );
};

export default SignoutButton;
