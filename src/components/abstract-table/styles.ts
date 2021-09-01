import { makeStyles, createStyles } from '@material-ui/core/styles';

import { FontFamilies } from '../../styles/style-const';

const useStyles = makeStyles(() =>
    createStyles({
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