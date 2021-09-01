import React from "react";

interface ITextInputProps {
    name: string,
    type: string,
    label: string,
    placeholder: string,
    value?: string,
    auotofocus?: boolean,

    isError?: string | boolean,
    errorText?: string,
    changeHandler: (evt: React.ChangeEvent<HTMLInputElement>) => void,
    blurHandler: (evt: React.FocusEvent<HTMLInputElement>) => void
}

type TInputProps = JSX.IntrinsicElements["input"]

interface ICustomInputProps extends TInputProps {
    isError: string | boolean
}

export type { ITextInputProps, ICustomInputProps }