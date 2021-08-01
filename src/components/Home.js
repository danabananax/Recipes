import { Redirect } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext"
import { Button } from '@material-ui/core'

const Home = () => {
    const { currentUser, signout }  = useAuth();
    return currentUser ? (
        <>
            <p>Hey user {currentUser.uid}, welcome home!</p>
            <Button onClick={signout}>Signout</Button>
        </>
    ) : <Redirect to='/auth/login'/>
}

export default Home