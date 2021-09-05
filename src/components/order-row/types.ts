interface IOrderProps {
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

interface IOrder {
    orderData: IOrderProps
}

export type { IOrderProps, IOrder }