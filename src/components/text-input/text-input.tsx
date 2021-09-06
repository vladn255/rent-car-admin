import React from "react"

import { TextInputWrapper, TextInputInput, TextInputLabel, TextInputErrorMessage } from "./styles"
import { ITextInputProps } from "./types";

const TextInput: React.FC<ITextInputProps> = React.forwardRef<HTMLInputElement, ITextInputProps>(({ name, type, className, label, placeholder, list, value = '', auotofocus = false, isError = false, errorText = '', changeHandler, blurHandler }, ref?) => {

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
                list={list}
                autoFocus={auotofocus}
                onChange={changeHandler}
                onBlur={blurHandler}
                ref={ref}
            />
            {isError && <TextInputErrorMessage>{errorText}</TextInputErrorMessage>}
        </TextInputWrapper>
    )
})

export default TextInput