interface ICarPreviewData {
    thumbnail: {
        path?: string,
        mimetype?: string,
        originalname?: string,
        size?: number
    },
    description: string
}

interface ICarPreviewProps {
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
    number: string,
    getPreviewData: (formData: ICarPreviewData) => void
}


export type { ICarPreviewProps, ICarPreviewData }