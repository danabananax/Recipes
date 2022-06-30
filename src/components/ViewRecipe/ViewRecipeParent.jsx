import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ref, get, getDatabase, onValue, off } from 'firebase/database';
import { Button, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import { auth } from '../../firebase';
import ViewRecipeMethod from './ViewRecipeMethod';
import ViewRecipeIngredients from './ViewRecipeIngredients';


const ViewRecipeContainer = styled('div')(({ theme }) => ({
  [theme.breakpoints.up('lg')]: {
    padding: `${theme.spacing(12)} ${theme.spacing(18)}`,
  },
  [theme.breakpoints.down('lg')]: {
    padding: `${theme.spacing(12)} ${theme.spacing(18)}`,
  },
  [theme.breakpoints.down('md')]: {
    padding: theme.spacing(4)
  },
  [theme.breakpoints.down('sm')]: {
    padding: theme.spacing(2)
  },
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
}));

const MethodIngredientContainer = styled('div')(({ theme }) => ({
  width: '100%',
  marginTop: theme.spacing(8),
  display: 'flex',
  justifyContent: 'space-evenly',
}));


const ViewRecipeParent = () => { 
    const { recipeId } = useParams();
    const currentUser = auth.currentUser;
    const [ loadingRecipe, setLoadingRecipe ] = useState(true);
    const [ recipeData, setRecipeData ] = useState();

    useEffect(() => {
        if(!currentUser) return
        const recipePathString = `users/${currentUser.uid}/${recipeId}`;
        const recipeRef = ref(getDatabase(), recipePathString);
        const listener = get(recipeRef)
          .then((snapshot) => {
              setRecipeData(snapshot.val());
              setLoadingRecipe(false);
          });
        return () => { off(listener); } 
    }, [currentUser, recipeId])

    return (
    <ViewRecipeContainer>
          <Button component={Link} to="/home" variant="contained">
              Back
          </Button>
          <Button onClick={() => console.log(recipeData)} variant="outlined">
              Log Recipe Data
          </Button>
        <div>Recipe Id: {recipeId}</div>
        { !loadingRecipe &&
          <MethodIngredientContainer>
             <div>
               <Typography variant="h2">
                 {recipeData.name}
               </Typography>
               <Typography variant="h4" sx={{ my: 2 }}>
                 Ingredients
               </Typography>
               <ViewRecipeIngredients recipeIngredients={recipeData.ingredients} />
             </div>
             <ViewRecipeMethod recipeMethod={recipeData.method}/>
          </MethodIngredientContainer>
         
        }
    </ViewRecipeContainer>
)};

export default ViewRecipeParent;