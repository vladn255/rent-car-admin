import { makeStyles, createStyles } from '@material-ui/core/styles';

import { Colors, HEADER_BAR_HEIGHT } from '../../styles/style-const';

const useStyles = makeStyles(() =>
    createStyles({
        root: {
            paddingTop: '0',
        },

        toolbar: {
            display: 'flex',
            justifyContent: 'start',
            alignItems: 'center',
            height: HEADER_BAR_HEIGHT,
            paddingLeft: '49px',
            backgroundColor: 'transparent',
        },

        itemRoot: {
            paddingLeft: '26px'
        },

        selected: {
            '&$selected': {
                backgroundColor: Colors.WHITE,
                color: Colors.MAIN_BLUE,
            },

            '&::before': {
                position: 'absolute',
                left: 0,
                display: 'block',
                content: '""',
                height: '100%',
                width: '5px',
                backgroundColor: Colors.MAIN_BLUE
            }
        },

        iconRoot: {
            color: 'inherit'
        }
    }),
);

export { useStyles }