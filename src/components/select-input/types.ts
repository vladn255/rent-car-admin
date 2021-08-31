type TOption = {
    value: string,
    text: string
}

type TOptionsList = TOption[]

interface ISelectInput {
    name: string,
    options: TOptionsList,
    callback: (name: string, value: string) => void
}

export type { TOption, TOptionsList, ISelectInput }