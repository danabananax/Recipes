import Signup from './Signup'
import Login from './Login'
import { useRouteMatch, Route, Switch } from 'react-router-dom'
import { Grid, makeStyles, Paper } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
    root: {
      minHeight: '100vh',
      maxWidth: '100%',
      padding: theme.spacing(4)
    },
    item: {
      width: '30%'
    },
    paper: {
      padding: theme.spacing(4),
      minHeight: '50vh',
      display: 'flex',
      justifyContent: 'center'
    },
    form: {
      display: 'flex',
      width: '100%'
    }
}));


const Auth = () => {
    let { path } = useRouteMatch();
    const classes = useStyles();
    
    return (
        
            <Grid 
                  container 
                  spacing={2}
                  direction='column'
                  justifyContent='center'
                  alignItems='center'
                  className={classes.root}
                >
                <Grid item align='center' className={classes.item}>
                  <Paper className={classes.paper}>
                    <form className={classes.form}>
                      <Switch>
                        <Route path={`${path}/login`}>
                            <Login/>
                        </Route>
                        <Route path={`${path}/signup`}>
                            <Signup/>
                        </Route>
                      </Switch>
                    </form>
                  </Paper>
                </Grid>
            </Grid>
    )
}

export default Auth