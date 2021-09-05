interface IFormDataItem {
    name: string,
    value: string
}

type TFormData = IFormDataItem[] | []

interface ISelectOption {
    value: string,
    text: string
}

interface ISelectData {
    name: string,
    options: ISelectOption[]
}

type TSelectList = ISelectData[]

interface IFormProps {
    selectInputData: TSelectList,
    submitCallback: (value: TFormData) => void
}

export type { TFormData, IFormProps, ISelectOption, TSelectList }