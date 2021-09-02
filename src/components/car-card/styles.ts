import { makeStyles, createStyles } from '@material-ui/core/styles';

import { FontFamilies } from '../../styles/style-const';


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

    }),
);

export { useStyles }