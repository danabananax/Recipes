import {
  AppBar,
  Button,
  Grid,
  IconButton,
  makeStyles,
  Toolbar,
  Typography,
  TextField,
  CircularProgress,
  Snackbar,
} from '@material-ui/core';
import PropTypes from 'prop-types';
import CloseIcon from '@material-ui/icons/Close';
import React, { useState } from 'react';
import Alert from '@material-ui/lab/Alert';
import { database } from '../firebase';
import { useAuth } from '../contexts/AuthContext';
import { capitalize } from '../helper';

const useStyles = makeStyles((theme) => ({
  appbar: {
    position: 'relative',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 0,
    margin: 0,
    width: '100%',
  },
  appBarItem: {
    color: '#fff',
  },
  heading: {
    marginLeft: theme.spacing(2),
  },
  container: {
    width: '100%',
    height: '100%',
  },
  gridItem: {
    margin: theme.spacing(2),
    width: '20%',
  },
}));

const AddRecipe = (props) => {
  const { handleClose } = props;
  const { currentUser } = useAuth();
  const classes = useStyles();
  const [recipeName, setRecipeName] = useState('');
  const [loading, setLoading] = useState(false);
  const [added, setAdded] = useState(false);
  const [severity, setSeverity] = useState('error');
  const handleTextInput = (e) => { setRecipeName(e.target.value); };

  const handleAddRecipe = (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const recipeObj = {
        name: capitalize(recipeName),
        ingredients: [],
        methods: [],
      };
      for (let i = 0; i < 6; i += 1) {
        recipeObj.ingredients.push(`${i} ingredient ${recipeName}`);
        if (i % 2 === 0) recipeObj.methods.push(`method ${i / 2} ${recipeName}`);
      }
      // add new recipe object to user/uId = [recipe1, recipe2, ...]
      const userRecipesRef = database.ref(`users/${currentUser.uid}`);
      const newRecipeRef = userRecipesRef.push();
      newRecipeRef.set(recipeObj);
      setSeverity('success');
      setAdded(true);
    } catch {
      setSeverity('error');
      setAdded(true);
    }
    setLoading(false);
  };

  const handleCloseSnackbar = (event, reason) => {
    if (reason === 'clickaway') return;
    setAdded(false);
  };

  return (
    <>
      <AppBar color="primary" className={classes.appbar}>
        <Toolbar>
          <IconButton onClick={handleClose} className={classes.appBarItem}>
            <CloseIcon color="inherit" />
          </IconButton>
          <Typography className={classes.heading} variant="h6">Add Recipe</Typography>
        </Toolbar>
      </AppBar>
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
        className={classes.container}
      >
        <form onSubmit={handleAddRecipe} className={classes.form}>
          <TextField
            className={classes.gridItem}
            value={recipeName}
            id="GenericText"
            label="Random word"
            variant="filled"
            onChange={handleTextInput}
          />

          {loading
            ? <CircularProgress className={classes.gridItem} />
            : (
              <Button className={classes.gridItem} color="secondary" variant="contained" size="large" type="submit">
                Add Generic Recipe
              </Button>
            )}
        </form>
        <Snackbar open={!!added} autoHideDuration={3000} onClose={handleCloseSnackbar}>
          <Alert severity={severity} variant="filled" onClose={handleCloseSnackbar}>
            {severity === 'success' ? 'Successfully added recipe' : 'Something went wrong'}
          </Alert>
        </Snackbar>
      </Grid>
    </>
  );
};

AddRecipe.propTypes = {
  handleClose: PropTypes.func.isRequired,
};

export default AddRecipe;
