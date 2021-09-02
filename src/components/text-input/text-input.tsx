import React from "react"

import { TextInputWrapper, TextInputInput, TextInputLabel, TextInputErrorMessage } from "./styles"
import { ITextInputProps } from "./types";

const TextInput: React.FC<ITextInputProps> = ({ name, type, className, label, placeholder, value = '', auotofocus = false, isError = false, errorText = '', changeHandler, blurHandler }: ITextInputProps) => {

    return (
        <TextInputWrapper className={className}>
            <TextInputLabel htmlFor={name}>{label}</TextInputLabel>
            <TextInputInput
                isError={isError}
                type={type}
                name={name}
                id={name}
                value={value}
                placeholder={placeholder}
                autoFocus={auotofocus}
                onChange={changeHandler}
                onBlur={blurHandler}
            />
            {isError && <TextInputErrorMessage>{errorText}</TextInputErrorMessage>}
        </TextInputWrapper>
    )
}

export default TextInput