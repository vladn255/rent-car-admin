import { makeStyles, createStyles } from "@material-ui/core/styles"


const useContainerStyles = makeStyles(() => createStyles({
    root: {
        marginTop: "20vh",
        padding: "0"
    },
    maxWidthLg: {
        maxWidth: "376px"
    }
}))

const usePaperStyles = makeStyles(() => createStyles({
    root: {
        padding: "20px 18px",
        marginTop: "16px"
    },
    rounded: {
        borderRadius: "9px"
    }
}))


export {
    useContainerStyles,
    usePaperStyles
}