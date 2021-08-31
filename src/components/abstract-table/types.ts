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

interface ISelectData {
    name: string,
    options: ISelectOption[]
}

type TSelectList = ISelectData[]

interface ITableProps {
    isLoading: boolean,
    limit: number,
    querySelector: string,
    dataList: any[],
    dataCount: number,
    selectData: TSelectList,
    selectMap: any,
    getTableCallback: (datalist: any) => JSX.Element
}

export type { IFilterDataItem, TFilterData, TSelectOptions, TSelectList, ITableProps }