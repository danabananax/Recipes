import { Grid, TextField, makeStyles } from '@material-ui/core' 

const useStyles = makeStyles(theme => ({
    input: {
        width: '60%'
    },
}));

const AuthInput = props => {
        const classes = useStyles();
        const { id, label, type, onChange, error, helper, onFocus} = props;
        return (
            <Grid item>
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