interface ICategoryProps {
    id: string,
    name: string,
    description: string
}

interface ICategory {
    categoryData: ICategoryProps
}

export type { ICategoryProps, ICategory }