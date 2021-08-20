interface ILoginInputProps {
    name: string,
    type: string,
    label: string,
    placeholder: string,
    value?: string,
    autofocus?: boolean,
    errorText?: string
}

interface ILoginFormValues {
    email: string,
    password: string
}

export type {
    ILoginFormValues,
    ILoginInputProps
}