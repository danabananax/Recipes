import { Redirect } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext"
import { Button, Typography, makeStyles } from '@material-ui/core'

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

    const classes = useStyles();

    return currentUser ? (
        <div className={classes.root}>
            <Typography variant='h2' className={classes.heading}>
                Hey {currentUser.email}, welcome!
            </Typography>
            <Button onClick={signout}>Signout</Button>
        </div>
    ) : <Redirect to='/auth/login'/>
}

export default Home