import React from 'react';
import {
  Typography,
  Card,
  Button,
  makeStyles,
} from '@material-ui/core';
import PropTypes from 'prop-types';
import { useAuth } from '../contexts/AuthContext';

const useStyles = makeStyles((theme) => ({
  bold: {
    fontWeight: 500,
  },
  recipeCard: {
    marginTop: theme.spacing(2),
    marginRight: theme.spacing(2),
    padding: theme.spacing(2),
  },
  recipeContainer: {
    display: 'flex',
  },
  topSpacing: {
    marginTop: theme.spacing(2),
    marginRight: theme.spacing(2),
    marginBottom: theme.spacing(2),
  },
}));

const HomeData = ({ handleOpen, recipeList }) => {
  const { currentUser, signout } = useAuth();
  const classes = useStyles();
  return (
    <>
      <Typography variant="h2" className={classes.bold}>
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
            {recipeList.map((recipe) => (
              <Card key={recipe.name} className={classes.recipeCard}>
                <Typography variant="h4" className={classes.bold}>
                  {recipe.name}
                </Typography>
              </Card>
            ))}
          </div>
        )}
    </>
  );
};

HomeData.propTypes = {
  handleOpen: PropTypes.func.isRequired,
  recipeList: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default HomeData;
