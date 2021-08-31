interface IOrderState {
    ordersCount: number,
    ordersList: TOrderList | []
    loadingError: boolean,
    page: number,
    filters: TFilterData,
    formData: TFormData,
    citySelects: TParsedSelectors | [],
    carSelects: TParsedSelectors | [],
    statusSelects: TParsedSelectors | []
}

interface IOrderResponseProps {
    id: string,
    orderStatus: {
        name: string,
        id: string
    },
    cityId: {
        name: string,
        id: string
    },
    pointId: {
        address: string,
        id: string
    },
    carId?: {
        name: string,
        thumbnail: {
            path: string
        }
    },
    color: string,
    dateFrom?: number,
    dateTo?: number,
    price?: number,
    isFullTank: boolean,
    isNeedChildChair: boolean,
    isRightWheel: boolean,
}

type TOrderList = IOrderResponseProps[]

interface IResponse {
    count: number,
    data: TOrderList
}

interface IFilterDataItem {
    name: string,
    value: string
}

type TFilterData = IFilterDataItem[] | []

interface ICity {
    updatedAt: number,
    createdAt: number,
    name: string,
    id: string
}

type TCityList = ICity[]

interface ICitySelector {
    name: string,
    value: string
}

type TCitySelectors = ICitySelector[]


interface ICar {
    name: string,
    id: string,
    [x: string]: unknown
}

type TCarsSelectors = ICar[]

interface IStatus {
    name: string,
    id: string,
    [x: string]: unknown
}

type TStatusSelectors = IStatus[]

type TParsedSelectors = {
    value: string,
    text: string,
    id: string
}[]

interface IFormDataItem {
    name: string,
    value: string
}

type TFormData = IFormDataItem[] | []

export type {
    TOrderList,
    IOrderState,
    IResponse,
    TCityList,
    TCitySelectors,
    TCarsSelectors,
    TStatusSelectors,
    TParsedSelectors,
    TFilterData,
    TFormData
}