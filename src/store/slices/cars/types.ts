interface ICarsState {
    carsCount: number,
    carsList: TCarsList | []
    loadingError: boolean,
    page: number,
    filters: TFilterData,
    formData: TFormData,
    categorySelects: TParsedSelectors | []
}

interface ICarsResponseProps {
    id: string,
    priceMax: number,
    priceMin: number,
    name: string,
    thumbnail: {
        path?: string,
        mimetype?: string,
        originalname?: string,
        size?: number
    },
    description: string,
    categoryId?: {
        name: string,
        description: string,
        id: string
    },
    colors?: string[],
    tank: number,
    number: string
}

type TCarsList = ICarsResponseProps[]

interface IResponse {
    count: number,
    data: TCarsList
}

interface IFilterDataItem {
    name: string,
    value: string
}

type TFilterData = IFilterDataItem[] | []

interface ICategorySelector {
    name: string,
    description: string,
    id: string
}

type TCategorySelectors = ICategorySelector[]

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
    ICarsState,
    IResponse,
    TCategorySelectors,
    TParsedSelectors,
    TCarsList,
    TFilterData,
    TFormData
}