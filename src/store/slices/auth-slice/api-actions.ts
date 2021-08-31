import { createAPI } from "../../../services/api";
import { AuthCredentials } from "../../../globals/const";
import { AxiosResponse } from "axios";

import { ILoginResponse } from "./types"

const getLoginCredentials = () => {
    return JSON.stringify({
        username: AuthCredentials.name,
        password: AuthCredentials.password
    })
}

const api = createAPI()

const fetchAuthorization = (): Promise<ILoginResponse> => {
    return api.post('/auth/login', getLoginCredentials())
        .then((response: AxiosResponse) => {
            return response.data
        })
        .catch((err) => console.log(err))
}

export {
    fetchAuthorization
}