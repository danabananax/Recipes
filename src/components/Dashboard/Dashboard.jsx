import { styled } from '@mui/system';
import React from 'react';
import { Redirect } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import DashboardWelcome from './DashboardWelcome';
import SignoutButton from './SignoutButton';
import AddRecipeBtn from './AddRecipeBtn';
import HomeData from './HomeData';

const DashboardContainer = styled('div')(({ theme }) => ({
  padding: theme.spacing(8),
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
