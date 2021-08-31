import { makeStyles, createStyles } from '@material-ui/core/styles';

import { FontFamilies, HEADER_BAR_HEIGHT } from '../../styles/style-const';

const useStyles = makeStyles(() =>
    createStyles({
        content: {
            flexGrow: 1,
            marginTop: HEADER_BAR_HEIGHT,
            padding: `28px 27px 28px 27px`,
        },

        typographyBody1: {
            fontFamily: FontFamilies.SECONDARY,
            fontSize: '29px',
            lineHeight: '33px',
            marginBottom: '30px'
        },

        paperRoot: {
            padding: "16px 21px 20px 21px"
        }
    }),
);

export { useStyles }