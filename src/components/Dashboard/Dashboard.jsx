import { styled } from '@mui/system';
import React from 'react';
import { Redirect } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import DashboardWelcome from './DashboardWelcome';
import SignoutButton from './SignoutButton';
import AddRecipeBtn from './AddRecipeBtn';
import HomeData from './HomeData';

const DashboardContainer = styled('div')(({ theme }) => ({
  [theme.breakpoints.up('lg')]: {
    padding: theme.spacing(12),
  },
  [theme.breakpoints.down('lg')]: {
    padding: theme.spacing(8)
  },
  [theme.breakpoints.down('md')]: {
    padding: theme.spacing(4)
  },
  [theme.breakpoints.down('sm')]: {
    padding: theme.spacing(2)
  }
}));

const Dashboard = () => {
  const { currentUser, loading: loadingUser } = useAuth();

  // redirects back to auth on signout
  if (currentUser === null) return <Redirect to="auth/login" />;

  return (
    <DashboardContainer>
      <DashboardWelcome userEmail={currentUser.email} />
      <SignoutButton />
      <AddRecipeBtn />
      <HomeData
        loadingUser={loadingUser}
        currentUser={currentUser}
      />
    </DashboardContainer>
  );
};

export default Dashboard;
