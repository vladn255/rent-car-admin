import { createTheme } from '@material-ui/core';

const theme = createTheme({
    palette: {
        text: {
            primary: "#3d5170"
        }
    },
    breakpoints: {
        values: {
            xs: 0,
            sm: 320,
            md: 768,
            lg: 1024,
            xl: 1440
        }
    },
    props: {
        MuiButtonBase: {
            disableRipple: true,
        }
    }
})

export default theme