import { makeStyles, Dialog, CircularProgress } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { Redirect } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { database } from '../firebase';
import HomeNoData from './HomeNoData';
import HomeData from './HomeData';
import AddRecipe from './AddRecipe';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(12),
  },
}));

const Dashboard = () => {
  const { currentUser } = useAuth();
  const [recipeList, setRecipeList] = useState(null); // list of recipe objects
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const classes = useStyles();

  const handleClose = () => { setOpen(false); };
  const handleOpen = () => { setOpen(true); };

  useEffect(() => {
    if (currentUser !== undefined) {
      const userRecipesRef = database.ref(`users/${currentUser.uid}`); // list of recipes by user
      userRecipesRef.on('value', (snapshot) => {
        const data = snapshot.val();
        setRecipeList(Object.values(data));
        setLoading(false);
        return userRecipesRef.off();
      });
    }
    return undefined;
  }, [currentUser]);

  return currentUser === null ? <Redirect to="/auth/login" /> : (
    /* eslint-disable no-nested-ternary */
    <div className={classes.root}>
      {!loading
        ? !recipeList
          ? (
            <HomeNoData
              handleOpen={handleOpen}
            />
          )
          : (
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
