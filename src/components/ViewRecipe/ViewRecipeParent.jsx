import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { database } from '../../firebase';
import { Button, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import { useAuth } from '../../contexts/AuthContext';


const ViewRecipeContainer = styled('div')(({ theme }) => ({
  [theme.breakpoints.up('lg')]: {
    padding: theme.spacing(12),
  },
  [theme.breakpoints.down('lg')]: {
    padding: theme.spacing(8)
  },
  [theme.breakpoints.down('md')]: {
    padding: theme.spacing(4)
  },
  [theme.breakpoints.down('sm')]: {
    padding: theme.spacing(2)
  }
}));


const ViewRecipeParent = () => { 
    const { id } = useParams();
    const { currentUser } = useAuth();
    const [ loadingRecipe, setLoadingRecipe ] = useState(true);
    const [ recipeData, setRecipeData ] = useState();

    useEffect(() => {
        if(!currentUser) return
        const recipePathString = `users/${currentUser.uid}/${id}`;
        const recipeRef = database.ref(recipePathString);
        const listener = recipeRef.on('value', (snapshot) => {
            if (snapshot.exists()) {
                setRecipeData(snapshot.val());
                setLoadingRecipe(false);
            } else {
                setRecipeData(undefined);
                setLoadingRecipe(false);
            }
        });

        return () => { recipeRef.off('value', listener); } 
    }, [currentUser, id])

    return (
    <ViewRecipeContainer>
        <Button component={Link} to="/home" variant="contained">
            Back
        </Button>
        <Button onClick={() => console.log(recipeData)}>
            Log Recipe Data
        </Button>
        <div>Recipe Id: {id}</div>
        {loadingRecipe && <Typography>Loading Recipe</Typography>}
    </ViewRecipeContainer>
)};

export default ViewRecipeParent;