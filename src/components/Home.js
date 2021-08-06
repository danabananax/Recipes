import { Redirect } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext"
import { Button, Typography, makeStyles } from '@material-ui/core'
import { database } from "../firebase";
import { useState } from "react";
import HomeNoData from "./HomeNoData";

const useStyles = makeStyles(theme => ({
    root: {
        padding: theme.spacing(12)
    },
    heading: {
        fontWeight: 500 
    }
}));

const Home = () => {
    const { currentUser, signout }  = useAuth();
    const [recipeList, setRecipeList] = useState([])
    const [noRecipes, setNoRecipes] = useState(true)
    const classes = useStyles();

    if(currentUser) {
        const userRecipesRef = database.ref(`users/${currentUser.uId}`) // list of recipes by user
        console.log('user', currentUser);
        userRecipesRef.on('value', snapshot => {
        snapshot.exists() ? setRecipeList(snapshot.val()) : setNoRecipes(true);
    })};
    // read current recipe data, if none display different message
    

    if(!currentUser) return <Redirect to='/auth/login'/>;

    return  (
        <div className={classes.root}>
            {noRecipes ? <HomeNoData
                handleAdd={undefined} 
                signout={signout}/> : (
                    <>
                        <Typography variant='h2' className={classes.heading}>
                            Hey {currentUser.email}, welcome!
                        </Typography>
                        <Button onClick={signout}>Signout</Button>
                        {recipeList.map((recipeObj, idx) => (
                            <Typography variant='body1' key={idx}>
                                {recipeObj.name}
                            </Typography>
                        ))}
                    </>
                )}
        </div>
    )
}

export default Home