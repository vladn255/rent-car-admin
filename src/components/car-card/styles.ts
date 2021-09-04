import { makeStyles, createStyles } from '@material-ui/core/styles';

import { Colors, FontFamilies } from '../../styles/style-const';


const useStyles = makeStyles(() =>
    createStyles({
        typographyH2: {
            fontFamily: FontFamilies.SECONDARY,
            fontSize: '29px',
            lineHeight: '33px',
            marginBottom: '30px',
        },

        gridPreview: {
            flexGrow: 1,
            marginRight: '24px',
            padding: '0'
        },

        gridForm: {
            flexGrow: 3,
            padding: '0',
            height: '70vh',
            maxWidth: '697px',
        },

        snackbarOpen: {
            position: 'absolute',
            width: '100%',
            left: '0',
            top: '0',
            backgroundColor: Colors.BORDER_GREEN,
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '12.5px 25px 12px 25px'
        },

        snackbarClosed: {
            display: 'none'
        },

        snackbarMessage: {
            color: Colors.FONT_WHITE,
            fontFamily: FontFamilies.SECONDARY,
            fontSize: '13px',
            lineHeight: '15px',
            display: 'flex',
            alignItems: 'center',

            '&::before': {
                content: '""',
                display: 'block',
                width: '13px',
                height: '10px',
                marginRight: '7px',
                backgroundRepeat: 'no-repeat',
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='14' height='10' viewBox='0 0 14 10' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M4.63132 7.88963L1.54946 4.78001L0.5 5.83147L4.63132 10L13.5 1.05145L12.4579 0L4.63132 7.88963Z' fill='white'/%3E%3C/svg%3E%0A")`,
            }
        },

        iconButtonRoot: {
            padding: '0',
            color: Colors.WHITE,
        }

    }),
);

export { useStyles }