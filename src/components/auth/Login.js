import { useState } from 'react'
import { Grid, Button, Typography, CircularProgress } from "@material-ui/core"
import { Link, Redirect } from 'react-router-dom'
import { useAuth } from '../../contexts/AuthContext'
import AuthInput from './AuthInput'
import validateAuthInputs from '../../helper'

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)
    const { login, currentUser } = useAuth()
    const [loginErr, setLoginErr] = useState(false)

    const handleSubmit = e => {
        e.preventDefault();
        setLoading(true);
        setError(null);
        try {
            validateAuthInputs(email, password);
            login(email, password)
                .catch(error => {setLoginErr(true);setLoading(false)})
        } catch (error) {
            console.log(error.message);
            setError(error.message);
            setLoading(false)
        }
    };
    
    return currentUser ? <Redirect to='/home'/> : (
        <Grid
            container
            direction='column'
            justifyContent='center'
            alignItems='stretch'
            spacing={6}>
            <Grid item>
                <Typography variant='h4'>Login</Typography>
                {loginErr && <Typography>User not found, please try again.</Typography>}
            </Grid>
            <AuthInput
                id='email-login'
                label='Email'
                value={email}
                type='email'
                onChange={e => setEmail(e.target.value)}
                onFocus={e => setError(false)}
                error={error}
                helper={null} />
            <AuthInput
                id='password-login'
                label='password'
                value={password}
                type='password'
                onChange={e => setPassword(e.target.value)}
                onFocus={e => setError(false)}
                error={error}
                helper={null} />
            <Grid item>
                {loading ? <CircularProgress color='primary'/> :
                    <Button
                        variant='outlined'
                        color='primary'
                        type='submit'
                        onClick={loading ? undefined : handleSubmit}
                        disabled={loading}>
                            Login
                    </Button>
                }
            </Grid>
            <Grid item>
                <Typography>
                    Don't have an account? <Link to='/auth/signup'>Signup.</Link>
                </Typography>
            </Grid>
        </Grid>
    )
}

export default Login