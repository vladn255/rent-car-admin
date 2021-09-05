import { makeStyles, createStyles } from "@material-ui/core/styles"
import { ITextStyles, IIconStyles } from "./types"


const useBoxStyles = makeStyles(() => createStyles({
    root: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    },
}))

const useTextStyles = makeStyles(() => createStyles({
    body1: ({ fontSize, lineHeight }: ITextStyles) => ({
        fontSize: `${fontSize}px`,
        lineHeight: `${lineHeight}px`
    })
}))

const useIconStyles = makeStyles(() => createStyles({
    root: ({ gap, iconHeight, iconWidth }: IIconStyles) => ({
        width: `${iconWidth}px`,
        height: `${iconHeight}px`,
        marginRight: `${gap}px`
    })
}))


export {
    useBoxStyles,
    useTextStyles,
    useIconStyles
}