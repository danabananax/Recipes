import React from 'react';
import { Button } from '@mui/material';
import { useAuth } from '../../contexts/AuthContext';

const SignoutButton = () => {
  const { signout } = useAuth();
  return (
    <Button onClick={signout}>
      Signout
    </Button>
  );
};

export default SignoutButton;
