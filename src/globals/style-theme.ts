import { createTheme } from '@material-ui/core';

import { BreakPoints } from '../styles/style-const'

const theme = createTheme({
    palette: {
        text: {
            primary: "#3d5170"
        }
    },
    breakpoints: {
        values: {
            xs: BreakPoints.xs,
            sm: BreakPoints.sm,
            md: BreakPoints.md,
            lg: BreakPoints.lg,
            xl: BreakPoints.xl
        }
    },
    props: {
        MuiButtonBase: {
            disableRipple: true,
        }
    }
})

export default theme