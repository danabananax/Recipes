import { Button, makeStyles, Typography } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
    header: {
        fontWeight: 700
    },
    button: {
        color: '#fff'
    }
}))

const HomeNoData = props => {
    const { handleAdd, signout } = props;
    const classes = useStyles();
    return (
        <>
            <Typography variant='h3' className={classes.header}>
                Woops, looks like you don't have any recipes yet.
            </Typography>
            <Button onClick={handleAdd} size='large' variant='contained'>
                Add recipe
            </Button>
            <Button onClick={signout} size='large' variant='outlined'>
                Signout
            </Button>
        </>
    )
}

export default HomeNoData