import { Dialog, CircularProgress } from '@mui/material';
import { styled } from '@mui/system';
import React, { useEffect, useState } from 'react';
import { Redirect } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { database } from '../firebase';
import HomeData from './HomeData';
import AddRecipe from './AddRecipe';

const DashboardContainer = styled('div')(({ theme }) => ({
  padding: theme.spacing(3),
}));

const Dashboard = () => {
  const { currentUser, loading: loadingUser } = useAuth();
  const [recipeList, setRecipeList] = useState(); // list of recipe objects
  const [open, setOpen] = useState(false);
  const [loadingData, setLoadingData] = useState(true);

  const handleClose = () => { setOpen(false); };
  const handleOpen = () => { setOpen(true); };

  useEffect(() => {
    if (loadingUser) return {};
    if (!currentUser) return {};
    const userRecipesRef = database.ref(`users/${currentUser?.uid}`); // list of recipes by user
    const listener = userRecipesRef.on('value', (snapshot) => {
      if (!snapshot.exists()) {
        setRecipeList([]);
        setLoadingData(false);
      } else {
        setRecipeList(Object.values(snapshot.val()));
        setLoadingData(false);
      }
    });

    return () => { userRecipesRef.off('value', listener); };
  }, [loadingUser, currentUser]);

  if (currentUser === null) {
    return <Redirect to="auth/login" />;
  }
  return (
    <DashboardContainer>
      {!loadingData
        ? (
          <HomeData
            handleOpen={handleOpen}
            currentUSer={currentUser}
            recipeList={recipeList}
          />
        )
        : <CircularProgress />}
      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
      >
        <AddRecipe
          handleClose={handleClose}
        />
      </Dialog>
    </DashboardContainer>
  );
};

export default Dashboard;
