import { createAPI } from "../../../services/api";
import { AxiosResponse } from "axios";

import {
    IResponse,
} from "./types"
import { getEndpointUrl } from '../../../globals/utils'
import { IUrlProps } from '../../../globals/types'

const fetchCategories = ({ page = 1, limit = 10, filters }: IUrlProps): any => {
    const currentAccessToken = sessionStorage.getItem('access token')
    const api = createAPI(currentAccessToken)

    return api.get(`/db/category${getEndpointUrl({ filters, page, limit })}`)
        .then((response: AxiosResponse<IResponse>) => {
            console.log('category fetch worked', `/db/category${getEndpointUrl({ filters, page, limit })}`, response)
            return {
                count: response.data.count,
                data: response.data.data
            }
        })
        .catch((err) => console.log(err))
}


export {
    fetchCategories
}