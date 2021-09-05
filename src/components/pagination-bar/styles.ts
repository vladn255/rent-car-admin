import { makeStyles, createStyles } from '@material-ui/core/styles';
import { Colors } from '../../styles/style-const';


const useStyles = makeStyles(() =>
    createStyles({
        wrapper: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: '21px'
        },

        root: {
            '& .Mui-selected': {
                color: Colors.FONT_WHITE,
                backgroundColor: Colors.MAIN_BLUE
            }
        }
    }),
);

export { useStyles }