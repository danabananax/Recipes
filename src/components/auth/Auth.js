import Signup from './Signup'
import Login from './Login'
import { useRouteMatch, Route, Switch } from 'react-router-dom'
import { Grid, makeStyles, Paper } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
    root: {
      margin: 0,
      minHeight: '100vh',
      maxWidth: '100%',
      [theme.breakpoints.down('sm')]: {
        padding: 0
      },
      [theme.breakpoints.up('sm')]: {
        padding: theme.spacing(4)
      }
    },
    item: {
      [theme.breakpoints.down('sm')]: {
        width: '90%'
      },
      width: '700px',
    },
    paper: {
      [theme.breakpoints.down('sm')]: {
        padding: 0
      },
      [theme.breakpoints.up('sm')]: {
      padding: theme.spacing(4)
      },
      [theme.breakpoints.down('sm')]: {
        height: '70%'
      },
      display: 'flex',
      justifyContent: 'center'
    },
    form: {
      display: 'flex',
      width: '100%',
      padding: theme.spacing(2),
      margin: 0,
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
                <Grid 
                    item 
                    align='center' 
                    className={classes.item}>  
                  <Paper 
                    className={classes.paper}>
                    <form className={classes.form}>
                      <Switch>
                        <Route path={`${path}/login`}>
                            <Login />
                        </Route>
                        <Route path={`${path}/signup`}>
                            <Signup/>
                        </Route>
                      </Switch>
                    </form>
                  </Paper>
                </Grid>
            </Grid>
    )}

export default Auth