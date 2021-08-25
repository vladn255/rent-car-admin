import React from "react";

interface ITextInputProps {
    name: string,
    type: string,
    label: string,
    placeholder: string,
    value?: string,
    auotofocus?: boolean,

    isError: string | false,
    errorText?: string,
    changeHandler: (evt: React.ChangeEvent<HTMLInputElement>) => void,
    blurHandler: (evt: React.FocusEvent<HTMLInputElement>) => void
}

export default ITextInputProps