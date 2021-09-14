import React from 'react';
import {
  Typography,
  Button,
  makeStyles,
} from '@material-ui/core';
import PropTypes from 'prop-types';
import { useAuth } from '../contexts/AuthContext';
import RecipeBubble from './RecipeBubble';

const useStyles = makeStyles((theme) => ({
  root: {
    [theme.breakpoints.down('sm')]: {
      padding: '2em',
      textAlign: 'center',
    },
  },
  responsiveBold: {
    fontWeight: 500,
    overflow: 'clip',
    textOverflow: 'ellipsis',
  },
  recipeContainer: {
    display: 'flex',
    flexFlow: 'row wrap',
    [theme.breakpoints.down('sm')]: {
      flexFlow: 'column nowrap',
      alignItems: 'center',
    },
  },
  topSpacing: {
    marginTop: theme.spacing(2),
    marginRight: theme.spacing(2),
  },
}));

const HomeData = ({ handleOpen, recipeList }) => {
  const { currentUser, signout } = useAuth();
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Typography variant="h2" className={classes.responsiveBold}>
        {`Hey ${currentUser.email}, welcome!`}
      </Typography>
      <Button
        onClick={handleOpen}
        size="large"
        variant="contained"
        color="primary"
        className={classes.topSpacing}
      >
        Add recipe
      </Button>
      <Button
        onClick={signout}
        className={classes.topSpacing}
      >
        Signout
      </Button>
      {recipeList.length === 0
        ? (
          <Typography variant="h3" className={classes.topSpacing}>
            Sorry, it looks like you dont have any recipes to display.
          </Typography>
        )
        : (
          <div className={classes.recipeContainer}>
            {recipeList.map((recipe) => <RecipeBubble key={recipe.name} recipe={recipe} />)}
          </div>
        )}
    </div>
  );
};

HomeData.propTypes = {
  handleOpen: PropTypes.func.isRequired,
  recipeList: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default HomeData;
