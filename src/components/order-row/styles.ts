import { makeStyles, createStyles, withStyles, Theme } from '@material-ui/core/styles';
import { Colors, FontFamilies } from '../../styles/style-const';

const GlobalCss = withStyles({
    '@global': {
        '.MuiTableCell-root': {
            padding: '8px',
            height: '100%',
        }
    }
})(() => null)

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        textInfo: {
            maxWidth: '287px',
            fontSize: '13px',
            lineHeight: '15px',
            color: Colors.FONT_GREY
        },

        textBlack: {
            color: Colors.FONT_BLACKER
        },

        featuresCell: {
            margin: 0,
            display: 'flex',
            flexDirection: 'column',
        },

        labelRoot: {
            marginBottom: '7px',
            cursor: 'auto'
        },

        labelTypography: {
            margin: 0,
            fontSize: '10px',
            lineHeight: '12px',
            color: Colors.FONT_BLACKER,
        },

        checkboxRoot: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            padding: 0,
            paddingRight: '8px',
            cursor: 'auto',

            '&&:hover': {
                backgroundColor: 'inherit'
            }
        },

        icon: {
            width: '13px',
            height: '13px',
            border: `0.5px solid ${Colors.BORDER_GREY}`,
            borderRadius: '1px',
            cursor: 'none'
        },

        checkedIcon: {
            width: '13px',
            heigth: '13px',
            border: `0.5px solid ${Colors.BORDER_GREEN}`,
            borderRadius: '1px',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='8' height='6' viewBox='0 0 8 6' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M2.75 4.73828L7.16406 0.324219L7.75 0.910156L2.75 5.91016L0.425781 3.58594L1.01172 3L2.75 4.73828Z' fill='%23121212'/%3E%3C/svg%3E%0A")`
        },

        priceTypography: {
            display: 'inline-block',
            color: Colors.FONT_BLACKER,
            fontSize: '24px',
            lineHeight: '28px',
            fontFamily: FontFamilies.SECONDARY,

            [theme.breakpoints.down('md')]: {
                fontSize: '18px',
                lineHeight: '22px',
            },
        },

        buttonGroupBoxRoot: {
            display: 'flex',
            justifyContent: 'flex-end',
            alignItems: 'center',
        },
    }),
);

export { useStyles, GlobalCss }