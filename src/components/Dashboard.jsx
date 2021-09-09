import { makeStyles, Dialog, CircularProgress } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { Redirect } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { database } from '../firebase';
import HomeData from './HomeData';
import AddRecipe from './AddRecipe';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(12),
  },
}));

const Dashboard = () => {
  const { currentUser, loading: loadingUser } = useAuth();
  const [recipeList, setRecipeList] = useState(); // list of recipe objects
  const [open, setOpen] = useState(false);
  const [loadingData, setLoadingData] = useState(true);
  const classes = useStyles();

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
        return;
      }
      setRecipeList(Object.values(snapshot.val()));
      setLoadingData(false);
    });

    return () => { userRecipesRef.off('value', listener); };
  }, [loadingUser, currentUser]);

  return currentUser === null ? <Redirect to="/auth/login" /> : (
    /* eslint-disable no-nested-ternary */
    <div className={classes.root}>
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
    </div>
  );
};

export default Dashboard;
