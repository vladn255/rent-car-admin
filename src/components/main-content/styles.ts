import { makeStyles, createStyles } from '@material-ui/core/styles';

import { HEADER_BAR_HEIGHT } from '../../styles/style-const';

const useStyles = makeStyles(() =>
    createStyles({
        content: {
            flexGrow: 1,
            marginTop: HEADER_BAR_HEIGHT,
            padding: `28px 27px 28px 27px`,
        },
    }),
);

export { useStyles }