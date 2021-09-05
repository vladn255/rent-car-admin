import { createAPI } from "../../../services/api";
import { AxiosResponse } from "axios";

import {
    IResponse,
    TCategorySelectors,
    TParsedSelectors,
} from "./types"
import { getEndpointUrl } from '../../../globals/utils'
import { IUrlProps } from '../../../globals/types'


const getCategorySelectors = (categoriesList: TCategorySelectors) => {
    return categoriesList.map((category) => {
        return {
            value: category.name,
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

const fetchCategories = (): Promise<TParsedSelectors> => {
    const api = createAPI()
    return api.get(`/db/category`)
        .then((response: AxiosResponse) => {
            return getCategorySelectors(response.data.data)
        })
}

export {
    fetchCars,
    fetchCategories
}