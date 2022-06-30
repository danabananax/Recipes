import React, { useState, useEffect } from 'react';
import { makeStyles } from '@mui/styles';
import { CircularProgress } from '@mui/material';
import PropTypes from 'prop-types';
import { getDatabase, ref, onValue, off } from 'firebase/database';
import RecipeButton from './RecipeButton';
import NoDataText from './NoDataText';

const useStyles = makeStyles((theme) => ({
  root: {
    [theme.breakpoints.down('md')]: {
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

const HomeData = ({ currentUser }) => {
  const classes = useStyles();
  const [loadingData, setLoadingData] = useState(true);
  const [recipeList, setRecipeList] = useState(); // list of recipe objects

  useEffect(() => {
    const database = getDatabase();
    const userRecipesRef = ref(database, `users/${currentUser.uid}`); // list of user-made recipes
    const listener = onValue(userRecipesRef, (snapshot) => {
      if (snapshot.exists()) {
        setRecipeList(snapshot.val());
        setLoadingData(false);
      } else {
        setRecipeList([]);
        setLoadingData(false);
      }
    });
    return () => {off(listener)};
  }, [currentUser]);

  if (loadingData) return <CircularProgress />;

  return (
    <div className={classes.root}>
      {recipeList.length === 0
        ? <NoDataText />
        : (
          <div className={classes.recipeContainer}>
            {Object.keys(recipeList).map((recipeId) => (
              <RecipeButton 
                key={recipeId}
                id={recipeId}
                name={recipeList[recipeId].name}/>
            ))}
          </div>
        )}
    </div>
  );
};

HomeData.propTypes = {
  currentUser: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default HomeData;
