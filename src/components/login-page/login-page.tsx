import React from "react"
import { Container, Paper } from "@material-ui/core"
import LoginForm from "../login-form/login-form"

import { useContainerStyles, usePaperStyles } from './styles'

import LogoTitle from "../logo-title/logo-title"

const LogoProps = {
    FONT_SIZE: 24,
    LINE_HEIGHT: 28,
    GAP: 12,
    ICON_HEIGHT: 45,
    ICON_WIDTH: 45
}

const LoginPage: React.FC = () => {
    const { root: paperRoot, rounded } = usePaperStyles()
    const { root: containerRoot, maxWidthLg } = useContainerStyles()

    return (
        <Container component="main" className={`${containerRoot} ${maxWidthLg}`}>
            <LogoTitle fontSize={LogoProps.FONT_SIZE} lineHeight={LogoProps.LINE_HEIGHT} gap={LogoProps.GAP} iconHeight={LogoProps.ICON_HEIGHT} iconWidth={LogoProps.ICON_WIDTH} />
            <Paper className={`${paperRoot} ${rounded}`}>
                <LoginForm />
            </Paper>
        </Container>
    )
}

export default LoginPage