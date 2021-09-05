import React from "react"
import { Box, Icon, Typography } from "@material-ui/core"
import logoIcon from "../../img/icons/logo-Icon.svg"

import { useBoxStyles, useTextStyles, useIconStyles } from './styles'

interface ILogoTitle {
    fontSize: number,
    lineHeight: number,
    gap: number,
    iconHeight: number,
    iconWidth: number
}


const LogoTitle: React.FC<ILogoTitle> = ({ fontSize, lineHeight, gap, iconHeight, iconWidth }) => {

    const { body1 } = useTextStyles({ fontSize, lineHeight })
    const { root: boxRoot } = useBoxStyles()
    const { root: iconRoot } = useIconStyles({ gap, iconHeight, iconWidth })

    return (
        <Box className={`${boxRoot}`}>
            <Icon component="div" className={`${iconRoot}`}>
                <img src={logoIcon} height={iconHeight} width={iconWidth} alt="Logo icon" />
            </Icon>
            <Typography
                component="h1"
                align="center"
                className={`${body1}`}
            >Need for drive</Typography>
        </Box>
    )
}

export default LogoTitle