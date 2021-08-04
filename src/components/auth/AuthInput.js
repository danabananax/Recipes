import { Grid, TextField, makeStyles } from '@material-ui/core' 

const useStyles = makeStyles(theme => ({
    input: {
        [theme.breakpoints.down('sm')]: {
            width: '80%'
        },
        width: '60%',
    },
}));

const AuthInput = props => {
        const classes = useStyles();
        const { id, label, type, onChange, error, helper, onFocus} = props;
        return (
            <Grid item className={classes.gridItem}>
                <TextField
                    id={id}
                    size="medium"
                    variant="outlined"
                    label={label}
                    onChange={onChange}
                    type={type}
                    className={classes.input}
                    autoComplete='off'
                    error={error}
                    helperText={helper}
                    onFocus={onFocus}
                    />
            </Grid>
        )
}

export default AuthInput;