import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';

import { DRAWER_WIDTH, HEADER_BAR_HEIGHT } from '../../styles/style-const';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            display: 'flex',
            flexGrow: 1,
        },
        drawer: {
            [theme.breakpoints.up('md')]: {
                width: DRAWER_WIDTH,
                flexShrink: 0,
            },
        },

        drawerPaper: {
            width: DRAWER_WIDTH,
            boxShadow: '0px 1px 75px rgba(90, 97, 105, 0.11), 0px 2px 4px rgba(90, 97, 105, 0.12), 0px 7.5px 11px rgba(90, 97, 105, 0.1), 0px 3.5px 17.5px rgba(165, 182, 201, 0.1)'
        },
        content: {
            flexGrow: 1,
            marginTop: HEADER_BAR_HEIGHT,
            padding: `28px 27px 28px 27px`,
        },
    }),
);

export { useStyles }