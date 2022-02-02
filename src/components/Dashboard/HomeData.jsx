import React, { useState, useEffect } from 'react';
import { makeStyles } from '@mui/styles';
import { CircularProgress } from '@mui/material';
import PropTypes from 'prop-types';
import { database } from '../../firebase';
import RecipeBubble from './RecipeBubble';
import NoDataText from './NoDataText';

const useStyles = makeStyles((theme) => ({
  root: {
    [theme.breakpoints.down('md')]: {
      padding: '2em',
      textAlign: 'center',
    },
  },
  recipeContainer: {
    display: 'flex',
    flexFlow: 'row wrap',
    [theme.breakpoints.down('md')]: {
      flexFlow: 'column nowrap',
      alignItems: 'center',
    },
  },
}));

const HomeData = ({ loadingUser, currentUser }) => {
  const classes = useStyles();
  const [loadingData, setLoadingData] = useState(true);
  const [recipeList, setRecipeList] = useState(); // list of recipe objects

  useEffect(() => {
    if (loadingUser || !currentUser) return {};
    const userRecipesRef = database.ref(`users/${currentUser.uid}`); // list of user-made recipes
    const listener = userRecipesRef.on('value', (snapshot) => {
      if (snapshot.exists()) {
        setRecipeList(Object.values(snapshot.val()));
        setLoadingData(false);
      } else {
        setRecipeList([]);
        setLoadingData(false);
      }
    });
    // removing listener on dismount
    return () => { userRecipesRef.off('value', listener); };
  }, [loadingUser, currentUser]);

  if (loadingData) return <CircularProgress />;

  return (
    <div className={classes.root}>
      {recipeList.length === 0
        ? <NoDataText />
        : (
          <div className={classes.recipeContainer}>
            {recipeList.map((recipe) => <RecipeBubble key={recipe.name} recipe={recipe} />)}
          </div>
        )}
    </div>
  );
};

HomeData.propTypes = {
  currentUser: PropTypes.objectOf(PropTypes.string).isRequired,
  loadingUser: PropTypes.bool.isRequired,
};

export default HomeData;
