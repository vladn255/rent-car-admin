import { createAPI } from "../../../services/api";
import { AxiosResponse } from "axios";

import { IResponse, TCityList, TCarsSelectors, TStatusSelectors, TParsedSelectors } from "./types"
import { getEndpointUrl } from '../../../globals/utils'
import { IUrlProps } from '../../../globals/types'


const getCitiesSelectors = (citiesList: TCityList) => {
    return citiesList.map((city) => {
        return {
            value: city.name,
            text: city.name,
            id: city.id
        }
    })
}

const getCarsSelectors = (carsList: TCarsSelectors) => {
    return carsList.map((car) => {
        return {
            value: car.name,
            text: car.name,
            id: car.id
        }
    })
}

const getStatusSelectors = (statusList: TStatusSelectors) => {
    return statusList.map((status) => {
        return {
            value: status.name,
            text: status.name,
            id: status.id
        }
    })
}


// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const fetchOrders = ({ page = 1, limit = 10, filters }: IUrlProps) => {
    const currentAccessToken = sessionStorage.getItem('access token')
    const api = createAPI(currentAccessToken)

    return api.get(`/db/order${getEndpointUrl({ filters, page, limit })}`)
        .then((response: AxiosResponse<IResponse>) => {
            return {
                count: response.data.count,
                data: response.data.data
            }
        })
        .catch((err) => console.log(err))
}

const fetchCities = (): Promise<TParsedSelectors> => {
    const api = createAPI()
    return api.get(`/db/city`)
        .then((response: AxiosResponse) => {
            return getCitiesSelectors(response.data.data)
        })
}

const fetchCars = (): Promise<TParsedSelectors> => {
    const api = createAPI()
    return api.get(`/db/car`)
        .then((response: AxiosResponse) => {
            return getCarsSelectors(response.data.data)
        })
}

const fetchStatuses = (): Promise<TParsedSelectors> => {
    const api = createAPI()
    return api.get(`/db/orderStatus`)
        .then((response: AxiosResponse) => {
            return getStatusSelectors(response.data.data)
        })
}

export {
    fetchOrders,
    fetchCities,
    fetchCars,
    fetchStatuses
}