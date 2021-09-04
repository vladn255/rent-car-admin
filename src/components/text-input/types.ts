import React from "react";

interface ITextInputProps {
    name: string,
    id?: string,
    type: string,
    className?: string,
    label: string,
    placeholder: string,
    value?: string | number,
    auotofocus?: boolean,
    step?: number,
    list?: string,

    isError?: string | boolean,
    errorText?: string,
    changeHandler?: (evt: React.ChangeEvent<HTMLInputElement>) => void,
    blurHandler?: (evt: React.FocusEvent<HTMLInputElement>) => void,
    ref?: any
}

type TInputProps = JSX.IntrinsicElements["input"]

interface ICustomInputProps extends TInputProps {
    isError: string | boolean
}

export type { ITextInputProps, ICustomInputProps }