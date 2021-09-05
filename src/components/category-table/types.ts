interface IFilterDataItem {
    name: string,
    value: string
}

type TFilterData = IFilterDataItem[] | []

interface ISelectOption {
    value: string,
    text: string,
    id: string
}

type TSelectOptions = ISelectOption[]

export type {IFilterDataItem, TFilterData, TSelectOptions}