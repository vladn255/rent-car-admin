import { createAPI } from "../../../services/api";
import { AxiosResponse } from "axios";

import {
    IResponse,
    TCategorySelectors
} from "./types"
import { getEndpointUrl } from '../../../globals/utils'
import { IUrlProps } from '../../../globals/types'
import { ICarFormData } from '../../../components/car-card/car-card-form/types'


const getCategorySelectors = (categoriesList: TCategorySelectors) => {
    return categoriesList.map((category) => {
        return {
            name: category.name,
            text: category.name,
            id: category.id
        }
    })
}

const fetchCars = ({ page = 1, limit = 10, filters }: IUrlProps): any => {
    const currentAccessToken = sessionStorage.getItem('access token')
    const api = createAPI(currentAccessToken)

    return api.get(`/db/car${getEndpointUrl({ filters, page, limit })}`)
        .then((response: AxiosResponse<IResponse>) => {
            return {
                count: response.data.count,
                data: response.data.data
            }
        })
        .catch((err) => console.log(err))
}

const fetchCategories = (): any => {
    const api = createAPI()
    return api.get(`/db/category`)
        .then((response: AxiosResponse) => {
            return getCategorySelectors(response.data.data)
        })
}

const fetchCarCard = (id: string): any => {
    const currentAccessToken = sessionStorage.getItem('access token')
    const api = createAPI(currentAccessToken)

    return api.get(`/db/car/${id}`)
        .then((response: AxiosResponse) => {
            return response.data.data
        })
}

const postCarCard = (data: ICarFormData): any => {
    const currentAccessToken = sessionStorage.getItem('access token')
    const api = createAPI(currentAccessToken)

    return api.post(`/db/car`, JSON.stringify(data))
        .then((response: AxiosResponse) => {
            return response.data.data
        })
}

const putCarCard = (id: string, data: ICarFormData): any => {
    const currentAccessToken = sessionStorage.getItem('access token')
    const api = createAPI(currentAccessToken)

    return api.put(`/db/car/${id}`, JSON.stringify(data))
        .then((response: AxiosResponse) => {
            return response.data.data
        })
}

const deleteCarCard = (id: string): any => {
    const currentAccessToken = sessionStorage.getItem('access token')
    const api = createAPI(currentAccessToken)

    return api.delete(`/db/car/${id}`)
        .then((response: AxiosResponse) => {
            return response.data.data
        })
}

export {
    fetchCars,
    fetchCategories,
    fetchCarCard,
    postCarCard,
    putCarCard,
    deleteCarCard
}