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
    padding: theme.spacing(4),
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
      <Button onClick={signout}>Signout</Button>
      <Button onClick={handleOpen} size="large" variant="contained" color="primary">
        Add recipe
      </Button>
      {recipeList.map((recipe) => (
        <Card key={recipe.name} className={classes.recipeCard}>
          <Typography variant="h4" className={classes.bold}>
            {recipe.name}
          </Typography>
        </Card>
      ))}
    </>
  );
};

HomeData.propTypes = {
  handleOpen: PropTypes.func.isRequired,
  recipeList: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default HomeData;
