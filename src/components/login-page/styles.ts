import { makeStyles, createStyles } from "@material-ui/core/styles"


const useContainerStyles = makeStyles(() => createStyles({
    root: {
        marginTop: "20%",
        padding: "0"
    },
    maxWidthLg: {
        maxWidth: "376px"
    }
}))

const useBoxStyles = makeStyles(() => createStyles({
    root: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginBottom: "16px"
    },
}))

const usePaperStyles = makeStyles(() => createStyles({
    root: {
        padding: "20px 18px"
    },
    rounded: {
        borderRadius: "9px"
    }
}))

const useTextStyles = makeStyles(() => createStyles({
    body1: {
        fontSize: "24px",
        lineHeight: "28px"
    }
}))

const useIconStyles = makeStyles(() => createStyles({
    root: {
        width: "45px",
        height: "45px",
        marginRight: "11px"
    }
}))


export {
    useContainerStyles,
    useBoxStyles,
    usePaperStyles,
    useTextStyles,
    useIconStyles
}