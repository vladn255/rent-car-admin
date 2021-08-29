import React from "react"

import ITextInputProps from "./types";

const TextInput: React.FC<ITextInputProps> = ({ name, type, label, placeholder, value = '', auotofocus = false, isError = '', errorText = '', changeHandler, blurHandler }: ITextInputProps) => {

    return (
        <div className="text-input">
            <label className="text-input__label" htmlFor={name}>{label}</label>
            <input
                className={`text-input__input ${isError ? 'text-input__input--error' : ''}`}
                type={type}
                name={name}
                id={name}
                value={value}
                placeholder={placeholder}
                autoFocus={auotofocus}
                onChange={changeHandler}
                onBlur={blurHandler}
            />
            {isError && <span className="text-input__error-text">{errorText}</span>}
        </div>
    )
}

export default TextInput