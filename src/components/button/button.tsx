import React from "react"

import StyledButton from "./styles"
import { IButtonProps } from "./types"

const Button: React.FC<IButtonProps> = ({ className, title, type, isDisabled = false, clickHandler }) => {
    return (
        <StyledButton
            className={className}
            type={type}
            disabled={isDisabled}
            onClick={clickHandler}
        >{title}</StyledButton>
    )
}

export default Button