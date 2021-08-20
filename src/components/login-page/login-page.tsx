import React from "react"
import { Container, Paper, Box, Icon, Typography } from "@material-ui/core"
import LoginForm from "../login-form/login-form"
import logoIcon from "../../img/icons/logo-Icon.svg"

import { useBoxStyles, useContainerStyles, usePaperStyles, useTextStyles, useIconStyles } from './styles'


const LoginPage: React.FC = () => {
    const { root: paperRoot, rounded } = usePaperStyles()
    const { root: containerRoot, maxWidthLg } = useContainerStyles()
    const { body1 } = useTextStyles()
    const { root: boxRoot } = useBoxStyles()
    const { root: iconRoot } = useIconStyles()

    return (
        <Container component="main" className={`${containerRoot} ${maxWidthLg}`}>
            <Box className={`${boxRoot}`}>
                <Icon component="div" className={`${iconRoot}`}>
                    <img src={logoIcon} height={45} width={45} alt="Logo icon" />
                </Icon>
                <Typography
                    component="h1"
                    align="center"
                    className={`${body1}`}
                >Need for drive</Typography>
            </Box>
            <Paper className={`${paperRoot} ${rounded}`}>
                <LoginForm />
            </Paper>
        </Container>
    )
}

export default LoginPage