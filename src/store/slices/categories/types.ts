interface ICategoriesState {
    categoriesCount: number,
    categoriesList: TCategoriesList | [],
    isLoading: boolean,
    loadingError?: string,
    page: number,
    filters: TFilterData,
    formData: TFormData,
}

interface ICategoriesResponseProps {
    id: string,
    updatedAt: number,
    createdAt: number,
    name: string,
    description: string
}

type TCategoriesList = ICategoriesResponseProps[]

interface IResponse {
    count: number,
    data: TCategoriesList
}

interface IFilterDataItem {
    name: string,
    value: string
}

type TFilterData = IFilterDataItem[] | []

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
    ICategoriesState,
    IResponse,
    TParsedSelectors,
    TCategoriesList,
    TFilterData,
    TFormData
}