interface ICarProps {
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

interface ICar {
    carData: ICarProps
}

export type { ICarProps, ICar }