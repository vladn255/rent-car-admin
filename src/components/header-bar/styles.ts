import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';

import { Colors, DRAWER_WIDTH, FontFamilies, HEADER_BAR_HEIGHT } from '../../styles/style-const';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        appBar: {
            backgroundColor: Colors.WHITE,
            [theme.breakpoints.up('md')]: {
                width: `calc(100% - ${DRAWER_WIDTH}px)`,
                marginLeft: DRAWER_WIDTH,
            },
            boxShadow: '0px 2.5px 9.5px rgba(90, 97, 105, 0.12)',
            minHeight: HEADER_BAR_HEIGHT
        },

        toolbar: {
            [theme.breakpoints.down('xs')]: {
                flexWrap: 'wrap'
            }
        },

        menuButton: {
            marginRight: theme.spacing(2),
            [theme.breakpoints.up('md')]: {
                display: 'none',
            },
        },

        search: {
            position: 'relative',
            borderRadius: theme.shape.borderRadius,
            '&:hover': {
            },
            margin: 0,
            flexGrow: 1,
            [theme.breakpoints.up('sm')]: {
                width: 'auto',
            },
            [theme.breakpoints.down('xs')]: {
                order: 2,
            },
        },

        searchIcon: {
            color: Colors.ICON_GREY,
            padding: theme.spacing(0, 2),
            height: '100%',
            position: 'absolute',
            pointerEvents: 'none',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
        },

        inputInput: {
            color: Colors.FONT_DARK_GREY,
            padding: theme.spacing(1, 1, 1, 0),
            paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
            transition: theme.transitions.create('width'),
            width: '100%',
            [theme.breakpoints.up('sm')]: {
                '&:focus': {
                    width: '12ch',
                },
            },
        },

        notificationsRoot: {
            marginLeft: '11px',
            marginRight: '11px',
            '& svg': {
                fontSize: '30px',
            }
        },

        badge: {
            backgroundColor: Colors.ERROR_RED,
            color: Colors.FONT_WHITE,
            fontSize: '10px',
            height: '16px',
            minWidth: '16px',

            top: '24px',
            right: '3px'
        },

        box: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
        },

        avatarRoot: {
            marginLeft: '26px',

            [theme.breakpoints.down('sm')]: {
                display: 'none',
            }
        },

        typographyBody: {
            color: Colors.FONT_BLACK,
            fontFamily: FontFamilies.SECONDARY,
            display: 'block',
            width: '70px',
            marginLeft: '14px',

            [theme.breakpoints.down('sm')]: {
                width: '40px',
            }
        }
    }),
);

export { useStyles }