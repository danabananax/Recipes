import { useState } from 'react'
import { Grid, Button   , Typography, CircularProgress } from '@material-ui/core' 
import { Link, Redirect } from 'react-router-dom'
import { useAuth } from '../../contexts/AuthContext'
import AuthInput from './AuthInput'
import validateAuthInputs from '../../helper';

const Signup = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confPassword, setConfPassword] = useState('');
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')
    const [signupErr, setSignupErr] = useState(null);
    const { signup, currentUser } = useAuth()

    const handleSubmit = e => {
        setSignupErr(null)
        e.preventDefault()
        setError(null);
        try {
            setLoading(true)
            validateAuthInputs(email, password, confPassword)
            signup(email, password)
                .catch(error => setSignupErr(error.message))
        } catch (error) {
            setError(error.message)
        }
        setLoading(false);
    }

    return currentUser ? <Redirect to='/home'/> : (
        <Grid
            container
            direction='column'
            justifyContent='center'
            alignItems='stretch'
            spacing={6}>
            <Grid item>
                <Typography variant='h4'>Signup</Typography>
                {signupErr && <Typography>{signupErr}</Typography>}
            </Grid>
            <AuthInput 
                id="email-signup" 
                label="Email" 
                value={email}
                type="email"
                onChange={e => setEmail(e.target.value)} 
                onFocus={() => setError(false)}
                error={error === 'email'}
                helper={error === 'email'?'Please use a valid email.':' '}/>
            <AuthInput 
                id="password-signup" 
                label="Password" 
                value={password}
                type="password" 
                onChange={e => setPassword(e.target.value)}
                onFocus={() => setError(false)}
                error={error==='password'}
                helper={error === 'password' ? 'Passwords arent matching.' : ' '}/>
            <AuthInput 
                id="conf-password-signup" 
                label="Confirm password" 
                value={confPassword}
                type="password"
                onChange={e => setConfPassword(e.target.value)}
                onFocus={() => setError(false)}
                error={error==='password'}
                helper={error === 'password' ? 'Passwords arent matching.' : ' '}/>
            <Grid item>
                {loading ? <CircularProgress color='primary' /> :
                    <Button 
                        variant='outlined' 
                        color='primary' 
                        type='submit' 
                        onClick={loading ? undefined : handleSubmit}
                        disabled={loading}
                        >
                            Signup
                    </Button>
                }   
            </Grid>
            <Grid item>
                <Typography>
                    Already have an account? <Link to="/auth/login">Login.</Link>
                </Typography>
            </Grid>
        </Grid>
    )
}

export default Signup