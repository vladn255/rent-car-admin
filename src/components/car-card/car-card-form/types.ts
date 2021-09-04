interface ICategoryId {
    name?: string,
    description?: string,
    id?: string
}

interface ICarFormData {
    priceMax: number,
    priceMin: number,
    name: string,
    categoryId?: ICategoryId,
    colors?: string[],
    tank?: number,
    number: string,
}

interface ICarFormProps {
    carFormData: {
        priceMax: number,
        priceMin: number,
        name: string,
        categoryId?: ICategoryId,
        colors?: string[],
        tank?: number,
        number: string,
    },
    categories: ICategoryId[],
    isDelete: boolean,
    getFormData: (formData: ICarFormData) => void,
    handleCreateNewClick: () => void,
    handleSaveClick: (evt: React.SyntheticEvent) => void,
    handleCancelClick: () => void,
    handleDeleteClick: () => void
}


export type { ICarFormProps, ICarFormData }