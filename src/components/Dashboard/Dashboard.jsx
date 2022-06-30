import { styled } from '@mui/system';
import React from 'react';
// import { useAuth } from '../../contexts/AuthContext';
import DashboardWelcome from './DashboardWelcome';
import SignoutButton from './SignoutButton';
import AddRecipeBtn from './AddRecipeBtn';
import HomeData from './HomeData';

const DashboardContainer = styled('div')(({ theme }) => ({
  backgroundColor: theme.palette.secondary.main,
  height: '100vh',
  [theme.breakpoints.up('lg')]: {
    padding: theme.spacing(16),
  },
  [theme.breakpoints.down('lg')]: {
    padding: theme.spacing(12)
  },
  [theme.breakpoints.down('md')]: {
    padding: theme.spacing(4)
  },
  [theme.breakpoints.down('sm')]: {
    padding: theme.spacing(2)
  }
}));

const Dashboard = ({ currentUser }) => {

  // redirects back to auth on signout
  // if (!currentUser) return <Redirect to="auth/login" />;
  return (
    <DashboardContainer>
      { currentUser && <DashboardWelcome userEmail={currentUser.email}/> }
      <SignoutButton />
      <AddRecipeBtn/>
      {
      currentUser && <HomeData
        currentUser={currentUser}
      />
      }
    </DashboardContainer>
  );
};

export default Dashboard;
