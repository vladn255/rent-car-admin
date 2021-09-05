import { makeStyles, createStyles } from '@material-ui/core/styles';


const useStyles = makeStyles(() =>
    createStyles({
        tableCellRoot: {
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
        },

        rowWrapper: {
            width: '100%',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center'
        },

        buttonGroupBoxRoot: {
            display: 'flex',
            justifyContent: 'flex-end',
            alignItems: 'center',
        },

        colorsWrapper: {
            display: 'flex',
            flexDirection: 'column'
        }
    }),
);

export { useStyles }