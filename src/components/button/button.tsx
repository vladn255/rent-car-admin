import React from "react"

import { IButtonProps } from "./types"

const Button: React.FC<IButtonProps> = ({ title, type, addClasses = '', isDisabled = false, clickHandler }) => {
    return (
        <button
            type={type}
            className={`${addClasses} button`}
            disabled={isDisabled}
            onClick={clickHandler}
        >{title}</button>
    )
}

export default Button