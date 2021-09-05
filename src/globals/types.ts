type TFilters = {name: string, value: string}[]

interface IUrlProps {
    filters?: TFilters,
    page: number,
    limit: number
}

interface ISelectOption {
    value: string,
    text: string,
    id: string
}

type TSelectOptions = ISelectOption[]

export type { IUrlProps, TSelectOptions }