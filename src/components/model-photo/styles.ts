import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';


const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        image: {
            width: '138px',
            height: '63px',

            [theme.breakpoints.down('md')]: {
                display: 'none'
            }
        },
    }),
);

export { useStyles }