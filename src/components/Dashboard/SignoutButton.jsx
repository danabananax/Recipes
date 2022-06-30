import React from 'react';
import { Button, Typography } from '@mui/material';
import { auth } from '../../firebase';
import { signOut } from 'firebase/auth';

const SignoutButton = () => {
  return (
    <Button onClick={() => {signOut(auth)}} variant="outlined">
      <Typography variant="h6">Signout</Typography>
    </Button>
  );
};

export default SignoutButton;
