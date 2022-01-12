import React from 'react';
import { Card, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import PropTypes from 'prop-types';

const useStyles = makeStyles((theme) => ({
  recipeCard: {
    marginTop: theme.spacing(2),
    marginRight: theme.spacing(2),
    padding: theme.spacing(3),
    [theme.breakpoints.down('md')]: {
      marginRight: 0,
      marginBottom: theme.spacing(2),
      textAlign: 'center',
      width: '100%',
    },

  },
}));

const RecipeBubble = (props) => {
  const classes = useStyles();
  const { recipe } = props;
  return (
    <Card key={recipe.name} className={classes.recipeCard}>
      <Typography variant="h4" className={classes.bold}>
        {recipe.name}
      </Typography>
    </Card>
  );
};

RecipeBubble.propTypes = {
  recipe: PropTypes.shape({
    name: PropTypes.string.isRequired,
    ingredients: PropTypes.arrayOf(PropTypes.string),
  }).isRequired,
};

export default RecipeBubble;