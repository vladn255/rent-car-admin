interface IPaginationBarProps {
    count: number,
    page: number,
    callback: (value: number) => void
}

export type { IPaginationBarProps }