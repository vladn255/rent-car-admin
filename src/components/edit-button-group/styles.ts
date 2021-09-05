import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import { Colors, FontFamilies } from '../../styles/style-const';


const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        groupRoot: {
            [theme.breakpoints.down('md')]: {
                flexDirection: 'column',
            }
        },

        buttonRoot: {
            fontFamily: FontFamilies.SECONDARY,
            fontSize: '11px',
            lineHeight: '13px',
            letterSpacing: '-0.4px',
            textTransform: 'none',

            width: '70px',
            padding: '5px 8px',
        },

        iconSizeMedium: {
            '&& > *:first-child': {
                fontSize: '12px'
            }
        },

        approveStartIcon: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            width: '12px',
            height: '12px',
            margin: 0,
            marginRight: '4px',
            color: Colors.ICON_GREEN,
        },

        rejectStartIcon: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            width: '12px',
            height: '12px',
            margin: 0,
            marginRight: '4px',
            color: Colors.ERROR_RED,
        },

        editStartIcon: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            width: '12px',
            height: '12px',
            margin: 0,
            marginRight: '2px',
            color: Colors.FONT_GREY,
        }

    }),
);

export { useStyles }